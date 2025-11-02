import { model, Schema } from "mongoose";
import { ContractTypes } from "../constants";
const teacherSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  contactInfo: {
    phone: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String },
  },
  contractInfo: {
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    salary: { type: String, required: true },
    contractType: {
      type: String,
      enum: [
        ContractTypes.FULL_TIME,
        ContractTypes.PART_TIME,
        ContractTypes.TEMPORARY,
      ],
    },
  },
  assignedClasses: {
    type: [Schema.Types.ObjectId],
    ref: "Classes",
    default: [],
  },
  biography: { type: String, default: "" },

  associatedUserId: {
    type: Schema.Types.ObjectId,
    ref: ["Users"],
  },
});

const Teacher = model("Teachers", teacherSchema);
export default Teacher;
