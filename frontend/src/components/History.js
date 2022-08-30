import { Text, SimpleGrid, Box, HStack, VStack } from '@chakra-ui/react'
const colList = ["red", "blue", "green", "yellow"]

const History = () => {

  // TODO get dealList

  const dealList = [
    { "partner": "NPO JAPAN", "type": "apple", "num": 1 },
    { "partner": "foodbank sapporo", "type": "orange", "num": 100 },
    { "partner": "NPO JAPAN", "type": "apple", "num": 1 },
    { "partner": "foodbank sapporo", "type": "orange", "num": 100 },
    { "partner": "NPO JAPAN", "type": "apple", "num": 1 },
    { "partner": "foodbank sapporo", "type": "orange", "num": 100 },
    { "partner": "NPO JAPAN", "type": "apple", "num": 1 },
  ]

  const seedList = dealList.map(() => Math.floor(Math.random() * 4))

  return (
    <>
      <VStack position="relative" padding="10px" width="full" spacing="50px">
        {/* <Image
          src={paperImg}
          transform="rotateZ(5deg) scale(2)"
          position="absolute"
          zIndex="-1"
          top="25%"
          width="100%"
          height="55%"
          fit="cover"
        /> */}
        <Text fontSize="24px">いままでの記録</Text>
        <SimpleGrid columns={2} spacing="80px" marginTop="80px">
          {dealList.map((val, idx) => (
            <HStack
              backgroundColor={colList[seedList[idx]] + ".100"}
              height="100px"
              width="400px"
              spacing="30px"
              transform={"rotateZ(" + (Math.random() * 10 - 5) + "deg)"}
              boxShadow="md"
            >
              <Box
                backgroundColor={colList[seedList[idx]] + ".200"}
                left="0"
                height="100px"
                width="50px"
              ></Box>
              <Box textAlign="left">
                <Text fontSize="18px">{val["partner"]}<span style={{ fontSize: "16px" }}> さん へ</span></Text>
                <Text fontSize="15px">{val["type"]} を {val["num"]} 個</Text>
              </Box>
            </HStack>
          ))}
        </SimpleGrid>
      </VStack>
    </>
  )
}

export default History