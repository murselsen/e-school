import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";
const Slink = ({ to, allowedRoles, title, selectedRole, children }) => {
  if (!allowedRoles.includes(selectedRole)) {
    return null;
  }

  to = to === "/" ? selectedRole : selectedRole + "/" + to;
  return (
    <Link to={`/${to}`} className={styles.NavLink}>
      {title}
      {children}
    </Link>
  );
};

export default Slink;
