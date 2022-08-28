import { Button, Input, HStack, VStack, Heading, Box, Text, Modal, ModalOverlay, ModalContent, useDisclosure,Center,Image } from "@chakra-ui/react"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import MyModal from "../components/MyModal"
import { AppContext } from "../contexts/AppContext"
import tomatoImg from "../assets/tomato.png"

const Register = () => {
  const { isLogin } = useContext(AppContext)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate()
  const [food, setFood] = useState([
    { "type": "", "num": 1 },
  ])

  if (!isLogin) {
    // return <Redirect to="/login" />
  }

  const handleChangeFood = (e, index) => {
    setFood(
      food.map((val, i) => (index === i ?
        { "type": e.target.value, "num": val["num"] } : val
      ))
    )
  }

  const handleNum = (e, index) => {
    setFood(
      food.map((val, i) => (index === i ?
        { "type": val["type"], "num": e.target.value } : val
      ))
    )
  }

  const handleAddFood = () => {
    setFood([...food, { "type": "", "num": 1 }])
  }

  const handleDeleteFood = (e, index) => {
    if (food.length === 1) return
    setFood(
      food.filter((_, i) => (i !== index))
    )
  }

  return (
    <>
      <Center width="100%" height="100vh" position="relative">
        <Image
          src={tomatoImg}
          position="absolute"
          height="100%"
          width="100%"
          fit="cover"
          zIndex={-1}
          opacity="0.7"
        />
        <VStack
          spacing="30px"
          textAlign="left"
          backgroundColor="rgba(255, 247, 237, 0.8)"
          height="70%"
          width="70%"
          padding="40px"
        >
          <Heading
            size="md"
            mt="20px" >
            商品を登録</Heading>
          {food.map((val, i) =>
            <>
              <HStack spacing="50px">
                <Box>
                  <Text fontSize="sm">なにを</Text>
                  <Input
                    type="text"
                    value={val["type"]}
                    backgroundColor="white"
                    onChange={(e) => handleChangeFood(e, i)}
                  />
                </Box>
                <Box>
                  <Text fontSize="sm">いくつ</Text>
                  <Input
                    type="number"
                    value={val["num"]}
                    backgroundColor="white"
                    onChange={(e) => handleNum(e, i)}
                  />
                </Box>
                <Box>
                  <Text fontSize="sm">{"　"}</Text>
                  <Button
                    onClick={(e) => handleDeleteFood(e, i)}
                    width={150}
                    borderRadius="full"
                    backgroundColor="#EEEEEE"
                    boxShadow="md"
                    _hover={{ boxShadow: "none" }}
                  >
                    やめる
                  </Button>
                </Box>
              </HStack>
            </>
          )}
          <Button
            onClick={handleAddFood}
            width={150}
            borderRadius="full"
            backgroundColor="#EEEEEE"
            boxShadow="md"
            _hover={{ boxShadow: "none" }}
          >+</Button>
          <div style={{ marginButtom: "20px" }}></div>
          <HStack spacing="20px" >
            <Button
              onClick={onOpen}
              width={150}
              borderRadius="full"
              backgroundColor="#B9E3B2"
              boxShadow="md"
              _hover={{ boxShadow: "none" }}
            >決定</Button>
            <Button
              onClick={() => navigate("/")}
              width={150}
              borderRadius="full"
              backgroundColor="#EEEEEE"
              boxShadow="md"
              _hover={{ boxShadow: "none" }}
            >もどる</Button>

          </HStack>
          {/* </div> */}

        </VStack>
      </Center>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent padding="20px" borderRadius="25px">
          <MyModal onClose={onClose} />
        </ModalContent>
      </Modal>
    </>
  )
}

export default Register