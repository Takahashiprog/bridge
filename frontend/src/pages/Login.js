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
<<<<<<< HEAD
<<<<<<<< HEAD: frontend / src / pages / Login.js
  const {
    isSchool,
    setIsSchool,
    setIsLogin,
  } = useContext(AppContext)

  const [userName, setUserName] = useState("")
  const [pass, setPass] = useState("")
  const navigate = useNavigate()

  const handleRadio = () => {
    setIsSchool(!isSchool)
  }

  const handleUserName = (e) => {
    setUserName(e.target.value)
  }

  const handlePass = (e) => {
    console.log(isSchool)
    setPass(e.target.value)
  }

  const handleEndLogin = () => {

    // check pass

    setIsLogin(true)
    navigate("/")
  }

  return (
    <>
      <VStack spacing="20px" textAlign="left" marginTop="20px">
        <Heading size="md" >ログイン</Heading>
        <RadioGroup onChange={handleRadio} value={isSchool}>
          <HStack spacing="50px">
            <Radio value={true} defaultChecked>学校関係者</Radio>
            <Radio value={false}>フードバンク運営</Radio>
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
        <Box w="400px">
          <Text fontSize="sm">パスワード</Text>
          <Input
            type="password"
            value={pass}
            onChange={handlePass}
          />
        </Box>
        <Button
          onClick={handleEndLogin}
          colorScheme="blue"
          width="200px"
        >ログイン</Button>
        <Button
          width="200px"
          as="a"
          href="/signup"
        >新規登録</Button>
      </VStack>
========
=======
>>>>>>> 7f5b0ad44c89035f6c64f209b9517e17bcdadcf2
      const {setIsSchool, setIsLogin} = useContext(AppContext)
      const {isOpen, onOpen, onClose} = useDisclosure()

      setIsLogin(false)

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
          <VStack
            boxShadow="2xl"
            width="80%"
            padding={20}
            borderRadius={25}
            spacing={10}
          >
            <Text fontSize={24} color="green">
              フードバンク<span style={{ color: "black", fontSize: "14px" }}>とは</span>
            </Text>
            <Text fontSize={18} textAlign="left" width="80%">
              フードバンクとは、食品ロス削減・生活困窮者支援などを目的とする活動です。
              主に企業や家庭で余ってしまった食品を寄付し、生活困窮者に無償で提供します。
              「E-FOOD」ではその活動の教育現場での周知を進めるために、実際に学校の授業で
              フードバンクを実践する補助をします。
            </Text>
          </VStack>
        </Center>
        <MyFooter />

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent borderRadius={25}>
            <LoginModal />
          </ModalContent>
        </Modal>
<<<<<<< HEAD
>>>>>>>> 7f5b0ad44c89035f6c64f209b9517e17bcdadcf2: bridge / src / pages / Login.js
=======
>>>>>>> 7f5b0ad44c89035f6c64f209b9517e17bcdadcf2
    </>
  )
}

export default Login