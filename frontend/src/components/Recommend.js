import { Center, Heading, HStack, Image, Spacer, Text, VStack } from "@chakra-ui/react"
import pastaImg from "../assets/pasta.jpg"
import beefImg from "../assets/beef.jpg"

const Recommend = () => {
  return (
    <>
      <VStack
        backgroundColor="#F7F7F7"
        width="70%"
        borderRadius="25px"
        padding="60px"
        spacing="30px"
        textAlign="left"
      >
        <Center
          backgroundColor="#B9E3B2"
          width="300px"
          height="40px"
          borderRadius="full"
        ><Text fontSize="14px" as='b'>推奨する食品</Text></Center>
        <HStack spacing="60px">
          <Image
            src={pastaImg}
            alt="pasta"
            width="150px"
            height="150px"
            fit="cover"
            borderRadius="full"
            border="4px solid #96D48B"
          />
          <Text width="400px">
            お米、乾麺など主食になるもの<br />
            缶詰・インスタント食品・レトルト食品<br />
            調味料各種<br />
            お菓子・飲料
          </Text>
        </HStack>
        <Spacer />
        <Center
          backgroundColor="#CCCCCC"
          width="300px"
          height="40px"
          borderRadius="full"
        ><Text fontSize="14px" as='b'>非推奨な食品</Text></Center>
        <HStack spacing="60px">
          <Image
            src={beefImg}
            alt="beef"
            width="150px"
            height="150px"
            fit="cover"
            borderRadius="full"
            border="4px solid #AAAAAA"
          />
          <Text width="400px">
            包装/外装が開封済みのもの<br />
            包装/外装が破損や汚損しているもの<br />
            包装/外装と中身が違うもの（お米を除く）<br />
            賞味期限・原材料の表記がないもの（砂糖・塩を除く）<br />
            賞味期限が切れるまで１か月未満のもの
          </Text>
        </HStack>
      </VStack>
    </>
  )
}

export default Recommend