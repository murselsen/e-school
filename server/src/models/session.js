import { model, Schema } from "mongoose";

const sessionSchema = new Schema(
  {
    // Tokens
    accessToken: { type: String, required: true },
    refreshToken: { type: String, required: true },

    // Token validity times
    accessTokenValidUntil: { type: Date, required: true },
    refreshTokenValidUntil: { type: Date, required: true },

    associatedUserId: {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
  },
  { timestamps: true, versionKey: false }
);

const Session = model("Sessions", sessionSchema);

export default Session;
