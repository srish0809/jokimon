import { redirect } from "@remix-run/node";
import { logoutAction } from "../controller/auth/logout";

export const action = logoutAction;

export const loader = async () => redirect("/");
