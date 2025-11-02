import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

// Images
import logo from "../../assets/logo.png";

import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
// Icons
import { RxHamburgerMenu } from "react-icons/rx";
import { GiExitDoor } from "react-icons/gi";

import { Navigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const [documentTitle, setDocumentTitle] = useState(document.title);
  const Navigate = useLocation();

  // const [user, setUser] = useState();

  const user = useSelector(selectUser);

  useEffect(() => {
    setDocumentTitle(document.title);
  }, [setDocumentTitle]);

  return (
    <div className={styles.Navbar}>
      <div className={styles.InfoBox}>
        <div className={styles.InfoContent}>
          <button className={styles.ToggleSidebarBtn}>
            <RxHamburgerMenu size={20} />
          </button>
          <h3 className={styles.InfoAppTitle}> {documentTitle} </h3>
        </div>
        <LocationListComp />
      </div>
      <div className={styles.ProfileBox}>
        <div className={styles.Content}>
          <img src={logo} alt="Profile" width={32} className={styles.Img} />
          <div className={styles.Info}>
            <span className={styles.Role}> {user && user.role}</span>
            <span className={styles.Name}> {user && user.username}</span>
          </div>
        </div>
        <button
          className={styles.ProfileBtn}
          onClick={() => {
            dispatch(logoutUser());
          }}
          title="Logout"
        >
          <GiExitDoor />
        </button>
      </div>
    </div>
  );
};

const LocationListComp = () => {
  const location = useLocation();

  const pathSegments = location.pathname
    .split("/")
    .filter((item) => item !== "");

  return (
    <ul className={styles.LocationList}>
      <li className={styles.LocationItem}>
        <span className={styles.LocationTitle}>Dashboard</span>
      </li>
      {pathSegments.map((segment, index) => (
        <li className={styles.LocationItem} key={index}>
          <span className={styles.LocationTitle}>{segment}</span>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
