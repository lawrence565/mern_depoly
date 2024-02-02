// 扮演一個服務器的角色
import axios from "axios";
const API_URL = "http://localhost:8080/api/user";

class AuthService {
  login(email, password) {
    return axios.post(API_URL + "/login", { email, password });
  }
  logout() {
    localStorage.removeItem("user");
  }
  register(username, email, password, role) {
    return axios.post(API_URL + "/register", {
      username,
      email,
      password,
      role,
    }); // 回傳一個promise 檔案
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService(); // 執行他的Constructor
