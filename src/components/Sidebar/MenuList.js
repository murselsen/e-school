import { allowedRoles } from "../../constants/index.js";
import Slink from "./Slink";
const navList = [
  {
    to: "/",
    title: "Dashboard",
    allowedRoles: [
      allowedRoles.ADMIN,
      allowedRoles.TEACHER,
      allowedRoles.STUDENT,
      allowedRoles.PARENT,
    ],
  },
  { to: "teachers", title: "Teacher List", allowedRoles: [allowedRoles.ADMIN] },
  {
    to: "users",
    title: "User List",
    allowedRoles: [allowedRoles.ADMIN],
  },
];

export default navList;
