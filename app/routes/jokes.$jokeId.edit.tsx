// import { Link, useActionData,  } from "@remix-run/react";
// import { editJokesAction,  } from "../controller/jokes/edit";

//  export const action = editJokesAction;

// export default function JokeRoute() {
//    const actionData = useActionData<typeof action>();
//   console.log("actionData");

//   return (
//     <div>
//       <p>Update your joke</p>
//       <form method="post">
//         <div>
//           <label>
//             Name:{" "}
//             <input
//               defaultValue={actionData?.fields?.name}
//               name="name"
//               type="text"
//               aria-invalid={Boolean(actionData?.fieldErrors?.name)}
//               aria-errormessage={
//                 actionData?.fieldErrors?.name ? "name-error" : undefined
//               }
//             />
//           </label>
//           {actionData?.fieldErrors?.name ? (
//             <p className="form-validation-error" id="name-error" role="alert">
//               {actionData.fieldErrors.name}
//             </p>
//           ) : null}
//         </div>
//         <div>
//           <label>
//             Content:{" "}
//             <textarea
//               defaultValue={actionData?.fields?.content}
//               name="content"
//               aria-invalid={Boolean(actionData?.fieldErrors?.content)}
//               aria-errormessage={
//                 actionData?.fieldErrors?.content ? "content-error" : undefined
//               }
//             />
//           </label>
//           {actionData?.fieldErrors?.content ? (
//             <p
//               className="form-validation-error"
//               id="content-error"
//               role="alert"
//             >
//               {actionData.fieldErrors.content}
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
