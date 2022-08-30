import { useContext, useState } from "react"
import { AppContext } from "../contexts/AppContext"
import { Input, Box, Text, Button, VStack, Center, Spacer } from "@chakra-ui/react"
import { useNavigate, Link } from "react-router-dom"
import MyHeader from "../components/MyHeader"
// import { postSchoolInfo } from "../utils/utils"

const Signup = () => {
  const {
    isSchool,
    setIsLogin,
    setLoginName,
  } = useContext(AppContext)

  const [userName, setUserName] = useState("")
  const [address, setAdress] = useState("")
  const [pass, setPass] = useState("")
  const navigate = useNavigate()

  const handleUserName = (e) => {
    setUserName(e.target.value)
  }

  const handleAdress = (e) => {
    setAdress(e.target.value)
  }

  const handlePass = (e) => {
    setPass(e.target.value)
  }

  const handleEndSignup = () => {
    const existJson = JSON.parse(localStorage.getItem("userInfo"))
    let existInfo = []
    if(existJson){
      existInfo = existJson["users"]
    }

    // すでに登録されてるかチェック
    if(!userName || !address || !pass) return 0

    const userInfo = {"users": [...existInfo, {"name": userName, "address": address, "pass": pass}]}
    localStorage.setItem("userInfo", JSON.stringify(userInfo))
    
    // backend
    // postSchoolInfo(userName, pass)

    setIsLogin(true)
    setLoginName(userName)
    navigate("/")
  }

  return (
    <>
      <MyHeader />
      <Center position="absolute" height="90vh" width="full" top="10vh">
        <VStack
          padding="40px 80px"
          textAlign="left"
          borderRadius="25px"
          boxShadow="2xl"
          spacing="30px"
        >
          <Text
            fontSize="20px"
            display="inline"
            paddingTop="10px"
          >{isSchool ? "学校" : "団体"}アカウント作成</Text>
          <Box width="400px">
            <Text fontSize="14px">{isSchool ? "学校名" : "団体名"}</Text>
            <Input
              type="text"
              value={userName}
              onChange={handleUserName}
            />
          </Box>
          <Box width="400px">
            <Text fontSize="14px">住所</Text>
            <Input
              type="text"
              value={address}
              onChange={handleAdress}
            />
          </Box>
          <Box width="400px">
            <Text fontSize="14px">パスワード</Text>
            <Input
              type="password"
              value={pass}
              onChange={handlePass}
            />
          </Box>
          <Spacer />
          <VStack spacing="20px">
            <Button
              width="150px"
              borderRadius="full"
              backgroundColor="#B9E3B2"
              boxShadow="md"
              _hover={{ boxShadow: "none" }}
              onClick={handleEndSignup}
            >登録</Button>
            <Text fontSize="12px">アカウントをお持ちの方は
              <Link to="/login" style={{ "color": "blue" }}>こちら</Link>
              から</Text>
          </VStack>
        </VStack>
      </Center>
    </>
  )
}

export default Signup