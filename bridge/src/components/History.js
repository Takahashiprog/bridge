import {List, ListItem, Text} from '@chakra-ui/react'

const History = () => {

  // TODO dealListの取得
  const dealList = [
    { "partner": "NPO JAPAN", "type": "apple", "num": 1 },
    { "partner": "foodbank sapporo", "type": "orange", "num": 100 },
  ]
  
  return (
    <>
      <Text fontSize="xl">取引履歴</Text>
      <List>
        {dealList.map((val) => (
          <ListItem>
            <Text fontSize="md">取引相手：{val["partner"]}</Text>
            <Text fontSize="md">種類：{val["type"]}</Text>
            <Text fontSize="md">個数：{val["num"]}</Text>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default History