import { Box, HStack, Text, VStack, Center, Image, Spacer, Modal, useDisclosure, ModalOverlay, ModalContent } from "@chakra-ui/react"
import MyHeader from "../components/MyHeader"
import mainImg from "../assets/main.jpg"
import schoolImg from "../assets/school.png"
import presentImg from "../assets/present.png"
import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"
import LoginModal from "../components/LoginModal"

const Login = () => {
  const { setIsSchool } = useContext(AppContext)
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <MyHeader />
      <Center h="400px">
        <Image
          src={mainImg}
          fit="cover"
          h="400px"
          w="full"
          position="absolute"
          zIndex="-1"
          filter="brightness(60%)"
        />
        <Text color="white" fontSize="20px" lineHeight="10" marginBottom="60px">
          食品ロスは身近なところから<br />
          E-FOODは学校に焦点を当てたフードバンクプロジェクトです
        </Text>
      </Center>
      <Box position="absolute" top="380px" w="full">
        <HStack p="0 300px" justifyContent="space-between">
          <VStack
            textAlign="center"
            width="320px"
            borderRadius="25px"
            padding="40px"
            backgroundColor="white"
            boxShadow="2xl"
            spacing="30px"
            onClick={() => {
              onOpen()
              setIsSchool(true)
            }}
          >
            <Image src={schoolImg} height="90px" />
            <Text fontSize="24px">送る</Text>
            <Spacer />
            <Text fontSize="14px">学校関係者はこちらから</Text>
          </VStack>
          <VStack
            textAlign="center"
            width="320px"
            borderRadius="25px"
            padding="40px"
            backgroundColor="white"
            boxShadow="2xl"
            spacing="30px"
            onClick={() => {
              onOpen()
              setIsSchool(false)
            }}
          >
            <Image src={presentImg} height="80px" margin="5px" />
            <Text fontSize="24px">受け取る</Text>
            <Spacer />
            <Text fontSize="14px">受け取り希望団体はこちらから</Text>
          </VStack>
        </HStack>
      </Box>
      <Center marginTop="320px" marginBottom="100px">
        <Box
          boxShadow="2xl"
          width="1000px"
          padding="40px"
          borderRadius="25px"
        >
          <Text fontSize="24px" color="green">
            フードバンク<span style={{ color: "black", fontSize: "14px" }}>とは</span>
          </Text>
        </Box>
      </Center>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius="25px">
          <LoginModal />
        </ModalContent>
      </Modal>
    </>
  )
}

export default Login