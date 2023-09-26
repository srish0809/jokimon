import { ActionArgs, redirect } from "@remix-run/node";

import { badRequest } from "~/utils/request.server";
import { requireJokeId } from "~/utils/session.server";
import { prisma } from "../../utils/db.server";

export const newCommentAction = async ({ request }: ActionArgs) => {
  const jokeId = await requireJokeId(request);
  const form = await request.formData();
  const comment = form.get("comment");
  if (typeof comment !== "string") {
    return badRequest({
      fields: null,
      formError: "Form not submitted correctly.",
    });
  }

  const fields = { comment };

  const Comment = await prisma.comment.create({
    data: { ...fields, jokeId: jokeId },
  });
  return redirect(`/jokes/comments/${Comment.id}`);
};
