import axios from "axios"

const baseUrl = "http://localhost:3000"

export const postSchoolInfo = (name, pass) => {
  const data = {"school_id": name, "password": pass}
  axios.post(baseUrl + "/schools/signup", data)
  .then((res) => {
    console.log(res)
  })
  .catch(err => {
    console.log("err:", err)
  })
}

export const postSchoolLogin = (name, pass) => {
  const data = {"school_id": name, "password": pass}
  axios.post(baseUrl + "/schools/login", data)
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log("err:", err)
  })
}


