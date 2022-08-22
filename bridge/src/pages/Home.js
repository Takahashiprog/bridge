import { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import EditBio from '../components/EditBio'
import History from '../components/History'
import Message from '../components/Message'
import NearClient from '../components/NearClients'
import { AppContext } from '../contexts/AppContext'
import { Box, Button, Spacer, VStack } from '@chakra-ui/react'

const Home = () => {
  const { isLogin, isRegister, setIsRegister } = useContext(AppContext)

  if (!isLogin) {
    return <Redirect to="/login" />
  }

  if(isRegister){
    return <Redirect to="/register" />
  }

  const handleToRegister = () => {
    setIsRegister(true)
  }

  return (
    <>
      <Box margin="20px">
        <VStack spacing="20px">
          <Message />
          <NearClient />
          <History />
          <EditBio />
          <Spacer />
        </VStack>
        <Button onClick={handleToRegister}>商品登録へ</Button>
      </Box>
    </>
  )
}

export default Home