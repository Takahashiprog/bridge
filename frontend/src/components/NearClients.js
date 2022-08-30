import { Box, Text, HStack } from "@chakra-ui/react"

const NearClient = () => {

  // TODO get clientList

  const clientList = [
    { "name": "NPO JAPAN", "address": "東京", "explain": "日本最大のフードバンク団体です。関東を中心に活動しており、さまざまな企業・農家の方々のご支援のもと活動を行なっています。" },
    { "name": "foodbank sapporo", "address": "札幌", "explain": "フードロス撲滅を掲げています。これまでに札幌市内の20以上の企業と取引をさせていただいた実績があります。" },
    { "name": "reFood Hokkaido", "address": "hokkaido", "explain": "「北海道からの食べ物に困っている人々へ」をスローガンに2001年から活動を始めました。皆さんの温かいご支援お待ちしています。" },
    { "name": "fo-fo-food JAPAN", "address": "大阪", "explain": "あったかい食べ物をフーフーして食べよう。温かい食事から人と人のつながりの輪を広げていくことを目指します。" },
  ]

  return (
    <>
      <Box w="70%" boxShadow={"20px"} >
        <Text fontSize={24} mb={20} fontWeight='semibold'>相手一覧</Text>
        <HStack spacing="40px">
          {clientList.map((val) => (
            <Box
              textAlign="left"
              width='300px'
              height='250px'
              bg='gray.100'
              borderWidth='2px'
              borderRadius='25px'
              padding="25px"
              boxShadow="lg"
            >
              <Text color="#55B143" fontWeight='bold' fontSize="18px">{val["name"]}</Text>
              <Text fontSize="15px" mt="20px">{val["explain"]}</Text>
            </Box>
          ))}
        </HStack>
      </Box >
    </>
  )
}

export default NearClient