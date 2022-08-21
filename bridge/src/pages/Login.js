import { useContext, useState } from "react"
import { Redirect } from "react-router-dom"
import { AppContext } from "../contexts/AppContext"

const Login = () => {
  const { isSignup, setIsSignup, isSchool, setIsSchool } = useContext(AppContext)
  const [userName, setUserName] = useState("")
  const [pass, setPass] = useState("")

  const handleUserName = (e) => {
    setUserName(e.target.value)
  }

  const handlePass = (e) => {
    setPass(e.target.value)
  }

  const handleIsSchool = (school) => {
    setIsSchool(school)
    console.log(isSchool)
  }

  if (!isSignup) {
    return <Redirect to="/signup" />
  }

  return (
    <>
      <input
        id="type1"
        type="radio"
        name="userType"
        defaultChecked
        onClick={() => handleIsSchool(true)}
      />
      <label htmlFor="type1">学校関係者</label>
      <br />
      <input
        id="type2"
        type="radio"
        name="userType"
        onClick={() => handleIsSchool(false)}
      />
      <label htmlFor="type2">フードバンク運営</label>
      <ul>
        <li>
          <label htmlFor="group">{isSchool ? "学校名" : "団体名"}</label>
          <input
            type="text"
            value={userName}
            onChange={handleUserName}
          />
        </li>
        <li>
          <label htmlFor="pass">パスワード</label>
          <input
            type="password"
            value={pass}
            onChange={handlePass}
          />
        </li>
      </ul>
      <input type="button" value="ログイン" />
      <br />
      <input type="button" value="新規登録" onClick={() => { setIsSignup(!isSignup) }} />
    </>
  )
}

export default Login