import { Button, Input, HStack, VStack, Heading, Box, Text, Modal, ModalOverlay, ModalContent, useDisclosure } from "@chakra-ui/react"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import MyModal from "../components/MyModal"
import { AppContext } from "../contexts/AppContext"

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
      <VStack spacing="20px" textAlign="left" marginTop="20px">
        <Heading size="md">商品登録</Heading>
        {food.map((val, i) =>
          <>
            <HStack spacing="20px">
              <Box>
                <Text fontSize="sm">商品</Text>
                <Input
                  type="text"
                  value={val["type"]}
                  onChange={(e) => handleChangeFood(e, i)}
                />
              </Box>
              <Box>
                <Text fontSize="sm">個数</Text>
                <Input
                  type="number"
                  value={val["num"]}
                  onChange={(e) => handleNum(e, i)}
                />
              </Box>
              <Button
                onClick={(e) => handleDeleteFood(e, i)}
                width="100px"
              >
                delete
              </Button>
            </HStack>
          </>
        )}
        <Button
          onClick={handleAddFood}
          width="100px"
        >+</Button>
        <Button
          onClick={onOpen}
          colorScheme="blue"
          width="200px"
        >登録</Button>
        <Button
          onClick={() => navigate("/")}
          width="200px"
        >もどる</Button>
      </VStack>

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