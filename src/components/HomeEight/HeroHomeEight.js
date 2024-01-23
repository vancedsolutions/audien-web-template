import React from "react";
import Typed from "react-typed";
import shapeOne12 from "../../assets/images/6010f30d20904417a79b89dc_check.svg";
import shapeOne from "../../assets/images/60301606666d12e9208349ae_Bg-Developer-Sm.svg";
import shapeOne1 from "../../assets/images/6031c5b5c2e3fcf2f50fb170_Cursor-Sam.svg";

function HeroHomeEight() {
  return (
    <>
      <section className="appie-hero-area appie-hero-8-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="appie-hero-content appie-hero-content-8">
                <h1 className="appie-title homeheading">Where teams create</h1>
                <div className="animation-text-wrapper-2">
                  <div className="cursor-wrapper">
                    <img src={shapeOne1} alt="" />
                  </div>
                  <div className="blinker-2"></div>
                  <Typed
                    strings={[
                      "Chatbots", 
                      "Voice Assistants",
                      "IVRs",
                      "Alexa Skills",
                      "Google Actions",
                      "Mobile Assistants",
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    backSpeed={20}
                    bindInputFocusEvents={true}
                    backDelay={3000}
                    startDelay={500}
                    loop
                  >
                    <h1 className="typed-text-sonk"></h1>
                  </Typed>
                </div>
                <div className="herocta-s">
                  <div className="checkwrapper">
                    <img src={shapeOne12} className="image-136" />
                    <p className="tinytext">Collaborative no-code design</p>
                  </div>
                  <div className="checkwrapper">
                    <img src={shapeOne12} className="image-136" />
                    <p className="tinytext">Supports every NLU</p>
                  </div>
                  <div className="checkwrapper">
                    <img src={shapeOne12} className="image-136" />
                    <p className="tinytext">Product support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-8-shape-3">
          <img src={shapeOne} alt="" />
        </div>
      </section>
    </>
  );
}

export default HeroHomeEight;