import { Heading, Box, Text, Avatar, HStack, VStack, Spacer } from "@chakra-ui/react"

const Message = () => {

  const chatList = [
    { "name": "Sapporo Foods", "message": "それはよかったです。" },
    { "name": "foodjapan-sapporo", "message": "よろしくお願いします。" },
    { "name": "foodbank sapporo", "message": "お世話になっております。" },
  ]

  return (
    <>
      <VStack spacing="30px">
        <Heading size="md">メッセージ</Heading>
        <Spacer />
        {chatList.map((val) => (
          <Box
            textAlign="left"
            width="500px"
            border='1px'
            borderColor='black'
            boxShadow='lg'
            padding='10px'
            rounded='md'
            bg='white'>
            <HStack spacing="20px" marginLeft="10px">
              <Avatar />
              <Box>
                <Text fontSize={20}>{val["name"]}</Text>
                <Text fontSize={18} color='gray' mt="2px" ml="10px">{val["message"]}</Text>
              </Box>
            </HStack>
          </Box>
        ))}
      </VStack>
    </>
  );
};

export default Message;