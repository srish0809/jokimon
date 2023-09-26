import { LoaderArgs, json } from "@remix-run/node";
import { prisma } from "../../utils/db.server";

export const showJokesLoader = async ({ params }: LoaderArgs) => {
  const joke = await prisma.joke.findUnique({
    where: { id: params.jokeId },
  });
  if (!joke) {
    throw new Error("Joke not found");
  }
  return json({ joke });
};
