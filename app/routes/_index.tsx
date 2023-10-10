import { LinksFunction, LoaderFunction, json } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState } from "react";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export let loader: LoaderFunction = async () => {
  return json({ mode: "light" });
};

export default function IndexRoute() {
 

  return (
    <div className="container">
      <div className="content">
        <h1>
          Remix <span>Jokes!</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="login">Login to Read Jokes</Link>
            </li>
          </ul>
        </nav>
      
      </div>
    </div>
  );
}
