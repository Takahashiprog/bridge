import { useContext, useState } from "react"
// import { Redirect } from "react-router-dom"
import { AppContext } from "../contexts/AppContext"
import { Input, Box, Text, Button, VStack, Center, Spacer} from "@chakra-ui/react"
import { useNavigate, Link } from "react-router-dom"
import MyHeader from "../components/MyHeader"

const Signup = () => {
  const {
    isSchool,
    setIsLogin,
  } = useContext(AppContext)

  const [userName, setUserName] = useState("")
  const [address, setAdress] = useState("")
  // const [phone, setPhone] = useState("")
  const [pass, setPass] = useState("")
  const navigate = useNavigate()

  const handleUserName = (e) => {
    setUserName(e.target.value)
  }

  const handleAdress = (e) => {
    setAdress(e.target.value)
  }

  // const handlePhone = (e) => {
  //   setPhone(e.target.value)
  // }

  const handlePass = (e) => {
    setPass(e.target.value)
  }

  const handleEndSignup = () => {

    // TODO post info

    setIsLogin(true)
    navigate("/")
  }

  return (
    <>
    <MyHeader />
    <Center position="absolute" height="90vh" width="full" top="10vh">
      <VStack
        padding="40px 80px"
        textAlign="left"
        borderRadius={25}
        boxShadow="2xl"
        spacing={30}
      >
        <Text
          fontSize={20}
          display="inline"
          paddingTop={5}
        >{isSchool ? "学校" : "団体"}アカウント作成</Text>
        <Box width={400}>
          <Text fontSize={14}>{isSchool ? "学校名" : "団体名"}</Text>
          <Input
            type="text"
            value={userName}
            onChange={handleUserName}
          />
        </Box>
        <Box width={400}>
          <Text fontSize={14}>住所</Text>
          <Input
            type="text"
            value={address}
            onChange={handleAdress}
          />
        </Box>
        <Box width={400}>
          <Text fontSize={14}>パスワード</Text>
          <Input
            type="password"
            value={pass}
            onChange={handlePass}
          />
        </Box>
        <Spacer />
        <VStack spacing={5}>
          <Button
            width={150}
            borderRadius="full"
            backgroundColor="#B9E3B2"
            boxShadow="md"
            _hover={{boxShadow: "none"}}
            onClick={handleEndSignup}
          >登録</Button>
          <Text fontSize={12}>アカウントをお持ちの方は
          <Link to="/login" style={{ "color": "blue" }}>こちら</Link>
          から</Text>
        </VStack>
      </VStack>
    </Center>
    </>
  )
}

export default Signup