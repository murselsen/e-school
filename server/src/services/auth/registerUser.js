import User from "../../models/user.js";
import createHttpError from "http-errors";
import bcrypt from "bcrypt";

const registerUser = async (payload) => {
  // sistemde mail var mı kontrol et
  const existingUser = await User.findOne({ email: payload.email });
  if (existingUser) throw createHttpError(409, "Email is use");

  // yoksa yeni kullanıcı oluştur
  const cryptedPassword = await bcrypt.hash(payload.password, 10);
  payload.password = cryptedPassword;

  return await User.create(payload);
};

export default registerUser;
