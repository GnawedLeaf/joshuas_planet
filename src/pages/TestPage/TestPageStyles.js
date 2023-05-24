import styled from "styled-components";

const colors1 = {
  primaryText: "lime",
  secondaryText: "#f5f5f5",
  primaryBackground: "#333333",
  primaryBorder: "#f5f5f5"
}

export const TestPagesContainer = styled.div`
font-family: 'Roboto Mono', monospace;
background: ${colors1.primaryBackground};
color: ${colors1.secondaryText};
padding:1vw 0 1vw 0;
`

export const TestPageNavbar = styled.div`
width:100%;
height:7vh;
position:fixed;
display:flex;
align-items: center;
padding-left:2vw;
background:transparent;
@media only screen and (max-width: 650px){
  padding-left:2rem;
  font-size:1rem;
}
`

export const TestPageNavbarItem = styled.a`
text-decoration:none;
color:${colors1.primaryText};
&:hover{
  text-decoration:underline;
}

`

export const TitleContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height:100vh;
width:100%;
font-family: 'Roboto Mono', monospace;
color:${colors1.primaryText};
`
export const TestPageTitle = styled.div`
font-size:4vw;

@media only screen and (max-width: 650px){
  font-size:3rem;
}
`
export const TestPageSubtitle = styled.div`
font-size:1vw;
@media only screen and (max-width: 650px){
  font-size:0.8rem;
}
`
export const TestPageContainerTitle = styled.div`
font-size:2vw;
margin-left:3vw;
`
export const TestPageContainer = styled.div`
border-top: 1px solid ${colors1.primaryBorder};
border-bottom: 1px solid ${colors1.primaryBorder};
padding:1vw;
`

const Design1Colors = {
  primaryTextColor: "#333333",
  primaryBackground: "#f5f5f5"
}
export const Design1Container = styled.div`
height:200vh;
width:100%;
border: 3px solid #333333;
border-radius: 30px;
background:${Design1Colors.primaryBackground};
color: ${Design1Colors.primaryTextColor};
display:flex;
flex-direction: column;
    align-items: center;
`
export const Design1Navbar = styled.div`
border-bottom: 3px solid #333333;
border-radius: 30px 30px 0 0;
width: 100%;
height:9vh;
display:grid;
grid-template-columns: 0.02fr 0.2fr 0.65fr 0.1fr;
`
export const Design1Logo = styled.div`
display:flex;
align-items: center;
justify-content: center;
margin-right:1vw;
`
export const Design1BrandName = styled.div`
grid-column-start: 2;
display:flex;
align-items: center;
justify-content: center;
font-weight:600;
font-size:1.4vw;
`
export const Design1PagesTitle = styled.div`
grid-column-start: 4;
display:flex;
align-items: center;
justify-content: center;
font-size:1.4vw;
`
export const WebContainer = styled.div`
margin-top:4vw;
border:5px solid #333333;
width:20%;
height:100px;
overflow:auto;

::-webkit-scrollbar {
  display: none;
}
`

export const Design1OldButton = styled.button`
margin-top:5rem;
width:9rem;
height:2rem;
border:none;
background: #C0C0C0;
border-bottom: 3px solid #333333;
border-right: 3px solid #333333;
border-top: 3px solid #E4E4E4;
border-left: 3px solid #E4E4E4;

&:hover{
  cursor:pointer;
}
`
