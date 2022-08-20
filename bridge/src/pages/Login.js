
const Login = () => {
  return (
    <>
      <ul>
        <li>
          <label htmlFor="school">学校名</label>
          <input type="text" />
        </li>
        <li>
          <label htmlFor="pass">パスワード</label>
          <input type="password" />
        </li>
      </ul>
      <input type="button" value="ログイン" />
    </>
  )
}

export default Login