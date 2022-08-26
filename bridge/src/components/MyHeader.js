import { Box, HStack, Image, Input, Menu, MenuButton, MenuItem, MenuList, Button } from "@chakra-ui/react"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import logoImg from "../assets/logo.png"
import { AppContext } from "../contexts/AppContext"

const MyHeader = () => {
  const { isLogin, setIsLogin } = useContext(AppContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    setIsLogin(false)
    navigate("/login")
  }

  return (
    <>
      <Box
        position="fixed"
        width="full"
        backgroundColor="white"
        top="0"
        left="0"
        zIndex="1"
        padding="5px 10px"
        boxShadow="md"
      >
        <HStack width="full" justifyContent="space-between" paddingRight={15}>
          <Image src={logoImg} height={20} alt="logo" />
          {isLogin ? (
            <Menu>
              <MenuButton as={Button}></MenuButton>
              <MenuList>
                <MenuItem onClick={() => navigate("/register")}>商品登録</MenuItem>
                <MenuItem onClick={handleLogout}>ログアウト</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Input
              width={200}
              height={35}
              type="text"
              borderRadius="full"
              placeholder="学校名で検索"
            />
          )}
        </HStack>
      </Box>
      <Box height={20}></Box>
    </>
  )
}

export default MyHeader