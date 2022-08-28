import MyModal from "./MyModal";
import { useState } from "react";

const AppModal = () => {
  const [showModal, setShowModal] = useState(false); 
  const ShowModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <MyModal showFlag={showModal} setShowModal={setShowModal} />
      <button onClick={ShowModal}>登録</button>
    </>
  );
};

export default AppModal