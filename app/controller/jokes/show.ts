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
// export const editJokeAction = async ({ request }: ActionArgs) => {
//   const form = await request.formData();
//  return redirect(`/jokes/${joke.id/edit}`)
//   }
