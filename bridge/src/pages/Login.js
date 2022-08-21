import { useContext, useState } from "react"
import { Redirect } from "react-router-dom"
import { AppContext } from "../contexts/AppContext"
import { Input, List, ListItem, Text } from "@chakra-ui/react"

const Login = () => {
  const {
    isSignup,
    setIsSignup,
    isSchool,
    setIsSchool
  } = useContext(AppContext)

  const [userName, setUserName] = useState("")
  const [pass, setPass] = useState("")

  const handleUserName = (e) => {
    setUserName(e.target.value)
  }

  const handlePass = (e) => {
    setPass(e.target.value)
  }

  const handleIsSchool = (school) => {
    setIsSchool(school)
    console.log(isSchool)
  }

  if (!isSignup) {
    return <Redirect to="/signup" />
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
        <ListItem>
          <Text>パスワード</Text>
          <Input
            type="password"
            value={pass}
            onChange={handlePass}
          />
        </ListItem>
      </List>
      <Input type="button" value="ログイン" />
      <br />
      <Input type="button" value="新規登録" onClick={() => { setIsSignup(!isSignup) }} />
    </>
  )
}

export default Login