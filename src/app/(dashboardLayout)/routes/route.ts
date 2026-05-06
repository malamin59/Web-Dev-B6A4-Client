import { adminRoutes } from "./adminRoutes";
import { tutorRoutes } from "./tutorsRoute";
import { userRoutes } from "./userRoutes";

export type Role = 'ADMIN' | 'STUDENT' | 'TUTOR';

export const routeMap: Record<Role, any> = {
  ADMIN: adminRoutes,
  STUDENT: userRoutes,
  TUTOR: tutorRoutes,
};