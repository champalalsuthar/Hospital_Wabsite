import React from 'react';

const servicesData = [
    { title: 'Preventive Dentistry', description: 'Regular check-ups, cleanings, fluoride treatments, and sealants.' },
    { title: 'Restorative Dentistry', description: 'Fillings, crowns, bridges, and dentures for damaged or missing teeth.' },
    { title: 'Cosmetic Dentistry', description: 'Teeth whitening, veneers & cosmetic bonding for aesthetic improvements.' },
    { title: 'Orthodontic Services', description: 'Braces, clear aligners (Invisalign) for teeth alignment.' },
    { title: 'Periodontal Care', description: 'Treatment for gum diseases, scaling, and root planing.' },
    { title: 'Oral Surgery', description: 'Tooth extraction, wisdom teeth removal, and dental implant placement.' },
    { title: 'Endodontic Services', description: 'Root canal therapy to treat infected or inflamed tooth pulp.' },
    { title: 'Prosthodontics', description: 'Restoration and replacement of missing teeth with prosthetic devices.' },
    { title: 'Pediatric Dentistry', description: 'Specialized dental care for children, preventive and restorative services.' },
    { title: 'TMJ Treatment', description: 'Diagnosis and management of TMJ disorders.' },
    { title: 'Sleep Apnea Treatment', description: 'Dental appliances to manage sleep apnea.' },
    { title: 'Emergency Dental Care', description: 'Immediate treatment for dental emergencies.' },
    { title: 'Oral Cancer Screenings', description: 'Regular screenings to detect signs of oral cancer.' },
    { title: 'Patient Education', description: 'Counseling on proper oral hygiene practices and home care guidance.' },
    { title: 'Holistic Dentistry',description: 'An approach that considers the overall health and well-being of the patient.'},
];

const DentistServices = () => {
    return (
        <div className="ds">
            <h3 className="dt-title">
                <span> Our Services</span>
            </h3>
            <div className="ds-card-main-div">
                {servicesData.map((service, index) => (
                    <div key={index}  className="ds-card">
                        <h3 className="ds-service-title ">{service.title}</h3>
                        <p className="ds-service-desription">{service.description}</p>
                        <button className="ds-details-button  ">Details..</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DentistServices;
