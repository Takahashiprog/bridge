import axios from "axios"

const baseUrl = "http://localhost:3000"

const postSchoolInfo = (data) => {
  const res = axios.post(baseUrl + "/schools/signup", data)
  .then(() => {
    return res
  })
  .catch(err => {
    console.log("err:", err)
  })
  return res
}