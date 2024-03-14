import axios from "axios";

const API = "http://localhost:8000";

export const AuthUserSignUp = async (
  firstName,
  lastName,
  email,
  password,
  phoneNumber
) => {
  return await axios.post(`${API}/user/signup`, {
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
  });
};

export const AuthUserLogin = async (email, password) => {
  return await axios.post(`${API}/user/login`, {
    email,
    password,
  });
};

export const AuthGetById = async (id) => {
  return await axios.get(`${API}/blog/${id}`);
};

export const AuthHandleUserData = async (id, data) => {
  return await axios.put(`${API}/blog/${id}`, data);
};

export const AuthAllBlogData = async () => {
  return await axios.get(`${API}/blog`);
};

export const AuthDeleteById = async (id) => {
  return await axios.delete(`${API}/blog/${id}`);
};

//doubt
export const AuthGetMyData = async (id) => {
  return await axios.get(`${API}/blog/myblogs/${id}`);
};

export const AuthNewBlog = async (title, body, authorId) => {
  return await axios.post(`${API}/blog`, {
    title,
    body,
    authorId,
  });
};
