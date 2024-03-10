import axios from "axios";

const MainApi = axios.create({
  baseURL: "http://localhost:5001/",
});

export { MainApi };
