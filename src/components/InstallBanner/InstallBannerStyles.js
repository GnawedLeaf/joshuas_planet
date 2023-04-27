import styled from "styled-components";

export const InstallBannerContainer = styled.div`
width:90vw;
border-radius:10px;
transform: translateY(5%);
background:#5ABAAE;
height:12vh;
display: flex;
align-items: center;
display:grid;
grid-template-columns:0.1fr 1fr 0.15fr 0.15fr 0.1fr;

@media only screen and (max-width: 750px){
display:flex;
width:20rem;
flex-direction: column;
height:10rem;
margin:0rem 1rem 1rem 1rem;
padding:1.1rem 0rem;
}
`

export const InstallBannerButton = styled.button`
width:9rem;
padding:0.8rem 1rem;
border-radius:50px;
display: flex;
align-items: center;
justify-content: center;
font-size:1rem;
font-weight:bold;
border:none;
color:#5ABAAE;
background:#f5f5f5;
transition-duration: 0.3s;
margin: 0rem 0.5rem;
grid-column-start:3;


&:hover{
  cursor:pointer;
}

@media only screen and (max-width: 750px){
  width:7rem;
  margin-top:2rem;
  padding:0.65rem 1rem;
  
}
`

export const InstallBannerText = styled.div`
color:#f5f5f5;
grid-column-start:2;
font-size:1.3rem;
text-align:center;
@media only screen and (max-width: 750px){
text-align:center;
font-size:1.1rem;
width:75%;
font-weight:bold;
margin-top:0.4rem;
}
`

export const InstallBannerIcon = styled.img`
width: 4.5vw;
left: 8vw;
position:fixed;
grid-column-start:2;
display:none;
@media only screen and (max-width: 750px){
  display:none;
  width:3.5rem;
}
`

export const InstallBannerAntiActionButton = styled(InstallBannerButton)`
background:#5ABAAE;
color:#f5f5f5;
font-weight:400;
border:#f5f5f5 1px solid;
grid-column-start:4;



@media only screen and (max-width: 750px){
border:none;
background:#5ABAAE;
color:#f5f5f5;
margin-top:0.25rem;

}

`

export const BigContainer = styled.div`
bottom:0;
position:fixed;
width:100%;
display: flex;
align-items: center;
justify-content: center;
animation: 0.3s ${(props) => props.display ? "moveUp" : "moveDown"} 0.1s forwards;
@keyframes moveDown {
  to {
    transform: translateY(50%) scale(0%);
    display: none;
  }
}

@keyframes moveUp{
  from{
    transform:translateY(100%) scale(0%);
  }
  to{
    transform:translateY(0%) scale(1);
  }
}
`