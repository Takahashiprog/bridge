import { Box, Heading, Text, VStack } from "@chakra-ui/react"

const NearClient = () => {

  // TODO clientListの取得
  const clientList = [
    { "name": "NPO JAPAN", "address": "東京" },
    { "name": "foodbank sapporo", "address": "札幌" },
  ]

  return (
    <>
      <Heading fontSize="2xl">近くの取引先一覧</Heading>
      <Box textAlign="left" w="400px">
        {clientList.map((val) => (
          <Box marginTop="20px">
            <Heading size="md">{val["name"]}</Heading>
            <Text fontSize="md">所在地：{val["address"]}</Text>
          </Box>
        ))}
      </Box>
    </>
  )
}

export default NearClient