import { Button, Input, HStack, VStack, Heading, Box, Text, Modal, ModalOverlay, ModalContent, useDisclosure, Center, Image } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import MyModal from "../components/MyModal"
import { AppContext } from "../contexts/AppContext"
import tomatoImg from "../assets/tomato.png"
import MyHeader from "../components/MyHeader"

const Register = () => {
  const { isLogin } = useContext(AppContext)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate()
  const setClass = useNavigate()
  const [food, setFood] = useState([
    { "type": "", "num": 1 },
  ])

  useEffect(() => {
    if (!isLogin) {
      navigate("/login")
    }
  }, [isLogin, navigate])

  const handleChangeFood = (e, index) => {
    setFood(
      food.map((val, i) => (index === i ?
        { "type": e.target.value, "num": val["num"] } : val
      ))
    )
  }

  const handleChangeClass = (e) => {
    setClass(e.target.value)
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

  const handleEndRegister = () => {
    const foodJson = JSON.parse(localStorage.getItem("foodInfo"))
    let foodInfo = []
    if(foodJson){
      foodInfo = foodJson["foods"]
    }
    localStorage.setItem("foodInfo", JSON.stringify({"foods": [...foodInfo, ...food]}))

    navigate("/")
  }

  return (
    <>
      <MyHeader />
      <Center width="100%" height="91vh" position="relative">
        <Image
          src={tomatoImg}
          position="absolute"
          height="100%"
          width="100%"
          fit="cover"
          zIndex="-1"
          opacity="0.7"
        />
        <VStack
          spacing="auto"
          textAlign="left"
          backgroundColor="rgba(255, 247, 237, 0.8)"
          height="70%"
          width="70%"
          padding="50px"
          borderRadius="25px"
        >
          <Heading
            size="md"
          >商品を登録</Heading>
          <VStack
            overflowY="scroll"
            height="55%"
            padding="40px"
            boxShadow="0px 0px 5px 5px #DDDDDD inset"
            borderRadius="10px"
          >
          <Box>
              <Text fontSize="sm">クラス</Text>
              <Input
                type="text"
                value={[""]}
                backgroundColor="white"
                onChange={(e) => handleChangeClass(e)}
              />
            </Box>
            {food.map((val, i) =>
              <>
                <HStack spacing="30px">
                  <Box>
                    <Text fontSize="sm">なにを</Text>
                    <Input
                      type="text"
                      width="300px"
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
                      width="70px"
                      borderRadius="full"
                      backgroundColor="#EEEEEE"
                      boxShadow="md"
                      _hover={{ boxShadow: "none" }}
                    >
                      ×
                    </Button>
                  </Box>
                </HStack>
              </>
            )}
          </VStack>
          <Button
            onClick={handleAddFood}
            width="70px"
            borderRadius="full"
            backgroundColor="#EEEEEE"
            boxShadow="md"
            _hover={{ boxShadow: "none" }}
          >+</Button>
          <HStack spacing="20px" >
            <Button
              onClick={onOpen}
              width={150}
              borderRadius="full"
              backgroundColor="#B9E3B2"
              boxShadow="md"
              _hover={{ boxShadow: "none" }}
            >登録</Button>
            <Button
              onClick={() => navigate("/")}
              width="150px"
              borderRadius="full"
              backgroundColor="#EEEEEE"
              boxShadow="md"
              _hover={{ boxShadow: "none" }}
            >もどる</Button>
          </HStack>
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