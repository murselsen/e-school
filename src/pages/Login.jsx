import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

// Redux
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/auth/operations";

// Validation
import { EmailSchema, UsernameSchema } from "../validation/LoginForm";

// Images
import logo from "../assets/logo.png";

// Css
import Css from "./Styles/Auth.module.css";
// Icons
import { MdEmail, MdPassword } from "react-icons/md";
import { HiMiniUserCircle } from "react-icons/hi2";
const Login = () => {
  const [formType, setFormType] = useState("email");

  const dispatch = useDispatch();
  const formOnSubmit = (values, event) => {
    for (let key in values) {
      if (values[key].trim() === "" || values[key] === null) {
        delete values[key];
      }
    }
    dispatch(loginUser(values));
    event.resetForm();
  };

  const schema = formType === "email" ? EmailSchema : UsernameSchema;
  return (
    <div className={Css.Page}>
      <div className={Css.InfoBox}>
        <div className={Css.LogoBox}>
          <img src={logo} alt="Logo" className={Css.Logo} />
        </div>
        <div className={Css.InfoContent}>
          <h1 className={Css.InfoTitle}>E-School Management System</h1>
          <p className={Css.InfoDescription}>
            Welcome to the E-School Management System. <br /> Please sign up to
            continue.
          </p>
          <hr />
          <a href="/register" className={Css.InfoLink}>
            Register
          </a>
          <a href="/resetPassword" className={Css.InfoLink}>
            Forgot your password?
          </a>
        </div>
      </div>
      <div className={Css.FormBox}>
        <div className={Css.FormArea}>
          <div className={Css.FormHeader}>
            <img src={logo} alt="Logo" className={Css.Logo} />
            <h2 className={Css.FormTitle}>Login</h2>
          </div>
          <Formik
            initialValues={{ password: "", email: "", username: "" }}
            onSubmit={formOnSubmit}
            validationSchema={schema}
          >
            <Form className={Css.Form}>
              {/* Form Type Selector */}
              <div className={Css.FormTypeSelector}>
                <button
                  type="reset"
                  className={
                    formType === "email"
                      ? [Css.FormTypeSelector_Btn, Css.Active].join(" ")
                      : Css.FormTypeSelector_Btn
                  }
                  onClick={() => setFormType("email")}
                >
                  <MdEmail /> Email
                </button>
                <button
                  type="reset"
                  className={
                    formType === "username"
                      ? [Css.FormTypeSelector_Btn, Css.Active].join(" ")
                      : Css.FormTypeSelector_Btn
                  }
                  onClick={() => setFormType("username")}
                >
                  <HiMiniUserCircle /> Username
                </button>
              </div>
              {/* Username */}
              {formType === "username" && (
                <div className={Css.FormGroup}>
                  <label className={Css.FormGroup_Label}>Username</label>
                  <div className={Css.FormGroup_Box}>
                    <HiMiniUserCircle className={Css.FormGroup_Box_Icon} />
                    <Field
                      name="username"
                      type="text"
                      className={Css.FormGroup_Box_Input}
                      placeholder="Enter your username"
                      disabled={formType !== "username"}
                    />
                  </div>
                  <ErrorMessage
                    name="username"
                    component={"span"}
                    className={Css.FormGroup_ErrorMessage}
                  />
                </div>
              )}
              {/* Email */}
              {formType === "email" && (
                <div className={Css.FormGroup}>
                  <label className={Css.FormGroup_Label}>Email</label>
                  <div className={Css.FormGroup_Box}>
                    <MdEmail className={Css.FormGroup_Box_Icon} />
                    <Field
                      name="email"
                      type="email"
                      className={Css.FormGroup_Box_Input}
                      placeholder="Enter your email"
                      disabled={formType !== "email"}
                    />
                  </div>
                  <ErrorMessage
                    name="email"
                    component={"span"}
                    className={Css.FormGroup_ErrorMessage}
                  />
                </div>
              )}
              {/* Password */}
              <div className={Css.FormGroup}>
                <label className={Css.FormGroup_Label}>Password</label>
                <div className={Css.FormGroup_Box}>
                  <MdPassword className={Css.FormGroup_Box_Icon} />
                  <Field
                    name="password"
                    type="password"
                    autoComplete="on"
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
                  Login
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

export default Login;
