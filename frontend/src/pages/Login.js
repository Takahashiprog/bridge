import { Box, HStack, Text, VStack, Center, Image, Spacer, Modal, useDisclosure, ModalOverlay, ModalContent } from "@chakra-ui/react"
import MyHeader from "../components/MyHeader"
import mainImg from "../assets/main.jpg"
import schoolImg from "../assets/school.png"
import presentImg from "../assets/present.png"
import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"
import LoginModal from "../components/LoginModal"
import MyFooter from "../components/MyFooter"

const Login = () => {
  const { setIsSchool, setIsLogin } = useContext(AppContext)
  const { isOpen, onOpen, onClose } = useDisclosure()

  setIsLogin(false)

  return (
    <>
      <MyHeader />
      <Center height="400px">
        <Image
          src={mainImg}
          fit="cover"
          height="400px"
          width="full"
          position="absolute"
          zIndex="-1"
          filter="brightness(60%)"
        />
        <Text color="white" fontSize="20px" lineHeight="10" marginBottom="30px">
          食品ロスは身近なところから<br />
          E-FOODは学校に焦点を当てたフードバンクプロジェクトです
        </Text>
      </Center>
      <Box position="absolute" top="380px" w="full">
        <HStack padding="0 20%" justifyContent="space-between" spacing="20px">
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
            <Image src={schoolImg} height={"90px"} />
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
            <Image src={presentImg} height={"80px"} margin={"5px"} />
            <Text fontSize="24px">受け取る</Text>
            <Spacer />
            <Text fontSize="14px">受け取り希望団体はこちらから</Text>
          </VStack>
        </HStack>
      </Box>
      <Center marginTop="320px" marginBottom="100px">
        <VStack
          boxShadow="2xl"
          width="80%"
          padding="80px"
          borderRadius="25px"
          spacing="40px"
        >
          <Text fontSize="24px" color="green">
            フードバンク<span style={{ color: "black", fontSize: "14px" }}>とは</span>
          </Text>
          <Text fontSize="18px" textAlign="left" width="80%">
            {"フードバンクとは、食品ロス削減・生活困窮者支援などを目的とする活動です。"}
            {"主に企業や家庭で余ってしまった食品を寄付し、生活困窮者に無償で提供します。"}
            {"「E-FOOD」ではその活動の教育現場での周知を進めるために、実際に学校の授業で"}
            {"フードバンクを実践する補助をします。"}
          </Text>
        </VStack>
      </Center>
      <MyFooter />

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