import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: name,
            slot,
            email,
            phone
        }

        // TODO: send data to the server
        // and once data is seved then close the modal
        // and display success toast

        console.log(booking)
        setTreatment(null)
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative py-6 px-4">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl font-semibold mb-6">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5'>
                        <input type="text" disabled value={date} className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, i)=><option
                                    value={slot}
                                    key={i}
                                    >{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Full Name" className="input input-bordered w-full" />
                        <input name='email' type="email" placeholder="Email" className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input type="submit" className='btn btn-accent w-full' value="SUBMIT" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;