import styled from "styled-components";

export const InstallBannerContainer = styled.div`
width:20rem;
background:#f5f5f5;
height:10vh;
display: flex;
align-items: center;


@media only screen and (max-width: 750px){
background: #5ABAAE;
flex-direction: column;
height:10rem;
border-radius:10px;
margin:0rem 1rem 1rem 1rem;
padding:1.1rem 0rem;
}
`

export const InstallBannerButton = styled.button`
width:9rem;
padding:1rem;
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

@media only screen and (max-width: 750px){
  text-align:center;
font-size:1.1rem;
width:75%;
color:#f5f5f5;
font-weight:bold;
margin-top:0.4rem;
}
`

export const InstallBannerIcon = styled.img`
width: 4.5vw;
left: 8vw;
position:fixed;

@media only screen and (max-width: 750px){
  width:3.5rem;
}
`

export const InstallBannerAntiActionButton = styled.div`


@media only screen and (max-width: 750px){
color:#f5f5f5;
margin-top:0.6rem;
}

`

export const BigContainer = styled.div`
bottom:0;
position:fixed;
width:100%;
display: flex;
align-items: center;
justify-content: center;
display: ${(props) => props.display ? "" : "none"};

@keyframes moveDown {
  to {
    
  }
}
`