// Components
import styles from "./Styles/Dash.module.css";

// Components
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

const Admin = ({ children }) => {
  return (
    <div className={styles.Dashboard}>
      <Sidebar />
      <div className={styles.MainContent}>
        <Navbar />

        {children}
      </div>
    </div>
  );
};

export default Admin;
