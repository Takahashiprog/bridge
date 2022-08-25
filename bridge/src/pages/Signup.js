import { useContext, useState } from "react"
// import { Redirect } from "react-router-dom"
import { AppContext } from "../contexts/AppContext"
import { Input, Box, Text, Button, VStack, Center, Spacer} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
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
    <Center position="absolute" height="100vh" width="full" top="0">
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
          paddingTop="5px"
        >{isSchool ? "学校" : "団体"}アカウント作成</Text>
        <Box w="400px">
          <Text fontSize="14px">{isSchool ? "学校名" : "団体名"}</Text>
          <Input
            type="text"
            value={userName}
            onChange={handleUserName}
          />
        </Box>
        <Box w="400px">
          <Text fontSize="14px">住所</Text>
          <Input
            type="text"
            value={address}
            onChange={handleAdress}
          />
        </Box>
        <Box w="400px">
          <Text fontSize="14px">パスワード</Text>
          <Input
            type="password"
            value={pass}
            onChange={handlePass}
          />
        </Box>
        <Spacer />
        <Button
          width="150px"
          borderRadius="full"
          backgroundColor="#B9E3B2"
          onClick={handleEndSignup}
        >登録</Button>
      </VStack>
    </Center>

      {/* <VStack spacing="20px" textAlign="left" marginTop="20px">
        <Heading size="md">サインアップ</Heading>
        <RadioGroup onChange={handleRadio} value={isSchool}>
          <HStack spacing="50px">
            <Radio value={true} defaultChecked>わたす</Radio>
            <Radio value={false}>うけとる</Radio>
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
        {isSchool ? <></> : <>
          <Box w="400px">
            <Text fontSize="sm">住所</Text>
            <Input
              type="text"
              value={address}
              onChange={handleAdress}
            />
          </Box>
        </>}
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
          onClick={handleEndSignup}
          colorScheme="blue"
          width="200px"
        >登録</Button>
        <Button
          width="200px"
          onClick={() => {navigate("/login")}}
        >ログイン画面へ</Button>
      </VStack> */}
    </>
  )
}

export default Signup