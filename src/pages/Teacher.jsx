import styles from "./Styles/Dash.module.css";

// Components
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

const Teacher = ({ children }) => {
  return (
    <div className={styles.Dashboard}>
      <Sidebar />
      <div className={styles.MainContent}>
        <Navbar />
        <h1>Teacher Page</h1>
        {children}
      </div>
    </div>
  );
};

export default Teacher;
