
import axios from 'axios';



export const loadUsersAPI = () => {
    return axios.get("https://fakestoreapi.com/products")
}


export const CreateUserAPI = async (user) => await axios.post("https://fakestoreapi.com/products", user);

export const UpdateUserAPI = async (userInfo, user) => axios.put(`https://fakestoreapi.com/products/${userInfo}`, user);

export const DeleteUserAPI = async (userid) => await axios.delete(`https://fakestoreapi.com/products/${userid}`);

export const ShowUserAPI = (userid) => axios.get(`https://fakestoreapi.com/products/${userid}`);