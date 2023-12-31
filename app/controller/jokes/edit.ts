import { ActionArgs, LoaderArgs, json, redirect } from "@remix-run/node";
import { prisma } from "../../utils/db.server";
import { badRequest } from "../../utils/request.server";
import { requireJokeId } from "../../utils/session.server";

function validateJokeContent(content: string) {
  if (content.length < 10) {
    return "That joke is too short";
  }
}

function validateJokeName(name: string) {
  if (name.length < 3) {
    return "That joke's name is too short";
  }
}

export const editJokesLoader = async ({ params }: LoaderArgs) => {
  const joke = await prisma.joke.findFirst({
    where: { id: params.jokeId },
  });
  if (!joke) {
    throw new Error("Joke not found");
  }
  // return json("srashti");
  return json(joke);
};

export const editJokesAction = async ({ request }: ActionArgs) => {
  const jokeId=await requireJokeId(request);
  const form = await request.formData();
  const content = form.get("content");
  const name = form.get("name");
  if (typeof content !== "string" || typeof name !== "string") {
    return badRequest({
      fieldErrors: null,
      fields: null,
      formError: "Form not submitted correctly.",
    });
  }

  const fieldErrors = {
    content: validateJokeContent(content),
    name: validateJokeName(name),
  };
  const fields = { content, name };
  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({
      fieldErrors,
      fields,
      formError: null,
    });
  }
};


