import axios from "axios";
const apiEndpoint = "http://localhost:8000/api/productcategory";

export function getProductCategory() {
  return axios.get(apiEndpoint);
}
