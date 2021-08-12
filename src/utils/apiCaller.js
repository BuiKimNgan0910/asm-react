import axios from "axios"; 
export default function callAPI(endpoint, method = "GET", body) {
  const API_URL = 'http://localhost:3000'
  return axios({
    method: method,
    url: `${API_URL}/${endpoint}`,
    data: body,
  })
    .catch((err) => console.log(err));
}
