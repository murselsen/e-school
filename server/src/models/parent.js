import { model, Schema } from "mongoose";

const parentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  contactInfo: {
    phone: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String },
  },
  children: {
    type: [Schema.Types.ObjectId],
    ref: "Students",
    default: [],
  },
  notes: {
    type: [String],
    default: [],
  },

  associatedUserId: {
    type: Schema.Types.ObjectId,
    ref: ["Users"],
  },
});

const Parent = model("Parents", parentSchema);

export default Parent;
