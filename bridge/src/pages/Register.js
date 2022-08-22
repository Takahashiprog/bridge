import { Button, Input, HStack, VStack, Heading } from "@chakra-ui/react"
import { useState } from "react"

const Register = () => {
  const [food, setFood] = useState([
    { "type": "apple", "num": 1 },
    { "type": "orange", "num": 1 },
  ])

  const handleChangeFood = (e, index) => {
    setFood(
      food.map((val, i) => (index === i ?
        { "type": e.target.value, "num": val["num"] } : val
      ))
    )
  }

  const handleNum = (e, index) => {
    setFood(
      food.map((val, i) => (index === i ?
        { "type": val["type"], "num": e.target.value } : val
      ))
    )
  }

  const handleAddFood = () => {
    setFood([...food, { "type": "", "num": 1 }])
  }

  const handleDeleteFood = (e, index) => {
    setFood(
      food.filter((_, i) => (i !== index))
    )
  }

  return (
    <>
      <VStack spacing="20px" textAlign="left" marginTop="20px">
        <Heading size="md">商品登録</Heading>
        {food.map((val, i) =>
          <>
            <HStack spacing="20px">
              <Input
                type="text"
                value={val["type"]}
                onChange={(e) => handleChangeFood(e, i)}
              />
              <Input
                type="number"
                value={val["num"]}
                onChange={(e) => handleNum(e, i)}
              />
              <Button 
                onClick={(e) => handleDeleteFood(e, i)}
                width="100px"
              >
                delete
              </Button>
            </HStack>
          </>
        )}
        <Button 
          onClick={handleAddFood}
          width="100px"
        >+</Button>
        <Button 
          colorScheme="blue"
          width="200px"
        >登録</Button>
      </VStack>
    </>
  )
}

export default Register