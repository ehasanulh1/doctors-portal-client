import React from 'react';

const AppointmentOptions = ({ appointmentOption, setTreatment }) => {
    const { name, slots } = appointmentOption;
    return (
        <div className="card shadow-xl h-[230px] justify-center">
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl text-secondary font-semibold mb-2">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try another day'}</p>
                <p className='uppercase'>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                <div className='p-4'>
                    <label
                        htmlFor="booking-modal"
                        className='btn btn-primary bg-gradient-to-r from-primary to-secondary text-white'
                        onClick={() => setTreatment(appointmentOption)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOptions;