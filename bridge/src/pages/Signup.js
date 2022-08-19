
const Signup = () => {
  return (
    <div>
      <div>
        <label htmlFor="school">学校名</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="address">住所</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="phone">電話番号</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="pass">パスワード</label>
        <input type="text" />
      </div>
      <button>登録</button>
    </div>
  )
}

export default Signup