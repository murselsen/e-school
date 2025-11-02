import { model, Schema } from "mongoose";

const studentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    IdentificationNumber: {
      type: String,
      required: true,
      unique: true,
    },
    studentNumber: {
      type: String,
      required: true,
      unique: true,
    },
    classId: {
      type: Schema.Types.ObjectId,
      ref: "Classes",
      required: true,
    },
    parentId: {
      type: Schema.Types.ObjectId,
      ref: "Parents",
      default: null,
    },
    status: {
      type: String,
      enum: ["active", "inactive", "graduated"],
      default: "active",
    },
    medicalInfo: {
      bloodType: { type: String, enum: ["A", "B", "AB", "O"], required: true },
      allergies: { type: [String], default: [] },
    },
    associatedUserId: {
      type: Schema.Types.ObjectId,
      ref: ["Users"],
    },
  },
  { timestamps: true, versionKey: false }
);

const Student = model("Students", studentSchema);

export default Student;
