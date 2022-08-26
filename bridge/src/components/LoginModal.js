import { Box, HStack, Text, VStack, Image, Input, Button } from "@chakra-ui/react"
import schoolImg from "../assets/school.png"
import presentImg from "../assets/present.png"
import { useContext, useState } from "react"
import { AppContext } from "../contexts/AppContext"
import { useNavigate, Link } from "react-router-dom"

const LoginModal = () => {
  const {
    isSchool,
    setIsLogin,
  } = useContext(AppContext)

  const [userName, setUserName] = useState("")
  const [pass, setPass] = useState("")
  const navigate = useNavigate()

  const handleUserName = (e) => {
    setUserName(e.target.value)
  }

  const handlePass = (e) => {
    console.log(isSchool)
    setPass(e.target.value)
  }

  const handleEndLogin = () => {

    // check pass

    setIsLogin(true)
    navigate("/")
  }

  return (
    <>
      <VStack
        padding="40px 100px"
        textAlign="left"
        spacing={10}
      >
        <HStack justifyContent="center">
          <Image
            src={isSchool ? schoolImg : presentImg}
            alt="icon"
            height={50}
            display="inline"
          />
          <Text
            fontSize={24}
            display="inline"
            paddingTop={5}
          >{isSchool ? "送る" : "受け取る"}</Text>
        </HStack>
        <Box width={300}>
          <Text fontSize={14}>{isSchool ? "学校名" : "団体名"}</Text>
          <Input
            type="text"
            value={userName}
            onChange={handleUserName}
          />
        </Box>
        <Box width={300}>
          <Text fontSize={14}>パスワード</Text>
          <Input
            type="password"
            value={pass}
            onChange={handlePass}
          />
        </Box>
        <VStack spacing={5}>
          <Button
            width={150}
            borderRadius="full"
            backgroundColor="#B9E3B2"
            boxShadow="md"
            _hover={{boxShadow: "none"}}
            onClick={handleEndLogin}
          >決定</Button>
          <Text fontSize={12}>アカウントをお持ちでない方は
            <Link to="/signup" style={{ "color": "blue" }}>こちら</Link>
            から</Text>
        </VStack>
      </VStack>
    </>
  )
}

export default LoginModal