import { List, ListItem, Text } from "@chakra-ui/react"

const NearClient = () => {

  // TODO clientListの取得
  const clientList = [
    { "name": "NPO JAPAN", "address": "東京" },
    { "name": "foodbank sapporo", "address": "札幌" },
  ]

  return (
    <>
      <Text fontSize="xl">近くの取引先一覧</Text>
      <List>
        {clientList.map((val) => (
          <ListItem>
            <p>名称：{val["name"]}</p>
            <p>所在地：{val["address"]}</p>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default NearClient