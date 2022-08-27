import { VStack, Text } from "@chakra-ui/react"

const MyFooter = () => {
  return (
    <>
      <VStack
        backgroundColor="blackAlpha.800"
        padding="40px"
      >
        <Text
          color="white"
          fontSize="20px"
          fontFamily="mono"
        >bridge</Text>
      </VStack>
    </>
  )
}

export default MyFooter