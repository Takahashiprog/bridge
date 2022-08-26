import { Center, HStack, Image, Table, TableContainer, Tbody, Td, Th, Text, Thead, Tr, VStack, Spacer } from "@chakra-ui/react"
import mainImg from "../assets/main.jpg"
import dishImg from "../assets/dish.png"

const FoodList = () => {
  const foodList = [
    { "type": "apple", "num": 1 },
    { "type": "apple", "num": 1 },
    { "type": "apple", "num": 1 },
    { "type": "apple", "num": 1 },
    { "type": "apple", "num": 1 },
    { "type": "apple", "num": 1 },
    { "type": "apple", "num": 1 },
    { "type": "apple", "num": 1 },
    { "type": "apple", "num": 1 },
    { "type": "apple", "num": 1 },
    { "type": "apple", "num": 1 },
  ]

  return (
    <>
      <Center height="800px" width="100vw">
        <Image
          src={mainImg}
          fit="cover"
          height="800px"
          width="full"
          position="absolute"
          zIndex="-1"
          filter="brightness(60%)"
        />
        <VStack
          backgroundColor="white"
          borderRadius="25px"
          height="600px"
          width="70%"
          padding="30px"
          spacing="30px"
        >
          <HStack>
            <Image
              src={dishImg}
              alt="icon"
              display="inline"
              height="90px"
            />
            <Text
              display="inline"
              fontSize="24px"
            >集めた食材一覧</Text>
          </HStack>
          <TableContainer width="80%" overflowY="scroll" boxShadow="md" borderRadius="10px">
            <Table variant="simple">
              <Thead 
                position="sticky" 
                top={0} 
                zIndex="1"
                backgroundColor="#B9E3B2"
              >
                <Tr>
                  <Th fontSize="16px" textAlign="center">種類</Th>
                  <Th fontSize="16px" textAlign="center">個数</Th>
                </Tr>
              </Thead>
              {foodList.map((val) => (
                <Tbody>
                  <Tr>
                    <Td fontSize="20px" textAlign="left">{val["type"]}</Td>
                    <Td fontSize="20px" textAlign="center">{val["num"]}</Td>
                  </Tr>
                </Tbody>
              ))}
            </Table>
          </TableContainer>
          <Spacer />
        </VStack>
      </Center>
    </>
  )
}

export default FoodList