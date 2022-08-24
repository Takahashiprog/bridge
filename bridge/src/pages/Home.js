import { useContext, useEffect } from 'react'
import EditBio from '../components/EditBio'
import History from '../components/History'
import Message from '../components/Message'
import NearClient from '../components/NearClients'
import { AppContext } from '../contexts/AppContext'
import { Box, Button, Spacer, VStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

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
      <Box margin="20px">
        <VStack spacing="40px">
          <Spacer />
          <NearClient />
          <History />
          <Message />
          <EditBio />
          <Spacer />
          {isSchool ? <>
            <Button
              onClick={() => navigate("/register")}
              colorScheme="blue"
              width="200px"
            >商品登録へ</Button>
          </> : <></>}
          <Button
            onClick={() => {
              setIsLogin(false)
              navigate("/login")
            }}
            colorScheme="red"
            width="200px"
          >ログアウト</Button>
        </VStack>
      </Box>
    </>
  )
}

export default Home