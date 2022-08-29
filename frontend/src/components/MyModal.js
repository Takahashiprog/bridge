import React from "react";
import { useNavigate } from "react-router-dom"
import {
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  HStack,
} from '@chakra-ui/react'

const MyModal = (props) => {
  const navigate = useNavigate()

  const handleEndRegister = () => {
    const foodJson = JSON.parse(localStorage.getItem("foodInfo"))
    let foodInfo = []
    if(foodJson){
      foodInfo = foodJson["foods"]
    }
    localStorage.setItem("foodInfo", JSON.stringify({"foods": [...foodInfo, ...props.food]}))

    navigate("/")
  }

  return (
    <>
      <ModalCloseButton />
      <ModalHeader>登録確認 </ModalHeader>
      <ModalBody>
        <Text fontSize="14px">登録内容は正しいでしょうか？正しければ「はい」のボタンを押してください</Text>
      </ModalBody>
      <ModalFooter>
        <HStack spacing="20px">
          <Button
            width="70px"
            borderRadius="full"
            backgroundColor="#B9E3B2"
            boxShadow="md"
            _hover={{ boxShadow: "none" }}
            onClick={handleEndRegister}
          >はい</Button>
          <Button 
            width="70px"
            borderRadius="full"
            backgroundColor="#EEEEEE"
            boxShadow="md"
            _hover={{ boxShadow: "none" }}
            onClick={props.onClose}
          >戻る</Button>
        </HStack>
      </ModalFooter>
   </>
  );
};

export default MyModal;