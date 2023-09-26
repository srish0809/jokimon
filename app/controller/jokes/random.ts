import { json } from "@remix-run/node";
import { prisma } from "../../utils/db.server";

export const randomJokeLoader = async () => {
  const count = await prisma.joke.count();
  const randomRowNumber = Math.floor(Math.random() * count);
  const [randomJoke] = await prisma.joke.findMany({
    skip: randomRowNumber,
    take: 1,
  });
  return json({ randomJoke });
};
