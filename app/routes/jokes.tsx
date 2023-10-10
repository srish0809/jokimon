import { Link, Outlet, useLoaderData, useLocation } from "@remix-run/react";
import stylesUrl from "~/styles/jokes.css";
import jokesLoader from "../controller/jokes/list";
import { useEffect, useState } from "react";
import { Category } from "@prisma/client";
import { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];
export const loader = jokesLoader;

function JokesRoute() {
  const data = useLoaderData<typeof loader>();
  const { search } = useLocation();

  const queryParams = new URLSearchParams(search);

  let page = parseInt(queryParams.get("page") || "1", 10);
  const itemsPerPage = parseInt(queryParams.get("perPage") || "5", 10);

  const totalPages = Math.ceil(data.jokeListItems.length / itemsPerPage);
  page = Math.max(1, Math.min(page, totalPages));
  const initialCategory = queryParams.get("category") || "";

  const [currentPage, setCurrentPage] = useState(page);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  useEffect(() => {
    queryParams.set("page", currentPage.toString());
    queryParams.set("perPage", itemsPerPage.toString());

    if (selectedCategory) {
      queryParams.set("category", selectedCategory);
    } else {
      queryParams.delete("category");
    }

    const newUrl = `?${queryParams.toString()}`;
    window.history.pushState({}, "", newUrl);
  }, [currentPage, itemsPerPage, selectedCategory]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const jokesWithCategory = data.jokeListItems.map((joke) => ({
    ...joke,
    category: "funny",
  }));

  const filteredJokes = selectedCategory
    ? data.jokeListItems.filter((joke) => joke.category === selectedCategory)
    : data.jokeListItems;

  const currentItems = filteredJokes.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="jokes-layout">
      <header className="jokes-header">
        <div className="container">
          <h1 className="home-link">
            <Link to="/" title="Remix Jokes" aria-label="Remix Jokes">
              <span className="logo">🤪</span>
              <span className="logo-medium">J🤪KES</span>
            </Link>
          </h1>
          {data.user ? (
            <div className="user-info">
              <span>{`Hi ${data.user.username}`}</span>
              <form action="/logout" method="post">
                <button type="submit" className="button">
                  Logout
                </button>
              </form>
            </div>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </header>
      <main className="jokes-main">
        <div className="container">
          <div className="jokes-list">
            <Link to=".">Get a random joke</Link>
            <p>Checkout these amazing jokes!!</p>
            <div>
              <label>
                <select
                  name="category"
                  onChange={handleCategoryChange}
                  value={selectedCategory}
                >
                  <option value="">All Categories</option>
                  {Object.values(Category).map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <ul>
              {currentItems.map(({ id, name }) => (
                <li key={id}>
                  <Link to={id}>{name}</Link>
                </li>
              ))}
            </ul>
            <div className="pagination">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span>{`Page ${currentPage} of ${totalPages}`}</span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
            <br />
            <Link to="new" className="button">
              Add your own
            </Link>
          </div>
          <div className="jokes-outlet">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}

export default JokesRoute;
