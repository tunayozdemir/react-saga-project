import React, { useState } from "react";
import { Login, OTP, ServiceSelection, Swiper, Icon } from "../../components";
import "./Login.scss"

const Index = () => {
  const [step, setStep] = useState('');

  const Content = () => {
    return (() => {
      switch (step) {
        case 'otp':
          return <OTP onFinish={() => { setStep("service"); }} />
        case 'service':
          return <ServiceSelection />
        default:
          return <Login onFinish={() => { setStep("otp"); }} />
      }
    })()
  }

  return <div className="login">
    <div className="login__content">
      <div className="login__logo">
        <span><Icon icon="small-check" /></span>
        <h1>BOSS</h1>
      </div>
      <div className="login__form">
        <h4 className="login__content__title">Bayi Otomasyon Saha Satış</h4>
        <Content />
      </div>
    </div>
    <Swiper />
  </div>
}

export default Index;
