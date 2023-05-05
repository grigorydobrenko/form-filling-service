import axios from 'axios';

const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party";
const token = "4beb139ce4fa7e358b7e968ff809f4ff2a64fe1a";

const options = {
    method: "POST",
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
    },
}

export const instance = axios.create({
    baseURL: url,
    headers: options.headers
});