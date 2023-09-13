import { LoaderArgs, json } from "@remix-run/node";
import { prisma } from "../utils/db.server";
import { Link, useLoaderData } from "@remix-run/react";

export const loader = async ({ params }: LoaderArgs) => {
  const joke = await prisma.joke.findUnique({
    where: { id: params.jokeId },
  });
  if (!joke) {
    throw new Error("Joke not found");
  }
  return json({ joke });
};

export default function JokeRoute() {
  const data = useLoaderData<typeof loader>();
  return (
    <div>
      <p>Here's your hilarious joke:</p>
      <p>{data.joke.content}</p>
      <Link to=".">"{data.joke.name}" Joke Link</Link>
    </div>
  );
}
