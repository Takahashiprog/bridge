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
      <Center height={400}>
        <Image
          src={mainImg}
          fit="cover"
          height={400}
          width="full"
          position="absolute"
          zIndex="-1"
          filter="brightness(60%)"
        />
        <Text color="white" fontSize={20} lineHeight="10" marginBottom={30}>
          食品ロスは身近なところから<br />
          E-FOODは学校に焦点を当てたフードバンクプロジェクトです
        </Text>
      </Center>
      <Box position="absolute" top={380} w="full">
        <HStack padding="0 20%" justifyContent="space-between" spacing={20}>
          <VStack
            textAlign="center"
            width={320}
            borderRadius={25}
            padding={10}
            backgroundColor="white"
            boxShadow="2xl"
            spacing={30}
            onClick={() => {
              onOpen()
              setIsSchool(true)
            }}
          >
            <Image src={schoolImg} height={"90px"} />
            <Text fontSize={24}>送る</Text>
            <Spacer />
            <Text fontSize={14}>学校関係者はこちらから</Text>
          </VStack>
          <VStack
            textAlign="center"
            width={320}
            borderRadius={25}
            padding={10}
            backgroundColor="white"
            boxShadow="2xl"
            spacing={30}
            onClick={() => {
              onOpen()
              setIsSchool(false)
            }}
          >
            <Image src={presentImg} height={"80px"} margin={"5px"} />
            <Text fontSize={24}>受け取る</Text>
            <Spacer />
            <Text fontSize={14}>受け取り希望団体はこちらから</Text>
          </VStack>
        </HStack>
      </Box>
      <Center marginTop={320} marginBottom={100}>
        <Box
          boxShadow="2xl"
          width={1000}
          padding={20}
          borderRadius={25}
        >
          <Text fontSize={24} color="green">
            フードバンク<span style={{ color: "black", fontSize: "14px" }}>とは</span>
          </Text>
        </Box>
      </Center>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius={25}>
          <LoginModal />
        </ModalContent>
      </Modal>
    </>
  )
}

export default Login