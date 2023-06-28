import { format } from 'date-fns';
import React, { useState } from 'react';
import AppointmentOptions from './AppointmentOptions';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const AvailableAppointment = ({ selectedDate }) => {    
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');

// using React Query / TanStack Query
//also try with /v2/appointmentOptions

    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: () => fetch(`http://localhost:5000/v2/appointmentOptions?date=${date}`)
            .then(res => res.json())
    })


    if(isLoading){
        return <Loading></Loading>
    }

// another way using react query

    // const {data: appointmentOptions = [] } = useQuery({
    //     queryKey: ['appointmentOptions'],
    //     queryFn: async()=>{
    //         const res = await fetch('http://localhost:5000/appointmentOptions');
    //         const data = await res.json();
    //         return data;
    //     }
    // })
    
    return (
        <section className='my-16'>
            <p className='text-center text-secondary font-semibold'>
                Available Services on {format(selectedDate, 'PP')}
            </p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                {
                    appointmentOptions.map(appointmentOption => <AppointmentOptions
                        key={appointmentOption._id}
                        appointmentOption={appointmentOption}
                        setTreatment={setTreatment}
                    ></AppointmentOptions>)
                }
            </div>

            {
                treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointment;