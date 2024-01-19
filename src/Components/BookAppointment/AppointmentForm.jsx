import React, { useState, useEffect } from "react";
import "../../Styles/BookAppointment/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function AppointmentForm() {
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // });

  const [patientName, setPatientName] = useState("");
  const [patientFatherName, setPatientFatherName] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [patientGender, setPatientGender] = useState("default");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [preferredMode, setPreferredMode] = useState("default");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    if (!patientName.trim()) {
      errors.patientName = "Patient name is required";
    } else if (patientName.trim().length < 6) {
      errors.patientName = "Patient name must be at least 6 characters";
    }
    if (!patientFatherName.trim()) {
      errors.patientFatherName = "Patient Father name is required";
    } else if (patientFatherName.trim().length < 6) {
      errors.patientFatherName = "Patient Father name must be at least 6 characters";
    }

    if (!patientNumber.trim()) {
      errors.patientNumber = "Patient phone number is required";
    } else if (patientNumber.trim().length !== 10) {
      errors.patientNumber = "Patient phone number must be of 10 digits";
    }

    if (patientGender === "default") {
      errors.patientGender = "Please select patient gender";
    }

    if (!appointmentTime) {
      errors.appointmentTime = "Appointment time is required";
    } else {
      const selectedTime = new Date(appointmentTime).getTime();
      const currentTime = new Date().getTime();
      if (selectedTime <= currentTime) {
        errors.appointmentTime = "Please select a future appointment time";
      }
    }
    if (preferredMode === "default") {
      errors.preferredMode = "Please select preferred mode";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setPatientName("");
    setPatientFatherName("");
    setPatientNumber("");
    setPatientGender("default");
    setAppointmentTime("");
    setPreferredMode("default");
    setFormErrors({});
    // toast.success("Appointment Scheduled !");
    toast.success("Appointment Scheduled !", {
      // position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };

  return (
    <div className="appointment-form-section">
      <div className="form-container">
        <h2 className="form-title">
          <span>Book Appointment Online</span>
        </h2>

        <form className="form-content" onSubmit={handleSubmit}>
          <label>
            Patient Full Name:
            <input
              type="text"
              name="patientName"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              required
            />
            {formErrors.patientName && <p className="error-message">{formErrors.patientName}</p>}
          </label>

          <br />
          <label>
            Patient Father Name:
            <input
              type="text"
              name="patientFatherName"
              value={patientFatherName}
              onChange={(e) => setPatientFatherName(e.target.value)}
              required
            />
            {formErrors.patientFatherName && <p className="error-message">{formErrors.patientFatherName}</p>}
          </label>

          <br />
          <label>
            Patient Phone Number:
            <input
              type="text"
              name="patientNumber"
              value={patientNumber}
              onChange={(e) => setPatientNumber(e.target.value)}
              required
            />
            {formErrors.patientNumber && <p className="error-message">{formErrors.patientNumber}</p>}
          </label>

          <br />
          <label>
            Patient Gender:
            <select
              name="patientGender"
              value={patientGender}
              onChange={(e) => setPatientGender(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="private">I will inform Doctor only</option>
            </select>
            {formErrors.patientGender && <p className="error-message">{formErrors.patientGender}</p>}
          </label>

          <br />
          <label>
            Preferred Appointment Time:
            <input
              type="datetime-local"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              required
            />
            {formErrors.appointmentTime && <p className="error-message">{formErrors.appointmentTime}</p>}
          </label>

          <br />
          <label>
            Preferred Mode:
            <select
              value={preferredMode}
              onChange={(e) => setPreferredMode(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="voice">Voice Call</option>
              <option value="video">Video Call</option>
            </select>
            {formErrors.preferredMode && <p className="error-message">{formErrors.preferredMode}</p>}
          </label>

          <br />
          <button type="submit" className="text-appointment-btn">
            Confirm Appointment
          </button>

          <p className="success-message" style={{ display: isSubmitted ? "block" : "none" }}>Appointment details has been sent to the patients phone number via SMS.</p>
        </form>
      </div>

      <div className="legal-footer">
        <p>© 2017-2024 RkClinic+. All rights reserved.</p>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default AppointmentForm;
