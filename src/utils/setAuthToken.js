import rootApi from "../constants/rootApi.js";
const setAuthToken = (token) => {
  if (token) {
    rootApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
};
export default setAuthToken;
