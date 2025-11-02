import { model, Schema } from "mongoose";

const courseSchema = new Schema(
  {
    name: { type: String, required: true },
    teacherId: { type: [Schema.Types.ObjectId], ref: "Teachers" },
    classId: { type: [Schema.Types.ObjectId], ref: "Classes" },
  },
  { timestamps: true, versionKey: false }
);

const Course = model("Courses", courseSchema);

export default Course;
