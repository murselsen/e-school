import * as Yup from "yup";

// Validation Schema
export const EmailSchema = Yup.object().shape({
  email: Yup.string()
    .email("⚠️ Invalid email")
    .required("❌ Email is required"),
  password: Yup.string()
    .min(6, "⚠️ Password must be at least 6 characters")
    .required("❌ Password is required"),
});

export const UsernameSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "⚠️ Username must be at least 3  characters")
    .required("❌ Username is required"),
  password: Yup.string()
    .min(8, "⚠️ Password must be at least 8 characters")
    .required("❌ Password is required"),
});
