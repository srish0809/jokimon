// import { useActionData } from "@remix-run/react";

// import { newCommentAction } from "../controller/comments/new";

// export const action = newCommentAction;

// export default function NewCommentRoute() {
//   const actionData = useActionData<typeof action>();

//   return (
//     <div>
//       <p>Add your own comment </p>
//       <form method="post">
//         <div>
//           <label>
//             Comment:{" "}
//             <input
//               defaultValue={actionData?.fields?.comment}
//               comment="comment"
//               type="text"
//               aria-errormessage={
//                 actionData?.fieldErrors?.comment ? "name-error" : undefined
//               }
//             />
//           </label>
//           {actionData?.fieldErrors?.comment ? (
//             <p className="form-validation-error" id="name-error" role="alert">
//               {actionData.fieldErrors.comment}
//             </p>
//           ) : null}
//         </div>

//         <div>
//           {actionData?.formError ? (
//             <p className="form-validation-error" role="alert">
//               {actionData.formError}
//             </p>
//           ) : null}
//           <button type="submit" className="button">
//             Add
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
