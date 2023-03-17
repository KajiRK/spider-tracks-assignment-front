import axios, {AxiosInstance} from "axios";
import { env } from "./env";

const instance: AxiosInstance = axios.create({
    baseURL: env.baseUrl,
    headers: {
        Accept: 'text/json',
        'Content-Type': 'application/json'
    }
});

export default instance;