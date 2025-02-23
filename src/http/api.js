import axios from "axios";
axios.defaults.baseURL = "https://bwssulawesi2gorontalo.com/api/";
axios.defaults.headers.post["Content-Type"] = "application/json";
export default axios;