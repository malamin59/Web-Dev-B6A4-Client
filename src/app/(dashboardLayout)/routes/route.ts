import { adminRoutes } from "./adminRoutes";
import { userRoutes } from "./userRoutes";

// create a variable
export const userInfo = {
  role: "admin",
};

export const routes = userInfo.role === "admin" ? adminRoutes : userRoutes;
