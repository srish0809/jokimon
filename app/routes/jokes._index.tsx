import { Link, useLoaderData } from "@remix-run/react";
import { randomJokeLoader } from "../controller/jokes/random";

export const loader = randomJokeLoader;

export default function JokesIndexRoute() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <h4>Here's a random joke:</h4>
      <p>{data.randomJoke.content}</p>
      <Link to={data.randomJoke.id}>
        Your random Joke: "{data.randomJoke.name}"{" "}
      </Link>
    </div>
  );
}
