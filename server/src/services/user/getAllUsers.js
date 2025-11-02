import User from "../../models/user.js";

const getAllUsers = async () => {
  const users = await User.find();
  if (!users) throw createHttpError(404, "No users found");
  return users;
};

export default getAllUsers;
