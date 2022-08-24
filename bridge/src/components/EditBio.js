import { useContext, useState } from "react"
import { Button, Input, Text, Heading, VStack, Box, Spacer } from "@chakra-ui/react"
import { AppContext } from "../contexts/AppContext"


const EditBio = () => {
  const {
    isSchool
  } = useContext(AppContext)

  // TODO get bio and address

  const myBio = {
    "name": "NPO JAPAN",
    "address": "東京",
    "explain": "日本最大のフードバンク団体です"
  }

  const [newBio, setNewBio] = useState(myBio)

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

  }

  return (
    <>
      <Box>
        <Heading size="md">設定を変更</Heading>
        <VStack spacing="30px" textAlign="left">
          <Spacer />
          <Box w="400px">
            <Text fontSize="sm">{isSchool ? "学校名" : "団体名"}</Text>
            <Input
              type="text"
              value={newBio["name"]}
              onChange={handleName}
            />
          </Box>
          {isSchool ? <></> : <>
            {/* <Box w="400px">
              <Text fontSize="sm">所在地</Text>
              <Input
                type="text"
                value={newBio["address"]}
                onChange={handleAddress}
              />
            </Box> */}
            <Box w="400px">
              <Text fontSize="sm">紹介</Text>
              <Input
                type="text"
                value={newBio["explain"]}
                onChange={handleExplain}
              />
            </Box>
          </>}
          <Spacer />
        </VStack>
        <Button 
          onClick={handleSaveBio}
          width="120px"
        >変更を保存</Button>
      </Box>
    </>
  )
}

export default EditBio