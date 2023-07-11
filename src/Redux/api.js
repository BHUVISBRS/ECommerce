import axios from "axios";

export const loadUsersAPI = () => {
  return axios.get("https://fakestoreapi.com/products");
};

export const loadUsersAPI2 = () => {
  return axios.get("https://fakestoreapi.com/products/category/men's clothing");
};
export const ShowUserAPI = (userid) => {
  return axios.get(
    `https://fakestoreapi.com/products/category/women's clothing${userid}`
  );
};
export const AddTOCartAPI = () => {
  return axios.get("https://6485eb9ba795d24810b77ae5.mockapi.io/users");
};

export const AddTOCartAPIShow = (user) => {
  return axios.post("https://6485eb9ba795d24810b77ae5.mockapi.io/users", user);
};

export const CreateUserAPI = async (user) =>
  await axios.post("'https://fakestoreapi.com/products/categories'", user);

export const UpdateUserAPI = async (userInfo, user) =>
  axios.put(`https://fakestoreapi.com/products/${userInfo}`, user);

export const DeleteUserAPI = async (userid) =>
  await axios.delete(`https://fakestoreapi.com/products/${userid}`);
