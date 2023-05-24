import React, { useState, useEffect } from "react";
import { InstallBannerButton, InstallBannerContainer, InstallBannerIcon, InstallBannerText, InstallBannerAntiActionButton, BigContainer } from "./InstallBannerStyles";
import logo from "./Logo_Icon.png"

const InstallBanner = (props) => {

  const [installBannerDisplay, setInstallBannerDisplay] = useState(props.display)
  const onClickClose = () => {
    setInstallBannerDisplay(false);
  }
  const onClickInstall = () => {
    props.onClick();
    setInstallBannerDisplay(false);
  }


  const [deferredPrompt, setdeferredPrompt] = useState();
  const [installPrompt, setInstallPrompt] = useState(false)

  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    setdeferredPrompt(event);
  });

  useEffect(() => {
    console.log("deferredPrompt", deferredPrompt)
    if (deferredPrompt) {
      setInstallPrompt(true)
      console.log("prompt set to true")
    }
    else {
      setInstallPrompt(false)
      console.log("prompt set to false")
    }
  }, [deferredPrompt])

  const onInstallClick = () => {
    console.log("clicked")
    if (deferredPrompt) {
      console.log("deferredPrompt has been clicked", deferredPrompt)
      deferredPrompt.prompt();
    }
  }

  return (
    <>
      {
        props.display && (
          <BigContainer display={true}>
            < InstallBannerContainer >
              <InstallBannerIcon src={logo} />
              <InstallBannerText>{props.text}</InstallBannerText>
              <InstallBannerButton onClick={onInstallClick}>{props.buttonText}</InstallBannerButton>
              <InstallBannerAntiActionButton onClick={onClickClose}>{props.noActionButtonText}</InstallBannerAntiActionButton>
            </InstallBannerContainer >
          </BigContainer>

        )

      }
    </>
  )
}

export default InstallBanner;