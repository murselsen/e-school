import Session from "../../models/session.js";

const logoutUser = async (payload) => {
  await Session.deleteOne({
    _id: payload.sessionId,
  });
};

export default logoutUser;
