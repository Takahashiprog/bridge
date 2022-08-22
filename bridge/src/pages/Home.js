import { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import EditBio from '../components/EditBio'
import History from '../components/History'
import Message from '../components/Message'
import NearClient from '../components/NearClients'
import { AppContext } from '../contexts/AppContext'
import { Button, Input, VStack } from '@chakra-ui/react'

const Home = () => {
  // const { isLogin } = useContext(AppContext)

  // if (!isLogin) {
  //   return <Redirect to="/login" />
  // }

  return (
    <>
      <VStack spacing="20px">
        <Message />
        <NearClient />
        <History />
        <EditBio />
      </VStack>
      <Button>商品登録へ</Button>
    </>
  )
}

export default Home