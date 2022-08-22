import { useContext } from 'react'
import EditBio from '../components/EditBio'
import History from '../components/History'
import Message from '../components/Message'
import NearClient from '../components/NearClients'
import { AppContext } from '../contexts/AppContext'
import { Box, Button, Spacer, VStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const { isLogin, setIsLogin} = useContext(AppContext)
  const navigate = useNavigate()

  if (!isLogin) {
    navigate("/login")
  }

  const handleLogout = () => {
    setIsLogin(false)
  }

  return (
    <>
      <Box margin="20px">
        <VStack spacing="40px">
          <Spacer />
          <NearClient />
          <History />
          <Message />
          <EditBio />
          <Spacer />
          <Button 
            onClick={() => navigate("/register")}
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