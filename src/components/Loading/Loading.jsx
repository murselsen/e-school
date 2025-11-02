import React from "react";
import { CircleLoader } from "react-spinners";

// Styles
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <dialog className={styles.LoadingDialog} open>
      <CircleLoader size={150} color={"#CA48C8"} />
      <p>Loading...</p>
    </dialog>
  );
};

export default Loading;
