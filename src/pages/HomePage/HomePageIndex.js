import React from "react";
import { HeroSectionContainer, HeroPicture, HeroTitle, PageContainer } from "./HomePageStyles";


const Homepage = () => {

    return (
        <PageContainer>
            <HeroSectionContainer>
                <HeroPicture></HeroPicture>
                <HeroTitle>Joshua's Planet</HeroTitle>
            </HeroSectionContainer>
        </PageContainer>

    )
}

export default Homepage;