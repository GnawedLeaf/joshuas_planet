import React, { useRef } from "react";
import { Select } from 'antd';
import { DialogButton, DialogContainer, DialogText, StyledSelect } from "./DialogStyles";


const DialogBox = () => {
  const dialogRef = useRef(null)
  const handleOpenDialog = () => {
    dialogRef.current.show();
  };

  const handleOpenModal = () => {
    dialogRef.current.showModal();
  };
  const handleCloseModal = () => {
    dialogRef.current.close();
  }
  const { Option } = Select;
  function handleChange(value) {
    console.log(`Selected ${value}`);
  }
  const pokemon = ['Pikachu', 'Charmander', 'Squirtle', 'Bulbasaur', 'Eevee', 'Jigglypuff', 'Snorlax', 'Gyarados', 'Dragonite', 'Mewtwo'];


  return (
    <>
      <button onClick={handleOpenDialog}>Open Dialog</button>
      <button onClick={handleOpenModal}>Open Modal</button>
      <DialogContainer ref={dialogRef} >
        <DialogText>
          Please fill up your phone number
        </DialogText>
        <StyledSelect getPopupContainer={() => document.body} defaultValue="Pikachu" style={{ width: 120 }} onChange={handleChange}>
          {pokemon.map((pokemon, index) => (
            <Option style={{ color: "lime", zIndex: "9999" }} value={pokemon} >{pokemon}</Option>
          ))}
        </StyledSelect >
        <DialogButton onClick={handleCloseModal}>
          Submit
        </DialogButton>
      </DialogContainer>
    </>

  )
}
export default DialogBox