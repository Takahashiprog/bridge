import { useState } from "react"

const Register = () => {
  const [food, setFood] = useState([["apple", 1], ["orange", 2]])

  const handleChangeFood = (e, index) => {
    setFood(
      food.map((val, i) => [(index === i ? e.target.value : val[0]), val[1]])
    )
  }

  const handleNum = (e, index) => {
    setFood(
      food.map((val, i) => [val[0], (index === i ? e.target.value : val[1])])
    )
  }

  const handleAddFood = () => {
    setFood([...food, ["", 0]])
  }

  const handleDeleteFood = (e, index) => {
    setFood(
      food.filter((_, i) => (i !== index))
    )
  }

  return (
    <>
      {food.map((val, i) =>
        <>
          <input type="text" value={val[0]} onChange={(e) => handleChangeFood(e, i)} />
          <input type="number" value={val[1]} onChange={(e) => handleNum(e, i)} />
          <input type="button" value="delete" onClick={(e) => handleDeleteFood(e, i)} />
        </>
      )}
      <br />
      <input type="button" value=" + " onClick={handleAddFood} />
      <br />
      <input type="button" value="登録" />
    </>
  )
}

export default Register