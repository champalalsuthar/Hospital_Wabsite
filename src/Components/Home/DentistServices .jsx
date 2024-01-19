import React from 'react';
import "../../Styles/Home/DentistServices.css";
import { HashLink } from 'react-router-hash-link';

const servicesData = [
    { title: 'Emergency Dental Care', description: 'Immediate treatment for dental emergencies.' },
    { title: 'Prosthodontics', description: 'Restoration and replacement of missing teeth with prosthetic devices.' },
    { title: 'Endodontic Services', description: 'Root canal therapy to treat infected or inflamed tooth pulp.' },
    { title: 'Pediatric Dentistry', description: 'Specialized dental care for children, preventive and restorative services.' },
    { title: 'Oral Surgery', description: 'Tooth extraction, wisdom teeth removal, and dental implant placement.' },
    { title: 'Periodontal Care', description: 'Treatment for gum diseases, scaling, and root planing.' }
];

const DentistServices = () => {
    return (
        <div className="ds ">
            <h3 className="dt-title">
                <span> Our Services</span>
            </h3>
            <div className="ds-card-main-div ">
                {servicesData.map((service, index) => (
                    <div key={index} className="ds-card ">
                        <h3 className="ds-service-title ">{service.title}</h3>
                        <p className="ds-service-desription ">{service.description}</p>
                    </div>
                ))}
            </div>
            <div className='ds-button-div'>
                <HashLink to="/services#" className="ds-button ">All Services</HashLink>
            </div>
        </div>
    );
};

export default DentistServices;
