import React from 'react';
import DentistServices from '../Components/Home/DentistServices ';
import Doctor from '../Components/Home/Doctor';
import About from '../Components/Home/About';
import Slider from '../Components/Home/SliderHomePage/Slider';
import Footer from '../Components/Footer';
const Home = () => {
    return (
        <div className='navFixingPadding'>
            <Slider/>
            <About/>
            <DentistServices />
            <Doctor/>
            <Footer/>
        </div>
    );
};
export default Home;
