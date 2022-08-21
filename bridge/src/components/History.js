
const History = () => {

  // TODO dealListの取得
  const dealList = [
    { "partner": "NPO JAPAN", "type": "apple", "num": 1 },
    { "partner": "foodbank sapporo", "type": "orange", "num": 100 },
  ]
  
  return (
    <>
      <p>取引履歴</p>
      <ul>
        {dealList.map((val) => (
          <li>
            <p>取引相手：{val["partner"]}</p>
            <p>種類：{val["type"]}</p>
            <p>個数：{val["num"]}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default History