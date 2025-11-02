import { useEffect } from "react";

// Components
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader.jsx";

const Dashboard = () => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    const user = auth.user;
    const token = auth.token;
    const isVerified = auth.user.verify;

    if (!token) {
      navigate("/login");
      return;
    }

    // Eğer user bilgisi henüz gelmediyse bekle
    if (!user || !user.role) return;

    if (!isVerified) {
      navigate("/create-profile");
      return;
    } else {
      if (user.role === "admin") navigate("/admin");
      else if (user.role === "teacher") navigate("/teacher");
      else if (user.role === "student") navigate("/student");
      else if (user.role === "parent") navigate("/parent");
      else navigate("/login");
    }
  }, [auth.user, auth.token, navigate]);

  // User bilgisi gelene kadar loading gösterebilirsiniz
  if (!auth.user || !auth.user.role) {
    return <Loader />;
  }
};

export default Dashboard;
