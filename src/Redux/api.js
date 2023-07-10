
import axios from 'axios';



export const loadUsersAPI = () => {
    return axios.get("https://fakestoreapi.com/products/category/women's clothing")
}

export const loadUsersAPI2 = () => {
    return axios.get("https://fakestoreapi.com/products/category/men's clothing")
}
export const AddTOCartAPI = () => {
    return axios.post("https://fakestoreapi.com/carts")
}

export const CreateUserAPI = async (user) => await axios.post("'https://fakestoreapi.com/products/categories'", user);

export const UpdateUserAPI = async (userInfo, user) => axios.put(`https://fakestoreapi.com/products/${userInfo}`, user);

export const DeleteUserAPI = async (userid) => await axios.delete(`https://fakestoreapi.com/products/${userid}`);

export const ShowUserAPI = (userid) => axios.get(`https://fakestoreapi.com/products/${userid}`);

// export const AddTOCartAPI = (userId) => axios.post(`https://fakestoreapi.com/carts`,userId);

