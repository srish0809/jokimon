import { ActionArgs } from "@remix-run/node";
import { logout } from "../../utils/session.server";

export const logoutAction= async ({ request }: ActionArgs) => logout(request);