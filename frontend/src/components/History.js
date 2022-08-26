<<<<<<< HEAD
import { Text, Heading, SimpleGrid, Box, HStack, Image } from '@chakra-ui/react'
=======
import { Text, Heading, SimpleGrid, Box, HStack, Image, VStack } from '@chakra-ui/react'
>>>>>>> 7f5b0ad44c89035f6c64f209b9517e17bcdadcf2
import paperImg from "../assets/paper.jpg"
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
<<<<<<< HEAD
  <Box position="relative" padding={10}>
=======
      <VStack position="relative" padding={10} width="full" spacing={50}>
>>>>>>> 7f5b0ad44c89035f6c64f209b9517e17bcdadcf2
      <Image
        src={paperImg}
        transform="rotateZ(5deg) scale(2)"
        // transform="scale(2)"
        position="absolute"
        zIndex={-1}
        top="25%"
        width="100%"
        height="55%"
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
<<<<<<< HEAD
                <Text fontSize={30}>{val["partner"]}<span style={{fontSize: 18}}> さん</span></Text>
                <Text fontSize={22}>{val["type"]} を {val["num"]} 個</Text>
=======
                <Text fontSize={24}>{val["partner"]}<span style={{fontSize: 16}}> さん</span></Text>
                <Text fontSize={18}>{val["type"]} を {val["num"]} 個</Text>
>>>>>>> 7f5b0ad44c89035f6c64f209b9517e17bcdadcf2
              </Box >
            </HStack >
          ))}
        </SimpleGrid >
<<<<<<< HEAD
      </Box >
=======
      </VStack>
>>>>>>> 7f5b0ad44c89035f6c64f209b9517e17bcdadcf2
    </>
  )
}

export default History