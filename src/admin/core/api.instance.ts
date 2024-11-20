import axios from "axios";

// Define the base URL directly
const BASE_URL = "http://216.250.13.150:6856";

const Api = axios.create({
  baseURL: BASE_URL,
});

const ApiFormData = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "multipart/form-data" },
});

export { Api, ApiFormData };
