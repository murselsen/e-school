import React from "react";

// Css
import PageCss from "./Styles/Page.module.css";
import Css from "./Styles/Loader.module.css";

// Images
import { CircleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className={PageCss.Page}>
      <div className={Css.MainBox}>
        <div className={Css.SpinnerBox}>
          {/* <CircleLoader className={Css.Spinner} size={85} color={"#ffffff"} /> */}
          <CircleLoader
            speedMultiplier={0.5}
            className={Css.Spinner}
            size={150}
            color={"#ffffff"}
          />
          <p className={Css.Text}>Loading...</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
