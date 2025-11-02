import React from "react";
import styles from "./Sidebar.module.css";

// Constants

import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Slink from "./Slink";

// Menu List
import navList from "./MenuList.js";

const Sidebar = () => {
  const selectUser = useSelector((state) => state.auth.user);
  return (
    <div className={styles.Sidebar}>
      {/* App Header | Logo - Name */}
      <div className={styles.Header}>
        <Link to={"/" + selectUser.role}>
          <img src={Logo} alt="E-School Logo" className={styles.AppLogo} />
        </Link>
        <h2 className={styles.AppName}>E-School Management System</h2>
      </div>
      <hr className={styles.SidebarHr} />
      {/* Navigation Links */}

      <ul className={styles.NavList}>
        {navList.map((item, index) => (
          <li className={styles.NavItem} key={index}>
            <Slink
              to={item.to}
              allowedRoles={item.allowedRoles}
              title={item.title}
              selectedRole={selectUser.role}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
