import axios from "axios";
const apiEndpoint = "http://localhost:8000/api/products";

export function getProducts() {
  return axios.get(apiEndpoint);
}
// export function putProducts(id, data) {
//   axios.put(apiEndpoint + `/${id}`, data);
// }
