import { useContext, useState } from "react"
import { Button, Input, Text, Heading, VStack, Box } from "@chakra-ui/react"
import { AppContext } from "../contexts/AppContext"


const EditBio = () => {
  const {
    isSchool
  } = useContext(AppContext)

  // TODO bioをpost
  const myBio = {
    "name": "NPO JAPAN",
    "address": "東京"
  }

  const [newBio, setNewBio] = useState(myBio)

  const handleName = (e) => {
    console.log(newBio)
    setNewBio({ "name": e.target.value, "address": newBio["address"] })
  }

  const handleSaveBio = () => {
    // post bio
  }

  return (
    <>
      <Heading fontSize="2xl">設定を変更</Heading>
      <VStack spacing="20px" textAlign="left">
        <Box w="400px">
          <Text fontSize="sm">{isSchool ? "学校名" : "団体名"}</Text>
          <Input
            type="text"
            value={newBio["name"]}
            onChange={handleName}
          />
        </Box>
        <Box w="400px">
          <Text fontSize="sm">所在地</Text>
          <Input
            type="text"
            value={newBio["address"]}
            onChange={handleName}
          />
        </Box>
      </VStack>
      <Button onClick={handleSaveBio}>変更を保存</Button>
    </>
  )
}

export default EditBio