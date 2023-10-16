import axios from "axios";

export const postUser = async (user) =>
    (await axios.post("http://localhost:5000/users", user)).data;