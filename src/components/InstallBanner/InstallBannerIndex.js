import React, { useState } from "react";
import { InstallBannerButton, InstallBannerContainer, InstallBannerIcon, InstallBannerText, InstallBannerAntiActionButton, BigContainer } from "./InstallBannerStyles";
import logo from "./Logo_Icon.png"

const InstallBanner = (props) => {

  const [installBannerDisplay, setInstallBannerDisplay] = useState(props.display)
  const onClickClose = () => {
    setInstallBannerDisplay(false);
  }
  const onClickInstall = () => {
    props.onClick();
    //setInstallBannerDisplay(false);
  }

  return (
    <>
      {
        props.display && (
          <BigContainer display={installBannerDisplay}>
            < InstallBannerContainer >
              {/* <InstallBannerIcon src={logo} /> */}
              <InstallBannerText>{props.text}</InstallBannerText>
              <InstallBannerButton onClick={onClickInstall}>{props.buttonText}</InstallBannerButton>
              <InstallBannerAntiActionButton onClick={onClickClose}>{props.noActionButtonText}</InstallBannerAntiActionButton>
            </InstallBannerContainer >
          </BigContainer>

        )

      }
    </>
  )
}

export default InstallBanner;