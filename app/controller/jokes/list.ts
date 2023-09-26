import { getUser } from "~/utils/session.server";
import { prisma } from "../../utils/db.server";
import { json } from "@remix-run/node";
import type { Request } from "@remix-run/node";

const jokesLoader = async ({ request }: { request: Request }) => {
  const jokeListItems = await prisma.joke.findMany({
    orderBy: { createdAt: "desc" },
    select: { id: true, name: true },
    take: 5,
  });
  const user = await getUser(request);

  return json({ jokeListItems, user });
};

export default jokesLoader;
