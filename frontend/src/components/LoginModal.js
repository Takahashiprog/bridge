import { Box, HStack, Text, VStack, Image, Input, Button } from "@chakra-ui/react"
import schoolImg from "../assets/school.png"
import presentImg from "../assets/present.png"
import { useContext, useState } from "react"
import { AppContext } from "../contexts/AppContext"
import { useNavigate, Link } from "react-router-dom"
import { postSchoolLogin } from "../utils/utils"

const LoginModal = () => {
  const {
    isSchool,
    setIsLogin,
    setLoginName
  } = useContext(AppContext)

  const [userName, setUserName] = useState("")
  const [pass, setPass] = useState("")
  const navigate = useNavigate()

  const handleUserName = (e) => {
    setUserName(e.target.value)
  }

  const handlePass = (e) => {
    setPass(e.target.value)
  }

  const handleEndLogin = () => {
    // const userJson = JSON.parse(localStorage.getItem("userInfo"))
    // let userInfo = []
    // if (userJson) {
    //   userInfo = userJson["users"]
    // }
    // for (let i = 0; i < userInfo.length; i++) {
    //   if (userInfo[i]["name"] === userName && userInfo[i]["pass"] === pass) {
    //     return 0
    //   }
    // }
    
    console.log(userName, pass)
    postSchoolLogin(userName, pass)
    setIsLogin(true)
    setLoginName(userName)
    navigate("/")
  }

  return (
    <>
      <VStack
        padding="40px 100px"
        textAlign="left"
        spacing="40px"
      >
        <HStack justifyContent="center">
          <Image
            src={isSchool ? schoolImg : presentImg}
            alt="icon"
            height="50px"
            display="inline"
          />
          <Text
            fontSize="24px"
            display="inline"
            paddingTop="4px"
          >{isSchool ? "送る" : "受け取る"}</Text>
        </HStack>
        <Box width="300px">
          <Text fontSize="14px">{isSchool ? "学校名" : "団体名"}</Text>
          <Input
            type="text"
            value={userName}
            onChange={handleUserName}
          />
        </Box>
        <Box width="300px">
          <Text fontSize="14px">パスワード</Text>
          <Input
            type="password"
            value={pass}
            onChange={handlePass}
          />
        </Box>
        <VStack spacing="20px">
          <Button
            width="150px"
            borderRadius="full"
            backgroundColor="#B9E3B2"
            boxShadow="md"
            _hover={{ boxShadow: "none" }}
            onClick={handleEndLogin}
          >決定</Button>
          <Text fontSize="12px">アカウントをお持ちでない方は
            <Link to="/signup" style={{ "color": "blue" }}>こちら</Link>
            から</Text>
        </VStack>
      </VStack>
    </>
  )
}

export default LoginModal