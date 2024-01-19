import React from "react";
import introBanner from "../../Assets/introAboutPic.png";
import  '../../Styles/Home/IntroAbout.css';

const IntroAbout = () => {
  return (
    <div className="ia-main ">
      <div className="ia">
        <div className="ia-left ">
          <div className="ia-left-img-div ">
            <img className="ia-left-img" src={introBanner} alt="" />
          </div>
        </div>
        <div className="ia-right ">
          <div className="ia-right-div">
            <h1 className="ia-right-heading ">WHY CHOOSE US?</h1>
            <p className="ia-right-about">
              We have High quality Doctors who are ready to help you recover. We provide all kinds of medical Treatment. We have various research laboratory and Expertice doctor. MediSure ensures the best health care as well as clinical service with
              outstanding personal service.{" "}
            </p>
            <p className="ia-right-about2  ">The motto of Medisure is that human care is more than healthcare. We prefer quality over anything.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroAbout;
