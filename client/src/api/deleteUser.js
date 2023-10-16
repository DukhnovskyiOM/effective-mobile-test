import axios from "axios";

export const deleteUser = async (id) =>
    (await axios.delete(`http://localhost:5000/users/${id}`)).data;
