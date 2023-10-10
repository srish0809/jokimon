import { getUser } from "~/utils/session.server";
import { prisma } from "../../utils/db.server";
import { json } from "@remix-run/node";
import type { Request } from "@remix-run/node";

const jokesLoader = async ({ request }: { request: Request }) => {
  const queryParams = new URLSearchParams(request.url.split("?")[1]);
  const page = parseInt(queryParams.get("page") || "1", 10);
  let perPage = parseInt(queryParams.get("perPage") || "8", 10);

  if (perPage > 50) {
    perPage = 50;
  }

  const skip = (page - 1) * perPage;

  const jokeListItems = await prisma.joke.findMany({
    orderBy: { createdAt: "desc" },
    select: { id: true, name: true, category: true },
    skip,
    take: perPage,
  });

  const user = await getUser(request);

  return json({ jokeListItems, user });
};

export default jokesLoader;
