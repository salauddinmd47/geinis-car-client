import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Bookings = () => {
    const {serviceId} = useParams()
    const [service ,setService] = useState({})

    useEffect(()=>{
        fetch(`https://arcane-ridge-35483.herokuapp.com/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div>
            <h2>Booking details</h2>
            <div>
                <img src={service.img} alt="" />
                <h2>{service.Name}</h2>
                <h>{service.description}</h>
            </div>
        </div>
    );
};

export default Bookings;