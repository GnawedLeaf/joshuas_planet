import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './pages/HomePage/HomePageIndex';
import { exportDefaultSpecifier } from '@babel/types';
import InstallBanner from './components/InstallBanner/InstallBannerIndex';

function App() {
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
      <InstallBanner display={deferredPrompt} onClick={onInstallClick} buttonText={"Install"} noActionButtonText={"Not now"} text={"Access your guide anywhere, anytime."} />
      <Homepage />
    </>
  );
}

export default App;
