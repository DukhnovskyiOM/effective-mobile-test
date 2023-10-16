import axios from "axios";

export const getUsers = async () => (await axios.get("http://localhost:5000/users")).data;