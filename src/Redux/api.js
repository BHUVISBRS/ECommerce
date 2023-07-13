import axios from "axios";

export const loadUsersAPI = () => {
  return axios.get("https://fakestoreapi.com/products/category/women's clothing");
};

export const loadUsersAPI2 = () => {
  return axios.get("https://fakestoreapi.com/products/category/men's clothing");
};
// export const ShowUserAPI = (users) => {
//   return axios.get(
//     `https://fakestoreapi.com/products/category/women's clothing${users}`
//   );
// };
export const AddTOCartAPI = () => {
  return axios.get("https://6485eb9ba795d24810b77ae5.mockapi.io/users");
};

export const AddTOCartAPIShow = (user) => {
  return axios.post("https://6485eb9ba795d24810b77ae5.mockapi.io/users", user);
};

export const MensCartAPI = (user) => {
  return axios.post("https://6485eb9ba795d24810b77ae5.mockapi.io/users", user);
};

export const CreateUserAPI = async (user) =>
  await axios.post("https://fakestoreapi.com/products/categories", user);

export const UpdateUserAPI = async (userInfo, user) =>
  axios.put(`https://fakestoreapi.com/products/${userInfo}`, user);

export const DeleteUserAPI = async (userid) =>
  await axios.delete(
    `https://6485eb9ba795d24810b77ae5.mockapi.io/users/${userid}`
  );
