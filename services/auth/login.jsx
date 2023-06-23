import { BASE_URL } from "../../utils/constants";
import axios from "axios";

const api = axios.create({
    baseURL: BASE_URL,
});

const login = (FormData) => {
    try {
        return FormData.login === "Ana" && FormData.senha === "senha";
    } catch (e) {
        return false;
    }
};

export default login;
