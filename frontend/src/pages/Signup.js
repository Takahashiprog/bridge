import { useContext, useState } from "react"
// import { Redirect } from "react-router-dom"
import { AppContext } from "../contexts/AppContext"
import { Input, HStack, Box, Text, Radio, RadioGroup, Button, VStack, Heading } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

const Signup = () => {
  const {
    isSchool,
    setIsSchool,
    setIsLogin,
  } = useContext(AppContext)

  const [userName, setUserName] = useState("")
  const [address, setAdress] = useState("")
  const [phone, setPhone] = useState("")
  const [pass, setPass] = useState("")
  const navigate = useNavigate()

  const handleRadio = () => {
    setIsSchool(!isSchool)
  }

  const handleUserName = (e) => {
    setUserName(e.target.value)
  }

  const handleAdress = (e) => {
    setAdress(e.target.value)
  }

  const handlePhone = (e) => {
    setPhone(e.target.value)
  }

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
      <VStack spacing="20px" textAlign="left" marginTop="20px"
        boxShadow='xl' p='6' rounded='md' bg='white'>
        <Heading size="md">学校アカウント作成</Heading>

        <Box w="400px">
          <Text fontSize="sm">学校名</Text>
          <Input
            type="text"
            value={userName}
            onChange={handleUserName}
          />
        </Box>

        <Box w="400px">
          <Text fontSize="sm">住所</Text>
          <Input
            type="text"
            value={address}
            onChange={handleAdress}
          />
        </Box>
        <Box w="400px">
          <Text fontSize="sm">password</Text>
          <Input
            type="password"
            value={pass}
            onChange={handlePass}
          />
        </Box>
        <Button
          onClick={handleEndSignup}
          backgroundColor="#b9e3b2"
          width="200px"
          boxShadow='lg' p='6' rounded='md' bg='white'
        >登録</Button>



      </VStack>
    </>
  )
}

export default Signup