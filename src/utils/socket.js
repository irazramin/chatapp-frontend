import Cookies from "js-cookie";
import io from "socket.io-client";
let query = {};

const token = Cookies.get("access_token");

if (token) {
  query.token = token;
}
let socket = io("http://localhost:5000", { query });

export default socket;
