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
      {food.map((val, i) =>
        <>
          <input
            type="text"
            value={val["type"]}
            onChange={(e) => handleChangeFood(e, i)}
          />
          <input
            type="number"
            value={val["num"]}
            onChange={(e) => handleNum(e, i)}
          />
          <input
            type="button"
            value="delete"
            onClick={(e) => handleDeleteFood(e, i)}
          />
          <br />
        </>
      )}
      <input
        type="button"
        value=" + "
        onClick={handleAddFood}
      />
      <br />
      <input
        type="button"
        value="登録"
      />
    </>
  )
}

export default Register