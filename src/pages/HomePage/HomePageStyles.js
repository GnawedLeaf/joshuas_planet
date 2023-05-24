import styled from 'styled-components'

export const PageContainer = styled.div`
height: 200vh;
// background:#140726;
background: #f5f5f5;
overflow-y:hidden;
::-webkit-scrollbar {
    display: none;
  }
`
export const HeroSectionContainer = styled.div`

height:100vh;
width:100%;
display:flex;
justify-content: center;
align-items: center;
margin:0;
padding:0;
font-family: 'Space Grotesk', sans-serif;
`
export const HeroPicture = styled.div``
export const HeroTitle = styled.div`
font-size: 10rem;
color:salmon;
`

export const LinkToTestPage = styled.a`
text-decoration: none;
color:#333333;
font-size:1.4rem;
display:flex;
align-items: center;
justify-content: center;


`
export const LinkToTestPageText = styled.div`
transition-duration:0.3s;
border-bottom: 2px solid transparent; 
&:hover{
  border-bottom: 2px solid #333333; 
}
`