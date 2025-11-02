import { model, Schema, SchemaType } from "mongoose";

const classSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    teacherId: {
      type: Schema.Types.ObjectId,
      ref: "Teachers",
      default: null,
    },
    capacity: {
      type: Number,
      default: 30,
    },
    roomNumber: {
      type: String,
      default: "",
    },
  },
  { timestamps: true, versionKey: false }
);

const Class = model("Classes", classSchema);

export default Class;
