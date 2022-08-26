import { Text, Heading, SimpleGrid, Box, HStack, Image } from '@chakra-ui/react'
import paperImg from "../assets/paper.jpg"
const colList = ["red", "blue", "green", "yellow"]

const History = () => {

  // TODO get dealList

  const dealList = [
    { "partner": "NPO JAPAN", "type": "apple", "num": 1 },
    { "partner": "foodbank sapporo", "type": "orange", "num": 100 },
    { "partner": "foodbank sapporo", "type": "orange", "num": 100 },
    { "partner": "foodbank sapporo", "type": "orange", "num": 100 },
    { "partner": "foodbank sapporo", "type": "orange", "num": 100 },
    { "partner": "foodbank sapporo", "type": "orange", "num": 100 },
    { "partner": "foodbank sapporo", "type": "orange", "num": 100 },
  ]

  const seedList = dealList.map(() => Math.floor(Math.random() * 4))

  return (
    <>
      <Box position="relative" padding={10}>
        <Image
          src={paperImg}
          transform="rotateZ(5deg) scale(2)"
          // transform="scale(2)"
          position="absolute"
          zIndex={-1}
          top="20%"
          width="100%"
          height="60%"
          fit="cover"
        />
        <Heading size="md">いままでの記録</Heading>
        <SimpleGrid columns={2} spacing={20} marginTop={20}>
          {dealList.map((val, idx) => (
            <HStack
              backgroundColor={colList[seedList[idx]] + ".100"}
              height={100}
              width={400}
              spacing={5}
              transform={"rotateZ(" + (Math.random() * 10 - 5) + "deg)"}
              boxShadow="md"
            >
              <Box
                backgroundColor={colList[seedList[idx]] + ".200"}
                left={0}
                height={100}
                width={50}
              ></Box>
              <Box textAlign="left">
                <Heading fontSize={18}>{val["partner"]}</Heading>
                <Text fontSize={16}>{val["type"]}{val["num"]}</Text>
              </Box>
            </HStack>
          ))}
        </SimpleGrid>
      </Box>
    </>
  )
}

export default History