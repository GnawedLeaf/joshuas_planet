import styled from "styled-components";
import { Select } from "antd";


export const DialogContainer = styled.dialog`
width:25vw;
border:none;
padding:20px;
border-radius:10px;
&::backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  z-index:99;
}
`
export const StyledSelect = styled(Select)`
  .ant-select-selector {
    z-index: 9999; // Set a high z-index value
    color:red;
  }
`;

export const NewOption = styled.div`

`

export const DialogButton = styled.button`
background: #5ABAAE;
color:white;
border:none;
width:8rem;
height:3rem;
margin:0 1rem;
border-radius:5px;
font-size:1.3rem;

&:hover{
  cursor: pointer;
}
`
export const DialogText = styled.div`
`