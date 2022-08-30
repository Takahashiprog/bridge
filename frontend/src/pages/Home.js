import { useContext, useEffect } from 'react'
import History from '../components/History'
import Message from '../components/Message'
import NearClient from '../components/NearClients'
import { AppContext } from '../contexts/AppContext'
import { Spacer, VStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import MyHeader from '../components/MyHeader'
import FoodList from '../components/FoodList'
import MyFooter from '../components/MyFooter'
// import axios from "axios"

const Home = () => {
  // axios({
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Methods": "POST,GET,PUT,DELETE",
  //     "Access-Control-Allow-Headers": "Content-Type"
  //   },
  // })
  // console.log(axios.post("http://localhost:3000/schools/signup", {"school_id": "aaa", "password": "aaa"}))

  const { isLogin, isSchool } = useContext(AppContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLogin) {
      navigate("/login")
    }
  }, [isLogin, navigate])

  return (
    <>
      <MyHeader />
      <VStack spacing="160px" overflowX="hidden">
        {isSchool ? <FoodList /> : <Spacer />}
        <NearClient />
        <History />
        <Message />
        <Spacer />
      </VStack>
      <MyFooter />
    </>
  )
}

export default Home