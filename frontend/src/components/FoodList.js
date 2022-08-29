import { Center, HStack, Image, Table, TableContainer, Tbody, Td, Th, Text, Thead, Tr, VStack, Spacer } from "@chakra-ui/react"
import mainImg from "../assets/main.jpg"
import dishImg from "../assets/dish.png"
import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"

const FoodList = () => {
  const { loginName } = useContext(AppContext)
  const foodJson = JSON.parse(localStorage.getItem(loginName))
  let foodList = [{ "type": "登録された食材はまだありません", "num": "" }]
  if (foodJson) {
    foodList = foodJson["foods"]
  }

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
          <TableContainer
            width="80%"
            overflowY="scroll"
            boxShadow="0px 0px 10px 5px #F0F0F0 inset"
            borderRadius="10px"
          >
            <Table variant="simple">
              <Thead
                position="sticky"
                top={0}
                zIndex="1"
                backgroundColor="#B9E3B2"
                boxShadow="lg"
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