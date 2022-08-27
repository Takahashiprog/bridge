import { Box, HStack, Image, Input, Text, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import logoImg from "../assets/logo.png"
import { AppContext } from "../contexts/AppContext"
import {GiHamburgerMenu} from "react-icons/gi"

const MyHeader = () => {
  const { isLogin } = useContext(AppContext)
  const navigate = useNavigate()

  const myBio = {
    "name": "NPO JAPAN",
    "address": "東京",
    "explain": "日本最大のフードバンク団体です"
  }

  return (
    <>
      <Box
        position="fixed"
        width="full"
        backgroundColor="white"
        top="0"
        left="0"
        zIndex="2"
        padding="5px 10px"
        boxShadow="md"
      >
        <HStack width="full" justifyContent="space-between" paddingRight={15}>
          <Image 
            src={logoImg} 
            height="80px"
            alt="logo"
            onClick={() => navigate("/")}
          />
          {isLogin ? (
            <HStack spacing="30px">
              <Text fontSize="20px">{myBio["name"]}<span style={{fontSize: 15}}> 様</span></Text>
              <Menu>
                <MenuButton><GiHamburgerMenu size="35px" /></MenuButton>
                <MenuList>
                  <MenuItem onClick={() => navigate("/")}>ホーム</MenuItem>
                  <MenuItem onClick={() => navigate("/register")}>商品登録</MenuItem>
                  <MenuItem onClick={() => navigate("/edit")}>プロフィール変更</MenuItem>
                  <MenuItem onClick={() => navigate("/login")}>ログアウト</MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          ) : (
            <Input
              width="200px"
              height="35px"
              type="text"
              borderRadius="full"
              placeholder="学校名で検索"
            />
          )}
        </HStack>
      </Box>
      <Box height="80px"></Box>
    </>
  )
}

export default MyHeader