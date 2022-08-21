import { useContext, useState } from "react"
import { Redirect } from "react-router-dom"
import { AppContext } from "../contexts/AppContext"
import { Input, List, ListItem, Text } from "@chakra-ui/react"

const Signup = () => {
  const {
    isSignup,
    setIsSignup,
    isSchool,
    setIsSchool
  } = useContext(AppContext)

  const [userName, setUserName] = useState("")
  const [address, setAdress] = useState("")
  const [phone, setPhone] = useState("")
  const [pass, setPass] = useState("")

  if (isSignup) {
    return <Redirect to="/login" />
  }

  const handleUserName = (e) => {
    setUserName(e.target.value)
  }

  const handleAdress = (e) => {
    setAdress(e.target.value)
  }

  const handlePhone = (e) => {
    setPhone(e.target.value)
  }

  const handlePass = (e) => {
    setPass(e.target.value)
  }

  const handleIsSchool = (school) => {
    setIsSchool(school)
    console.log(isSchool)
  }

  return (
    <>
      <Input
        id="type1"
        type="radio"
        name="userType"
        defaultChecked
        onClick={() => handleIsSchool(true)}
      />
      <Text>学校関係者</Text>
      <br />
      <Input
        id="type2"
        type="radio"
        name="userType"
        onClick={() => handleIsSchool(false)}
      />
      <Text>フードバンク運営</Text>
      <List>
        <ListItem>
          <Text>{isSchool ? "学校名" : "団体名"}</Text>
          <Input
            type="text"
            value={userName}
            onChange={handleUserName}
          />
        </ListItem>
        {isSchool ? <></> : (
          <ListItem>
            <Text>住所</Text>
            <Input
              type="text"
              value={address}
              onChange={handleAdress}
            />
          </ListItem>
        )}
        <ListItem>
          <Text>電話番号</Text>
          <Input
            type="tel"
            value={phone}
            onChange={handlePhone}
          />
        </ListItem>
        <ListItem>
          <Text>パスワード</Text>
          <Input
            type="password"
            value={pass}
            onChange={handlePass}
          />
        </ListItem>
      </List>
      <Input type="button" value="登録" />
      <br />
      <Input type="button" value="すでにアカウントをお持ちの方" onClick={() => setIsSignup(!isSignup)} />
    </>
  )
}

export default Signup