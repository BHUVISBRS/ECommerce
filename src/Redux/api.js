
import axios from 'axios';



export const loadUsersAPI = async () => await axios.get('https://6485eb9ba795d24810b77ae5.mockapi.io/user');


export const CreateUserAPI = async (user) => await axios.post("https://6485eb9ba795d24810b77ae5.mockapi.io/user", user);

export const UpdateUserAPI = async (userInfo, user) => axios.put(`https://6485eb9ba795d24810b77ae5.mockapi.io/user/${userInfo}`, user);

export const DeleteUserAPI = async (userid) => await axios.delete(`https://6485eb9ba795d24810b77ae5.mockapi.io/user/${userid}`);

export const ShowUserAPI = async (userid) => await axios.get(`https://6485eb9ba795d24810b77ae5.mockapi.io/user/${userid}`);