import axios from "axios";

// Constants
import { API_BASE_URL } from "./index.js";

const rootApi = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});
export default rootApi;
