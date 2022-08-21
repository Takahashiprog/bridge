import { useContext, useState } from "react"
import { Redirect } from "react-router-dom"
import { AppContext } from "../contexts/AppContext"

const Signup = () => {
  const {
    isSignup,
    setIsSignup,
    isSchool,
    setIsSchool
  } = useContext(AppContext)

  const [userName, setUserName] = useState("")
  const [address, setAdress] = useState("")
  const [phone, setPhone] = useState("")
  const [pass, setPass] = useState("")

  if (isSignup) {
    return <Redirect to="/login" />
  }

  const handleUserName = (e) => {
    setUserName(e.target.value)
  }

  const handleAdress = (e) => {
    setAdress(e.target.value)
  }

  const handlePhone = (e) => {
    setPhone(e.target.value)
  }

  const handlePass = (e) => {
    setPass(e.target.value)
  }

  const handleIsSchool = (school) => {
    setIsSchool(school)
    console.log(isSchool)
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
        {isSchool ? <></> : (
          <li>
            <label htmlFor="address">住所</label>
            <input
              type="text"
              value={address}
              onChange={handleAdress}
            />
          </li>
        )}
        <li>
          <label htmlFor="phone">電話番号</label>
          <input
            type="tel"
            value={phone}
            onChange={handlePhone}
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
      <input type="button" value="登録" />
      <br />
      <input type="button" value="すでにアカウントをお持ちの方" onClick={() => setIsSignup(!isSignup)} />
    </>
  )
}

export default Signup