import { useContext } from "react"
import { Redirect } from "react-router-dom"
import { AppContext } from "../contexts/AppContext"

const Signup = () => {
  const { isSignup, setIsSignup } = useContext(AppContext)

  if (isSignup) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <input id="type1" type="radio" name="userType" checked />
      <label htmlFor="type1">学校関係者</label>
      <br />
      <input id="type2" type="radio" name="userType" />
      <label htmlFor="type2">フードバンク運営</label>
      <ul>
        <li>
          <label htmlFor="school">学校名</label>
          <input type="text" />
        </li>
        <li>
          <label htmlFor="address">住所</label>
          <input type="text" />
        </li>
        <li>
          <label htmlFor="phone">電話番号</label>
          <input type="tel" />
        </li>
        <li>
          <label htmlFor="pass">パスワード</label>
          <input type="password" />
        </li>
      </ul>
      <input type="button" value="登録" />
      <br />
      <input type="button" value="ログイン" onClick={() => setIsSignup(!isSignup)}/>
    </>
  )
}

export default Signup