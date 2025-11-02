import * as Yup from "yup";

const RegisterFormSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "⚠️ Username must be at least 3  characters")
    .required("❌ Username is required"),
  email: Yup.string()
    .email("⚠️ Invalid email")
    .required("❌ Email is required"),
  role: Yup.string().required("❌ Role is required"),
  password: Yup.string()
    .min(8, "⚠️ Password must be at least 8 characters")
    .required("❌ Password is required"),
});
export default RegisterFormSchema;
