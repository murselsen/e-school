import { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";

// Styles
// import "./App.css";

// Pages
const MainPage = lazy(() => import("./pages/Loader.jsx"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Admin = lazy(() => import("./pages/Admin"));
const Teacher = lazy(() => import("./pages/Teacher"));
const Student = lazy(() => import("./pages/Student"));
const Parent = lazy(() => import("./pages/Parent"));
const CreateProfile = lazy(() => import("./pages/CreateProfile"));

// Component
import RestrictedRoute from "./components/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute";
import ProtectedRole from "./components/ProtectedRole";
import Dashboard from "./pages/Dashboard";

// Teachers
// import { TList } from "./pages/Content/Teacher/Teacher";

// Users
const UList = lazy(() => import("./pages/Content/User/UList"));

const App = () => {
  return (
    <Suspense
      fallback={
        <>
          <MainPage />
        </>
      }
    >
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/create-profile"
          element={
            <PrivateRoute>
              <CreateProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRole allowed="admin" redirectTo="/">
              <Admin>Main Page</Admin>
            </ProtectedRole>
          }
        />
        <Route
          path="/admin/users"
          element={
            <ProtectedRole allowed="admin" redirectTo="/">
              <Admin>
                <UList />
              </Admin>
            </ProtectedRole>
          }
        />
        <Route
          path="/teacher"
          element={
            <ProtectedRole allowed="teacher" redirectTo="/">
              <Teacher />
            </ProtectedRole>
          }
        />
        <Route
          path="/student"
          element={
            <ProtectedRole allowed="student" redirectTo="/">
              <Student />
            </ProtectedRole>
          }
        />
        <Route
          path="/parent"
          element={
            <ProtectedRole allowed="parent" redirectTo="/">
              <Parent />
            </ProtectedRole>
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute>
              <Login />
            </RestrictedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute>
              <Register />
            </RestrictedRoute>
          }
        />
      </Routes>
      <Toaster position="top-center" />
    </Suspense>
  );
};

export default App;
