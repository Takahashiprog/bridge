import { useContext, useState } from "react"
import { AppContext } from "../contexts/AppContext"
import { Button, Input, Box, Radio, RadioGroup, HStack, Text, VStack, Heading } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const {
    isSchool,
    setIsSchool,
    setIsLogin,
  } = useContext(AppContext)

  const [userName, setUserName] = useState("")
  const [pass, setPass] = useState("")
  const navigate = useNavigate()

  const handleRadio = () => {
    setIsSchool(!isSchool)
  }

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
      <VStack spacing="20px" textAlign="left" marginTop="20px">
        <Heading size="md" >ログイン</Heading>
        <RadioGroup onChange={handleRadio} value={isSchool}>
          <HStack spacing="50px">
            <Radio value={true} defaultChecked>学校関係者</Radio>
            <Radio value={false}>フードバンク運営</Radio>
          </HStack>
        </RadioGroup>
        <Box w="400px">
          <Text fontSize="sm">{isSchool ? "学校名" : "団体名"}</Text>
          <Input
            type="text"
            value={userName}
            onChange={handleUserName}
          />
        </Box>
        <Box w="400px">
          <Text fontSize="sm">パスワード</Text>
          <Input
            type="password"
            value={pass}
            onChange={handlePass}
          />
        </Box>
        <Button
          onClick={handleEndLogin}
          colorScheme="blue"
          width="200px"
        >ログイン</Button>
        <Button
          width="200px"
          as="a"
          href="/signup"
        >新規登録</Button>
      </VStack>
    </>
  )
}

export default Login