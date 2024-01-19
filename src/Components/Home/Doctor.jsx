import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../../Assets/DoctorProfile/doctor-profile1(1).jpg";
import profile3 from "../../Assets/DoctorProfile/doctorprofile3(1).jpg";
import profile4 from "../../Assets/DoctorProfile/doctorprofile4(1).jpg";
import profile5 from "../../Assets/DoctorProfile/doctorProfile(5).jpg";
import "../../Styles/Doctors/Doctor.css";
import { HashLink } from "react-router-hash-link";

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
          reviews="550"
        />
        <DoctorCard
          img={profile3}
          name="Dr. Dinesh Jangid"
          title="Endocrinologists"
          stars="4.9"
          reviews="950"
        />
        <DoctorCard
          img={profile4}
          name="Dr. Hemraj"
          title="Hematologists"
          stars="4.7"
          reviews="850"
        />
      </div>
      <div>
        <HashLink to={"/doctors#"} className="allservices-button ds-button">All Doctors</HashLink>
      </div>
    </div>
  );
}

export default Doctor;