import axios from "axios";

export function getMessage() {
  return axios.get("http://localhost:8000/api/message");
}

// const message = "Hello wo!";
// export default function getMessage() {
//   return message;
// }
