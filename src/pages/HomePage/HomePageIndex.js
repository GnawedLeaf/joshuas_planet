import React, { useRef } from "react";
import { HeroSectionContainer, HeroPicture, HeroTitle, PageContainer, LinkToTestPage, LinkToTestPageText } from "./HomePageStyles";



const Homepage = () => {


  return (
    <PageContainer>
      <HeroSectionContainer>
        <HeroPicture></HeroPicture>
        <HeroTitle>Joshua's Planet</HeroTitle>
      </HeroSectionContainer>
      <LinkToTestPage href="/tests">
        <LinkToTestPageText>
          Go to Test Page
        </LinkToTestPageText>

      </LinkToTestPage>
    </PageContainer>

  )
}

export default Homepage;