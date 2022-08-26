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
<<<<<<< HEAD
<<<<<<<< HEAD: frontend / src / pages / Home.js
  const { isLogin, setIsLogin } = useContext(AppContext)
========
  const { isLogin } = useContext(AppContext)
>>>>>>>> 7f5b0ad44c89035f6c64f209b9517e17bcdadcf2:bridge/src/pages/Home.js
=======
  const { isLogin } = useContext(AppContext)
>>>>>>> 7f5b0ad44c89035f6c64f209b9517e17bcdadcf2
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLogin) {
      navigate("/login")
    }
  }, [isLogin, navigate])

  return (
    <>
<<<<<<< HEAD
<<<<<<<< HEAD: frontend / src / pages / Home.js
    < Box margin = "20px" color = "green.500" backgroundColor = "blue.50" >
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
          onClick={() => navigate("/Login")}

        >ログアウト</Button>
      </VStack>
      </Box >
========
=======
>>>>>>> 7f5b0ad44c89035f6c64f209b9517e17bcdadcf2
      <MyHeader />
      <VStack spacing={40} overflowX="hidden">
        <FoodList />
        <NearClient />
        <History />
        <Message />
        <Spacer />
      </VStack>
      <MyFooter />
<<<<<<< HEAD
  >>>>>>>> 7f5b0ad44c89035f6c64f209b9517e17bcdadcf2: bridge / src / pages / Home.js
=======
>>>>>>> 7f5b0ad44c89035f6c64f209b9517e17bcdadcf2
    </>
  )
}

export default Home