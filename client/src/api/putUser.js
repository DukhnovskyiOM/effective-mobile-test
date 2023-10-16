import axios from "axios";

export const putUser = async (user, id) =>
    (await axios.put(`http://localhost:5000/users/${id}`, user)).data;