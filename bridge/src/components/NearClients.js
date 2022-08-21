
const NearClient = () => {

  // TODO clientListの取得
  const clientList = [
    { "name": "NPO JAPAN", "address": "東京" },
    { "name": "foodbank sapporo", "address": "札幌" },
  ]

  return (
    <>
      <p>近くの取引先一覧</p>
      <ul>
        {clientList.map((val) => (
          <li>
            <p>名称：{val["name"]}</p>
            <p>所在地：{val["address"]}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default NearClient