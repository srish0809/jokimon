import { useActionData } from "@remix-run/react";
import { updateJokesAction } from "../controller/jokes/edit";

export const action = updateJokesAction;

export default function UpdateJokeRoute() {
  const actionData = useActionData<typeof action>();

  return (
    <div>
      <p>Add your own hilarious joke</p>
      <form method="post">
        <div>
          <label>Name: </label>
        </div>
        <div>
          <label>Content: </label>
        </div>
        <div>
          <button type="submit" className="button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
