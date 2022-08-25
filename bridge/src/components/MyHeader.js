import { Box, HStack, Image, Input } from "@chakra-ui/react"
import logoImg from "../assets/logo.png"

const MyHeader = () => {
  return (
    <>
      <Box position="fixed" w="full" backgroundColor="white" top="0" left="0" zIndex="1">
        <HStack w="full" justifyContent="space-between" paddingRight="10px">
          <Image src={logoImg} h="80px" alt="logo"/>
          <Input
            w="200px"
            type="text"
            borderRadius="20px"
          />
        </HStack>
      </Box>
      <Box h="80px"></Box>
    </>
  )
}

export default MyHeader