import Joi from "joi";
import { Roles } from "../../constants/index.js";
const registerUserSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required().messages({
    "string.base": "Username should be a type of text",
    "string.empty": "Username cannot be an empty field",
    "string.min": "Username should have a minimum length of {#limit}",
    "string.max": "Username should have a maximum length of {#limit}",
    "string.alphanum": "Username must only contain alpha-numeric characters",
    "any.required": "Username is a required field",
  }),
  email: Joi.string().email().required().messages({
    "string.base": "Email should be a type of text",
    "string.empty": "Email cannot be an empty field",
    "string.email": "Email must be a valid email",
    "any.required": "Email is a required field",
  }),
  password: Joi.string().min(8).required().messages({
    "string.base": "Password should be a type of text",
    "string.empty": "Password cannot be an empty field",
    "string.min": "Password should have a minimum length of {#limit}",
    "any.required": "Password is a required field",
  }),
  role: Joi.string()
    .valid(...Object.values(Roles))
    .messages({
      "string.base": "Role should be a type of text",
      "any.only": `Role must be one of [${Object.values(Roles).join(", ")}]`,
    }),
});

export default registerUserSchema;
