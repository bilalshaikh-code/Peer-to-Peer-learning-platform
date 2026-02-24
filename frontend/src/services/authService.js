import API from "../api/api";

export const signupUser = async (data) => {
  const response = await API.post("auth/signup/", data);
  return response.data;
};

export const loginUser = async (data) => {
  const response = await API.post("auth/signin/", data);
  return response.data;
};