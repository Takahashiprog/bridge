import { useContext, useEffect } from 'react'
import EditBio from '../components/EditBio'
import History from '../components/History'
import Message from '../components/Message'
import NearClient from '../components/NearClients'
import { AppContext } from '../contexts/AppContext'
import { Button, Spacer, VStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import MyHeader from '../components/MyHeader'
import FoodList from '../components/FoodList'

const Home = () => {
  const { isLogin, setIsLogin, isSchool } = useContext(AppContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLogin) {
      navigate("/login")
    }
  }, [isLogin, navigate])

  return (
    <>
      <MyHeader />
      <VStack spacing={20}>
        <FoodList />
        <NearClient />
        <History />
        <Message />
        <EditBio />
        <Spacer />
        {isSchool ? <>
          <Button
            onClick={() => navigate("/register")}
            colorScheme="blue"
            width={200}
          >商品登録へ</Button>
        </> : <></>}
        <Button
          onClick={() => {
            setIsLogin(false)
            navigate("/login")
          }}
          colorScheme="red"
          width={200}
        >ログアウト</Button>
        <Spacer />
      </VStack>
    </>
  )
}

export default Home