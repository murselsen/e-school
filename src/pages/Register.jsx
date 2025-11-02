import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

// Redux
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/auth/operations";

// Validation
import RegisterFormSchema from "../validation/RegisterForm";

// Images
import logo from "../assets/logo.png";

// Css
import Css from "./Styles/Auth.module.css";
// Icons
import { MdEmail, MdPassword, MdOutlineChecklist } from "react-icons/md";
import { HiMiniUserCircle } from "react-icons/hi2";

const Register = () => {
  const dispatch = useDispatch();

  const formOnSubmit = (values, event) => {
    console.log(values);
    dispatch(registerUser(values));
    event.resetForm();
  };

  return (
    <div className={Css.Page}>
      <div className={Css.InfoBox}>
        <div className={Css.LogoBox}>
          <img src={logo} alt="Logo" className={Css.Logo} />
        </div>
        <div className={Css.InfoContent}>
          <h1 className={Css.InfoTitle}>E-School Management System</h1>
          <p className={Css.InfoDescription}>
            Welcome to the E-School Management System. <br /> Please sign in or
            to continue.
          </p>
          <hr />
          <a href="/login" className={Css.InfoLink}>
            login
          </a>
        </div>
      </div>
      <div className={Css.FormBox}>
        <div className={Css.FormArea}>
          <div className={Css.FormHeader}>
            <img src={logo} alt="Logo" className={Css.Logo} />
            <h2 className={Css.FormTitle}>Register</h2>
          </div>
          <Formik
            initialValues={{
              username: "",
              role: "",
              email: "",
              password: "",
            }}
            onSubmit={formOnSubmit}
            validationSchema={RegisterFormSchema}
          >
            <Form className={Css.Form}>
              {/* Email */}
              <div className={Css.FormGroup}>
                <label className={Css.FormGroup_Label}>Username</label>
                <div className={Css.FormGroup_Box}>
                  <HiMiniUserCircle className={Css.FormGroup_Box_Icon} />
                  <Field
                    name="username"
                    type="text"
                    className={Css.FormGroup_Box_Input}
                    placeholder="Enter your username"
                  />
                </div>
                <ErrorMessage
                  name="email"
                  component={"span"}
                  className={Css.FormGroup_ErrorMessage}
                />
              </div>
              <div className={Css.FormGroup}>
                <label className={Css.FormGroup_Label}>Email</label>
                <div className={Css.FormGroup_Box}>
                  <MdEmail className={Css.FormGroup_Box_Icon} />
                  <Field
                    name="email"
                    type="email"
                    className={Css.FormGroup_Box_Input}
                    placeholder="Enter your email"
                  />
                </div>
                <ErrorMessage
                  name="email"
                  component={"span"}
                  className={Css.FormGroup_ErrorMessage}
                />
              </div>
              <div className={Css.FormGroup}>
                <label className={Css.FormGroup_Label}>Role</label>
                <div className={Css.FormGroup_Box}>
                  <MdOutlineChecklist className={Css.FormGroup_Box_Icon} />
                  <Field
                    as="select"
                    name="role"
                    value="student"
                    className={Css.FormGroup_Box_Input}
                  >
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                    <option value="parent">Parent</option>
                  </Field>
                </div>
                <ErrorMessage
                  name="email"
                  component={"span"}
                  className={Css.FormGroup_ErrorMessage}
                />
              </div>
              {/* Password */}
              <div className={Css.FormGroup}>
                <label className={Css.FormGroup_Label}>Password</label>
                <div className={Css.FormGroup_Box}>
                  <MdPassword className={Css.FormGroup_Box_Icon} />
                  <Field
                    name="password"
                    type="password"
                    className={Css.FormGroup_Box_Input}
                    placeholder="Enter your password"
                  />
                </div>
                <ErrorMessage
                  name="password"
                  component={"span"}
                  className={Css.FormGroup_ErrorMessage}
                />
              </div>

              <div className={Css.FormButton}>
                <button type="submit" className={Css.FormButton_Btn}>
                  Sign Up
                </button>
                <button
                  type="reset"
                  className={[
                    Css.FormButton_Btn,
                    Css.FormButton_Btn_Reset,
                  ].join(" ")}
                >
                  Reset
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Register;
