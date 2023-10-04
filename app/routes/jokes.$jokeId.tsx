import { Link, useLoaderData } from "@remix-run/react";
import { showJokesLoader } from "../controller/jokes/show";

export const loader = showJokesLoader;

export default function JokeRoute() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <h4>Here's your hilarious joke:</h4>
      <p>{data.joke.content}</p>
      <Link to=".">Your Joke name: "{data.joke.name}"</Link>
      <br /> <br />
      <Link to="edit" className="button">
        Edit your joke
      </Link>{" "}
      <br /> <br />
      <Link to="commemt" className="button">
        comment on joke
      </Link>
    </div>
  );
}
