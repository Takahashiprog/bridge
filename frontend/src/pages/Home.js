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

const Home = () => {
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