import React from "react";
import { Design1Container, TestPageContainer, TestPageContainerTitle, TestPageNavbar, TestPageNavbarItem, TestPageSubtitle, TestPageTitle, TestPagesContainer, TitleContainer, Design1Navbar, Design1Logo, Design1BrandName, Design1PagesTitle, WebContainer, Design1OldButton } from "./TestPageStyles";
import { BiPlanet } from 'react-icons/bi';



const TestPage = () => {
  return (
    <TestPagesContainer>
      <TestPageNavbar>
        <TestPageNavbarItem href="/">
          Home
        </TestPageNavbarItem>
      </TestPageNavbar>
      <TitleContainer>
        <TestPageTitle>Test Page</TestPageTitle>
        <TestPageSubtitle>A bunch of potential designs</TestPageSubtitle>
      </TitleContainer>
      <TestPageContainerTitle>
        Design 1
      </TestPageContainerTitle>
      <TestPageContainer>
        <Design1Container>
          <Design1Navbar>

            <Design1BrandName>
              <Design1Logo>
                <BiPlanet size={"2.5vw"} color="#333333" />
              </Design1Logo>

              Joshua's Planet
            </Design1BrandName>
            <Design1PagesTitle>
              Pages
            </Design1PagesTitle>
          </Design1Navbar>
          <WebContainer>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </WebContainer>
          <Design1OldButton>Buy Now</Design1OldButton>

        </Design1Container>
      </TestPageContainer>
    </TestPagesContainer>
  )
}

export default TestPage;