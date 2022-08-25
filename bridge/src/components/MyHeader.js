import { Box, HStack, Image, Input } from "@chakra-ui/react"
import logoImg from "../assets/logo.png"

const MyHeader = () => {
  return (
    <>
      <Box 
        position="fixed" 
        width="full" 
        backgroundColor="white" 
        top="0" 
        left="0" 
        zIndex="1"
        padding="5px 10px"
        boxShadow="md"
      >
        <HStack width="full" justifyContent="space-between" paddingRight="15px">
          <Image src={logoImg} height="80px" alt="logo"/>
          <Input
            width="200px"
            height="35px"
            type="text"
            borderRadius="full"
            placeholder="検索"
          />
        </HStack>
      </Box>
      <Box height="80px"></Box>
    </>
  )
}

export default MyHeader