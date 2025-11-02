import { model, Schema } from "mongoose";
import { GradeType } from "../constants/index.js";
const gradeSchema = new Schema(
  {
    studentId: { type: Schema.Types.ObjectId, ref: "Students", required: true },
    courseId: { type: Schema.Types.ObjectId, ref: "Courses", required: true },
    score: { type: Number, required: true, min: 0, max: 100 },
    type: {
      type: String,
      enum: [GradeType.EXAM, GradeType.ASSIGNMENT, GradeType.QUIZ],
      required: true,
    },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true, versionKey: false }
);

const Grade = model("Grades", gradeSchema);

export default Grade;
