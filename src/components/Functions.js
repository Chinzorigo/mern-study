import React, { useState } from "react";
import "./functions.css"
import Modal from "./Modal";

function Functions() {
  // let names = ["Chinzo", "Boldoo", "Byambaa"]

  // const element = (names) => {
  //     return
  //     <h1>{names.map((name) =>  {return name})}</h1>
  // }

  // const content = <h1>Hello</h1>


  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Show Me the Modal</button>
      {showModal && <Modal onClose={handleModalClose} />}
    </div>
  );
}

export default Functions;
