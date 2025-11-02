import { model, Schema } from "mongoose";
import { Roles } from "../constants/index.js";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: [Roles.ADMIN, Roles.TEACHER, Roles.STUDENT, Roles.PARENT],
      default: Roles.STUDENT,
    },

    verify: {
      type: Boolean,
      default: false,
    },
    lastLogin: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true, versionKey: false }
);

userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

const User = model("Users", userSchema);

export default User;
