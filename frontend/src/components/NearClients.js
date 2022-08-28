import { Avatar, Box, HStack, Text } from "@chakra-ui/react"

const NearClient = () => {

  // TODO get clientList

  const clientList = [
    { "name": "NPO JAPAN", "address": "東京", "explain": "日本最大のフードバンク団体です" },
    { "name": "foodbank sapporo", "address": "札幌", "explain": "フードロス撲滅を掲げています" },
  ]

  return (
    <>
      <Box>
        <Text fontSize="24px">どんな団体があるの？</Text>
        <Box textAlign="left" w="400px">
          {clientList.map((val) => (
            <HStack marginTop="30px">
              <Avatar />
              <Box>
                <Text fontSize="20">{val["name"]}</Text>
                {/* <Text fontSize="md">所在地：{val["address"]}</Text> */}
                <Text fontSize="16">{val["explain"]}</Text>
              </Box>
            </HStack>
          ))}
        </Box>
      </Box>
    </>
  )
}

export default NearClient