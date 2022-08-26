import { Center, HStack, Image, Text, VStack } from "@chakra-ui/react"
import mainImg from "../assets/main.jpg"
import dishImg from "../assets/dish.png"

const FoodList = () => {
  return (
    <>
      <Center height={800}>
        <Image
          src={mainImg}
          fit="cover"
          height={800}
          width="full"
          position="absolute"
          zIndex="-1"
          filter="brightness(60%)"
        />
        <VStack
          backgroundColor="white"
          borderRadius={25}
          height={600}
          width={1000}
          padding={30}
        >
          <HStack>
            <Image
              src={dishImg}
              alt="icon"
              display="inline"
              height={90}
            />
            <Text
              display="inline"
              fontSize={24}
            >集めた食材一覧</Text>
          </HStack>

        </VStack>
      </Center>
    </>
  )
}

export default FoodList