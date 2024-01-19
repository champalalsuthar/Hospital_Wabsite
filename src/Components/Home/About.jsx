import React from "react";
import how from '../../Assets/AboutHome.webp';
import "../../Styles/Home/About.css";

const About = () => {
    return (
        <div className="About " id="about">
            <h3 className="dt-title">
                <span> About Us</span>
            </h3>
            <div className="about-flex-div ">
                <div className="Ab-left-div ">
                    <p className="subHeading  ">
                        Welcome to Rk Clinic Plus, your trusted partner for accessible and
                        personalized healthcare. Our expert doctors offer online consultations
                        and specialized services, prioritizing your well-being. Join us on
                        this journey towards a healthier you.
                    </p>
                    <h4 className=" solutions">Your Solutions</h4>
                    <div className=" solution-div  ">
                        <p className="solution-div-heading ">1. Choose a Specialist</p>
                        Find your perfect specialist and book with ease at Rk Clinic Plus. Expert doctors prioritize your health, offering tailored care
                    </div>
                    <div className="solution-div ">
                        <p className="solution-div-heading ">2. Make a Schedule</p>
                        Choose the date and time that suits you best, and let our dedicated team of medical professionals ensure your well-being with personalized care
                    </div>
                    <div className="solution-div ">
                        <p className="solution-div-heading ">3. Get Your Solutions</p>
                        Our experienced doctors and specialists are here to provide expert advice and personalized treatment plans, helping you achieve your best possible health
                    </div>
                </div>
                <div className="Ab-right-div ">
                    <img src={how} alt="Doctor Group" className="right-div-img " />
                </div>
            </div>
        </div>
    );
};

export default About;