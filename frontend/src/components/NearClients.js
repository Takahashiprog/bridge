import { Box, Heading, Text } from "@chakra-ui/react"

const NearClient = () => {

  // TODO get clientList

  const clientList = [
    { "name": "NPO JAPAN", "address": "東京", "explain": "日本最大のフードバンク団体です" },
    { "name": "foodbank sapporo", "address": "札幌", "explain": "フードロス撲滅を掲げています" },
  ]

  return (
    <>
      <Box>
        <Text fontSize="24px">相手一覧</Text>
        <Box textAlign="left" w="400px">
          {clientList.map((val) => (
            <Box marginTop="30px">
              <Heading size="sm">{val["name"]}</Heading>
              {/* <Text fontSize="md">所在地：{val["address"]}</Text> */}
              <Text fontSize="md">{val["explain"]}</Text>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  )
}

export default NearClient