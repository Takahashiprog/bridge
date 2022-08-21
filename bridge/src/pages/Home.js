import { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import EditBio from '../components/EditBio'
import History from '../components/History'
import Message from '../components/Message'
import NearClient from '../components/NearClients'
import { AppContext } from '../contexts/AppContext'

const Home = () => {
  // const { isLogin } = useContext(AppContext)

  // if (!isLogin) {
  //   return <Redirect to="/login" />
  // }

  return (
    <>
      <Message />
      <br />
      <NearClient />
      <br />
      <History />
      <br />
      <EditBio />
      <br />
      <input type="button" value="商品登録へ" />
    </>
  )
}

export default Home