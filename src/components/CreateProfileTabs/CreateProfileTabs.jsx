import React, { useState } from "react";

import Css from "./CreateProfileTabs.module.css";
import { Form, Formik } from "formik";
import { useSelector } from "react-redux";
import {

  selectUserRole,
} from "../../redux/auth/selectors.js";

const CreateProfileTabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const userRole = useSelector(selectUserRole);



  return (
    <div className={Css.TabsArea}>
      <div className={Css.Header}>
        <ul className={Css.TabList}>
          <TabItem
            step={1}
            title="Step 1: Basic Info"
            isActive={activeTab === 1}
            toggleClick={() => setActiveTab(1)}
          />
          <TabItem
            step={2}
            title="Step 2: Profile Details"
            isActive={activeTab === 2}
            toggleClick={() => setActiveTab(2)}
          />
          <TabItem
            step={3}
            title="Step 3: Confirm & Submit"
            isActive={activeTab === 3}
            toggleClick={() => setActiveTab(3)}
          />
        </ul>
      </div>
      <div className={Css.Body}>
        <Formik>
          <Form>
            {activeTab === 1 && (
              <div className={Css.TabContent}>
                Content for Step 1: Basic Info
                <h2> Role : {userRole}</h2>
              </div>
            )}
            {activeTab === 2 && (
              <div className={Css.TabContent}>
                Content for Step 2: Profile Details
              </div>
            )}
            {activeTab === 3 && (
              <div className={Css.TabContent}>
                Content for Step 3: Confirm & Submit
              </div>
            )}
          </Form>
        </Formik>
      </div>
    </div>
  );
};

const TabItem = ({ step, title, isActive, toggleClick }) => {
  return (
    <li
      className={`${Css.TabItem} ${isActive ? Css.active : ""}`}
      onClick={toggleClick}
    >
      {title}
    </li>
  );
};

export default CreateProfileTabs;
