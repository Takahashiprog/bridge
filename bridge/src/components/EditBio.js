import { useState } from "react"
import { Input, List, ListItem, Text } from "@chakra-ui/react"


const EditBio = () => {

  // TODO bioをpost
  const myBio = {
    "name": "NPO JAPAN",
    "address": "東京"
  }

  const [newBio, setNewBio] = useState(myBio)

  const handleName = (e) => {
    console.log(newBio)
    setNewBio({ "name": e.target.value, "address": newBio["address"] })
  }

  return (
    <>
      <Text fontSize="xl">設定を変更</Text>
      <List>
        <ListItem>
          <Text>団体名</Text>
          <Input
            type="text"
            value={newBio["name"]}
            onChange={handleName}
          />
        </ListItem>
      </List>
      <Input type="button" value="変更を保存" />
    </>
  )
}

export default EditBio