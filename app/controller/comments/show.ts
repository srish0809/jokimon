import { LoaderArgs, json } from "@remix-run/node";
import { prisma } from "../../utils/db.server";

export const showCommentLoader = async ({ params }: LoaderArgs) => {
  const comment = await prisma.comment.findUnique({
    where: { id: params.comment },
  });
  if (!comment) {
    throw new Error("comment not found");
  }
  console.log(comment, "from show comment ts");

  return json({ comment });
};
