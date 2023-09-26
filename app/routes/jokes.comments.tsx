import type { LinksFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import stylesUrl from "~/styles/jokes.css";
import { listComment } from "../controller/comments/list";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export const loader = listComment;

export default function JokesRoute() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <h4>comments we received!!</h4>
      <ul>
        {data.comments.map((comment) => (
          <li>
            <div>{comment.comment}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
