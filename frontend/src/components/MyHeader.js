import { Box, HStack, Image, Text, Menu, MenuButton, MenuItem, MenuList, Button } from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import logoImg from "../assets/logo.png"
import { AppContext } from "../contexts/AppContext"
import { GiHamburgerMenu } from "react-icons/gi"
// import { AiOutlineSearch } from "react-icons/ai"

const MyHeader = () => {
  const { 
    isLogin,
    setIsLogin, 
    loginName, 
    setLoginName, 
    isReadOnly, 
    setIsReadOnly, 
    isSchool, 
    setIsSchool 
  } = useContext(AppContext)
  const navigate = useNavigate()

  // const myBio = {
  //   "name": "NPO JAPAN",
  //   "address": "東京",
  //   "explain": "日本最大のフードバンク団体です"
  // }

  const schoolList = [
    "第一高校",
    "第二中学",
    "北西高校",
    "後光高校",
    "公幸高校",
  ]

  const handleReadOnly = (name) => {
    setIsLogin(true)
    setIsSchool(true)
    setIsReadOnly(true)
    setLoginName(name)
    navigate("/")
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
              <Text fontSize="20px">{loginName}<span style={{ fontSize: 15 }}> 様</span></Text>
              <Menu>
                <MenuButton><GiHamburgerMenu size="35px" /></MenuButton>
                <MenuList>
                  <MenuItem onClick={() => navigate("/")}>ホーム</MenuItem>
                  {isSchool && !isReadOnly ? 
                    <MenuItem onClick={() => navigate("/register")}>商品登録</MenuItem>
                  : <></>}
                  {!isSchool ? 
                    <MenuItem onClick={() => navigate("/edit")}>プロフィール変更</MenuItem>
                  : <></>}
                  <MenuItem onClick={() => navigate("/login")}>ログアウト</MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          ) : (
            <Menu>
              <MenuButton 
                as={Button}
                width="150px"
                borderRadius="full"
                backgroundColor="#EEEEEE"
                boxShadow="md"
                fontSize="14px"
                _hover={{ boxShadow: "none" }}
                rightIcon={<ChevronDownIcon />}
              >
                学校名で検索
              </MenuButton>
              <MenuList overflowY="scroll" maxHeight="300px">
                {schoolList.map((val) => (
                  <MenuItem onClick={() => handleReadOnly(val)}>{val}</MenuItem>
                ))}
              </MenuList>
            </Menu>
          )}
            {/* <InputGroup width="200px" padding="2px">
              <InputRightElement
                pointerEvents="none"
                children={<AiOutlineSearch size="18px" />}
                onClick={() => {}}
              />
              <Input
                width="200px"
                height="35px"
                type="text"
                borderRadius="full"
                placeholder="学校名で検索"
              />
            </InputGroup> */}
        </HStack>
      </Box>
      <Box height="80px"></Box>
    </>
  )
}

export default MyHeader