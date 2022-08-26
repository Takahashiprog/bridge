import { useContext, useEffect, useState } from "react"
import { Button, Input, Text, Heading, VStack, Box, Center, Textarea, Spacer } from "@chakra-ui/react"
import { AppContext } from "../contexts/AppContext"
import { useNavigate } from "react-router-dom"
import MyHeader from "../components/MyHeader"


const EditBio = () => {
  const {
    isSchool,
    isLogin,
  } = useContext(AppContext)

  // TODO get bio and address

  const myBio = {
    "name": "NPO JAPAN",
    "address": "東京",
    "explain": "日本最大のフードバンク団体です"
  }

  const [newBio, setNewBio] = useState(myBio)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLogin) {
      navigate("/login")
    }
  }, [isLogin, navigate])

  const handleName = (e) => {
    setNewBio({
      "name": e.target.value,
      "address": newBio["address"],
      "explain": newBio["explain"],
    })
  }

  // const handleAddress = (e) => {
  //   setNewBio({ 
  //     "name": newBio["name"],
  //     "address": e.target.value,
  //     "explain": newBio["explain"],
  //   })
  // }

  const handleExplain = (e) => {
    setNewBio({
      "name": newBio["name"],
      "address": newBio["address"],
      "explain": e.target.value,
    })
  }

  const handleSaveBio = () => {

    // TODO post bio

    console.log(newBio)
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
          <Heading size="md">設定を変更</Heading>
          <Box w="400px">
            <Text fontSize="sm">{isSchool ? "学校名" : "団体名"}</Text>
            <Input
              type="text"
              value={newBio["name"]}
              onChange={handleName}
            />
          </Box>
          <Box w="400px">
            <Text fontSize="sm">紹介</Text>
            <Textarea
              value={newBio["explain"]}
              onChange={handleExplain}
            />
          </Box>
          <Spacer />
          <VStack spacing={5}>
            <Button
              width={150}
              borderRadius="full"
              backgroundColor="#B9E3B2"
              boxShadow="md"
              _hover={{ boxShadow: "none" }}
              onClick={handleSaveBio}
            >変更を保存</Button>
            <Button
              width={150}
              borderRadius="full"
              backgroundColor="#EEEEEE"
              boxShadow="md"
              _hover={{ boxShadow: "none" }}
              onClick={() => navigate("/")}
            >もどる</Button>
          </VStack>
        </VStack>
      </Center>
    </>
  )
}

export default EditBio