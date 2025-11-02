import Navbar from "../components/Navbar/Navbar";
import CreateProfileTabs from "../components/CreateProfileTabs/CreateProfileTabs";

import Css from "./Styles/CreateProfile.module.css";
const CreateProfile = () => {
  return (
    <div className={Css.Page}>
      <div className={Css.Header}>
        <Navbar />
      </div>
      <div className={Css.Content}>
        <CreateProfileTabs />
      </div>
    </div>
  );
};

export default CreateProfile;
