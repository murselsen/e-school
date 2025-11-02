import Dashboard from "./Dashboard";
import styles from "./Styles/Dash.module.css";
const Student = ({ children }) => {
  return (
    <div className={styles.Dashboard}>
      <Sidebar />
      <div className={styles.MainContent}>
        <Navbar />
        <h1>Student Page</h1>
        {children}
      </div>
    </div>
  );
};

export default Student;
