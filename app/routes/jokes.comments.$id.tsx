import { Link, useLoaderData } from "@remix-run/react";
import { showCommentLoader } from "../controller/comments/show";

export const loader = showCommentLoader;

export default function JokesRoute() {
  const data = useLoaderData<typeof loader>();
  console.log(data, "dataaa");
  return (
    <div>
      <h4>comment</h4>
      <p>{data.comment.comment}</p>
      <Link to=".">Your comment: "{data.comment.comment}"</Link>
    </div>
  );
}
