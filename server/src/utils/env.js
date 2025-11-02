import createHttpError from "http-errors";
import dotnev from "dotenv";

dotnev.config();

export const env = (key, defaultValue) => {
  const value = process.env[key];
  if (value) return value;
  if (defaultValue) return defaultValue;
  throw createHttpError(500, `${key} is not defined in .env`);
};
