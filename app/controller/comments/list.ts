import { json } from "@remix-run/node";
import { prisma } from "../../utils/db.server";

export const listComment= async () => {
  const comments = await prisma.comment.findMany();

  return json({ comments });
};