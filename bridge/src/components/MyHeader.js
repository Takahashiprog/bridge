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
        <HStack width="full" justifyContent="space-between" paddingRight={15}>
          <Image src={logoImg} height={20} alt="logo"/>
          <Input
            width={200}
            height={35}
            type="text"
            borderRadius="full"
            placeholder="学校名で検索"
          />
        </HStack>
      </Box>
      <Box height={20}></Box>
    </>
  )
}

export default MyHeader