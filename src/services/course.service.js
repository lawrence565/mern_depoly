import axios from "axios";
const API_USE = "http://;ocalhost:8080/api/course";

class CourseService {
  post(title, description, price) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.post(
      API_USE,
      { title, description, price },
      { headers: { Authorization: token } }
    );
  }

  // 使用學生id 尋找學生修習的課程
  getEnrolledCourses(_id) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }

    return axios.get(API_USE + "/student/" + _id, {
      headers: { Authorization: token },
    });
  }

  // 使用學生id 尋找學生修習的課程
  getCoursesByName(name) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }

    return axios.get(API_USE + "/findByName/" + name, {
      headers: { Authorization: token },
    });
  }

  enroll(_id) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.post(
      API_USE + "/enroll/" + _id,
      {},
      {
        headers: { Authorization: token },
      }
    );
  }

  // 使用講師id 尋找講師所開設的課程
  get(_id) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.get(API_USE + "/instructor" + _id, {
      headers: { Authorization: token },
    });
  }
}

export default new CourseService();
