import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("subsProfile")) {
    const token = localStorage.getItem("subsProfile");
    req.headers.Authorization = `Bearer ${JSON.parse(token).token}`;
  }
  return req;
});

export const postUser = (data) => API.post("/signup", data);
export const loginUser = (data) => API.post("/signin", data);
export const subsUser = (data) => API.post("/checkout", data);
export const reguUser = () => API.get("/regular");
export const premUser = () => API.get("/premium");
export const basicUser = () => API.get("/basic");
export const stanUser = () => API.get("/standard");
export const billing = () => API.post("/billing");
export const stanCancel = (data) => API.post("/subcancel", data);
