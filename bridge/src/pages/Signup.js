
const Signup = () => {
  return (
    <>
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
    </>
  )
}

export default Signup