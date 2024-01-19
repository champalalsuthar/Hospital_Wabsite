import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { HashLink } from "react-router-hash-link";

function DoctorCard(props) {
  return (
    <div className="dt-card ">
      <img src={props.img} alt={props.name} className="dt-card-img" />
      <p className="dt-card-name">{props.name}</p>
      <p className="dt-card-title">{props.title}</p>
      <p className="dt-card-stars">
        <FontAwesomeIcon icon="fa-solid fa-star" />
        <FontAwesomeIcon
          icon={faStar}
          style={{ color: "#F7BB50", paddingRight: "6px" }}
        />
        {props.stars}
        <span className="dt-card-reviews"> ({props.reviews}+ Reviews)</span>
      </p>
      <div>
        <HashLink to="/bookappointment#" className="bookAppointment ">BOOK APPOINTMENT</HashLink>
      </div>
    </div>
  );
}

export default DoctorCard;