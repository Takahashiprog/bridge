import { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AppContext } from '../contexts/AppContext'

const Home = () => {
  const { isLogin } = useContext(AppContext)
  
  if (!isLogin) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <div>相手とのやりとり</div>
      <div>近くの相手一覧</div>
      <div>取引実績</div>
      <div>bioの編集？</div>
      <input type="button" value="商品登録" />
    </>
  )
}

export default Home