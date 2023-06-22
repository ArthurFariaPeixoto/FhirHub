import { BASE_URL } from "../../utils/constants";
import axios from "axios";

const api = axios.create({
    baseURL: BASE_URL,
});

const login = async (FormData) => {
    console.log(FormData);
    try {
        if (FormData.login === "Ana" && FormData.senha === "senha") {
            return true;
        } else {
            return false;
        }
    } catch (e) {
        return false;
    }
};

export default login;
