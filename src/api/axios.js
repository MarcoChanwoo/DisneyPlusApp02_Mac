import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "1c4162566b03dc0a24d8d6327091b9d5",
        language: "ko-KR",
    },
});

export default instance;
