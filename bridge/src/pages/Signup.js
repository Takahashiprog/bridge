import { useContext, useState } from "react"
import { Redirect } from "react-router-dom"
import { AppContext } from "../contexts/AppContext"
import { Input, HStack, Box, Text, Radio, RadioGroup, Button, VStack, Heading } from "@chakra-ui/react"

const Signup = () => {
  const {
    isSignup,
    setIsSignup,
    isSchool,
    setIsSchool
  } = useContext(AppContext)

  const [userName, setUserName] = useState("")
  const [address, setAdress] = useState("")
  const [phone, setPhone] = useState("")
  const [pass, setPass] = useState("")

  if (isSignup) {
    return <Redirect to="/login" />
  }

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

  return (
    <>
      <VStack spacing="20px" textAlign="left" marginTop="20px">
        <Heading size="md">サインアップ</Heading>
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
        {isSchool ? <></> : (
          <Box w="400px">
            <Text fontSize="sm">住所</Text>
            <Input
              type="text"
              value={address}
              onChange={handleAdress}
            />
          </Box>
        )}
        <Box w="400px">
          <Text fontSize="sm">電話番号</Text>
          <Input
            type="tel"
            value={phone}
            onChange={handlePhone}
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
          colorScheme="blue"
          width="200px"
        >登録</Button>
        <Button 
          onClick={() => setIsSignup(!isSignup)}
          width="200px"
        >ログイン画面へ</Button>
      </VStack>
    </>
  )
}

export default Signup