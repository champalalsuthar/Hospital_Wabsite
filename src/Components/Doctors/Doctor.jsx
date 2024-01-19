import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../../Assets/DoctorProfile/doctor-profile1(1).jpg";
import profile2 from "../../Assets/DoctorProfile/doctorprofile2.jpg";
import profile3 from "../../Assets/DoctorProfile/doctorprofile3(1).jpg";
import profile4 from "../../Assets/DoctorProfile/doctorprofile4(1).jpg";
import profile5 from "../../Assets/DoctorProfile/doctorProfile(5).jpg";
import profile7 from "../../Assets/DoctorProfile/D18(1).jpg";
import profile8 from "../../Assets/DoctorProfile/D31(1).jpg";
import profile9 from "../../Assets/DoctorProfile/D33.jpg";
import profile10 from "../../Assets/DoctorProfile/D34.jpeg";
import profile11 from "../../Assets/DoctorProfile/D35.jpeg";
import profile12 from "../../Assets/DoctorProfile/D36.jpeg";
import profile13 from "../../Assets/DoctorProfile/D37.jpeg";
import profile14 from "../../Assets/DoctorProfile/D38.jpeg";
import profile15 from "../../Assets/DoctorProfile/D39.jpeg";
import profile16 from "../../Assets/DoctorProfile/D6(1).jpg";
import profile17 from "../../Assets/DoctorProfile/D8(1).jpg";
import "../../Styles/Doctors/Doctor.css";

function Doctor() {
    return (
        <div className="doctor-section" id="doctors">
            <div className="dt-title-content">
                <h3 className="dt-title">
                    <span>Our Doctors</span>
                </h3>
                <p className="dt-description">
                    Meet our amazing team of doctors at Rk Clinic. They're here to give you the best care possible, guiding you to a healthier and happier life. Trust their expertise!
                </p>
            </div>

            <div className="dt-cards-content">
                <DoctorCard
                    img={profile1}
                    name="Dr. Vivek kumar"
                    title="Endodontist"
                    stars="4.7"
                    reviews="100" className="DoctorCard"
                />
                <DoctorCard
                    img={profile5}
                    name="Dr. Sawai singh"
                    title="Orthodontist"
                    stars="4.8"
                    reviews="550" className="DoctorCard"
                />
                <DoctorCard
                    img={profile3}
                    name="Dr. Dinesh Jangid"
                    title="Endocrinologists"
                    stars="4.9"
                    reviews="950" className="DoctorCard"
                />
                <DoctorCard
                    img={profile4}
                    name="Dr. Hemraj"
                    title="Hematologists"
                    stars="4.7"
                    reviews="850" className="DoctorCard"
                />
                <DoctorCard
                    img={profile2}
                    name="Dr. Arjun Khatri"
                    title="Orthodontist"
                    stars="4.5"
                    reviews="650" className="DoctorCard"
                />
                <DoctorCard

                    img={profile8}
                    name="Dr. Maya Patel"
                    title="Dentist"
                    stars="4.2"
                    reviews="500" className="DoctorCard"
                />
                <DoctorCard
                    img={profile14}
                    name="Dr. Raj Singh"
                    title="Orthodontist"
                    stars="4.8"
                    reviews="720" className="DoctorCard"
                />
                <DoctorCard
                    img={profile10}
                    name="Dr. Virendra Jain"
                    title="Dentist"
                    stars="4.6"
                    reviews="600" className="DoctorCard"
                />

                <DoctorCard
                    img={profile13}
                    name="Dr. Jitendra Singh"
                    title="Cardiologist"
                    stars="4.9"
                    reviews="800" className="DoctorCard"
                />
                <DoctorCard
                    img={profile17}
                    name="Dr. Ravina"
                    title="Ophthalmologist"
                    stars="4.7"
                    reviews="670" className="DoctorCard"
                />
                <DoctorCard
                    img={profile9}
                    name="Dr. Suresh Kumar"
                    title="Pediatrician"
                    stars="4.5"
                    reviews="550" className="DoctorCard"
                />

                <DoctorCard
                    img={profile15}
                    name="Dr. Kamala Jain"
                    title="Orthodontist (Dentist)"
                    stars="4.3"
                    reviews="550" className="DoctorCard"
                />
                <DoctorCard
                    img={profile16}
                    name="Dr. Ram Lal"
                    title="Periodontist (Dentist)"
                    stars="4.7"
                    reviews="680" className="DoctorCard"
                />
                <DoctorCard
                    img={profile11}
                    name="Dr. Jyoti Sain"
                    title="Prosthodontist (Dentist)"
                    stars="4.5"
                    reviews="630" className="DoctorCard"
                />

                <DoctorCard
                    img={profile7}
                    name="Dr. Aakash Suthar"
                    title="Dermatologist"
                    stars="4.4"
                    reviews="590" className="DoctorCard"
                />
                <DoctorCard
                    img={profile12}
                    name="Dr. Ananya Singh"
                    title="Gastroenterologist"
                    stars="4.1"
                    reviews="480" className="DoctorCard"
                />
            </div>

            {/* <HashLink smooth to="/doctors#" className='home-button-icon ' > <img src={iconshome} ></img> </HashLink> */}
        </div>
    );
}

export default Doctor;