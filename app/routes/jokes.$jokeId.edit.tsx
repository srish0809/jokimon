import { Link, useLoaderData } from "@remix-run/react";
import { showJokesLoader } from "../controller/jokes/show";

export const loader = showJokesLoader;

export default function JokeRoute() {
  const data = useLoaderData<typeof loader>();
  return (
    <div>
      <h4>Here's your hilarious joke:</h4>
      <p>{data.joke.content}</p>
      <Link to="update">Your Joke name: "{data.joke.name}"</Link>
      <p>Comments on this joke are as follows:</p>
    </div>
  );
}
