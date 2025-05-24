import { ROLE_ADMIN, ROLE_MERCHANT } from "@/app/constants/Role";

export const allowedAdminRoles = (roles) => {
  return roles?.some((role) => [ROLE_ADMIN, ROLE_MERCHANT].includes(role));
};
