import { Text, Heading, SimpleGrid, Box, HStack, Image, VStack } from '@chakra-ui/react'
import paperImg from "../assets/paper.jpg"

const History = () => {

  // TODO get dealList

  const dealList = [
    { "partner": "NPO JAPAN", "type": "apple", "num": 1 },
    { "partner": "foodbank sapporo", "type": "orange", "num": 100 },
    { "partner": "foodbank sapporo", "type": "orange", "num": 100 },
    { "partner": "foodbank sapporo", "type": "orange", "num": 100 },
  ]

  return (
    <>
      <VStack height={500} spacing={20}>
        <Image
          src={paperImg}
          // transform="rotateZ(5deg) scale(2)"
          position="absolute"
          zIndex={-1}
          top="-moz-initial"
          width="100%"
          height="100%"
          fit="cover"
        />
        <Heading size="md">いままでの記録</Heading>
        <SimpleGrid columns={2} spacing={20}>
          {dealList.map((val) => (
            <HStack
              backgroundColor="red.100"
              height={100}
              width={400}
              spacing={5}
              transform={"rotateZ(" + (Math.random() * 6 - 3) + "deg)"}
              boxShadow="md"
            >
              <Box
                backgroundColor="red.200"
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
      </VStack>
    </>
  )
}

export default History