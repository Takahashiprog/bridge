import { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import EditBio from '../components/EditBio'
import History from '../components/History'
import Message from '../components/Message'
import NearClient from '../components/NearClients'
import { AppContext } from '../contexts/AppContext'
import { Box, Button, Spacer, VStack } from '@chakra-ui/react'

const Home = () => {
  const { isLogin, setIsLogin, isRegister, setIsRegister } = useContext(AppContext)

  if (!isLogin) {
    return <Redirect to="/login" />
  }

  if(isRegister){
    return <Redirect to="/register" />
  }

  const handleToRegister = () => {
    setIsRegister(true)
  }

  const handleLogout = () => {
    setIsLogin(false)
  }

  return (
    <>
      <Box margin="20px">
        <VStack spacing="50px">
          <Spacer />
          <NearClient />
          <History />
          <Message />
          <EditBio />
          <Spacer />
          <Button 
            onClick={handleToRegister}
            colorScheme="blue"
            width="200px"
          >商品登録へ</Button>
          <Button 
            onClick={handleLogout} 
            colorScheme="red"
            width="200px"
          >ログアウト</Button>
        </VStack>
      </Box>
    </>
  )
}

export default Home