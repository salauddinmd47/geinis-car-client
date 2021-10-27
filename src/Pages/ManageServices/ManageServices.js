import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('https://arcane-ridge-35483.herokuapp.com/services')
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[])
    const handleDelete = id =>{
        fetch(`https://arcane-ridge-35483.herokuapp.com/services/${id}`,{
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data=> {
            if(data.deletedCount ){
                alert('deleted successfully')
                const remainingServices = services.filter(service=> service._id !== id)
                setServices(remainingServices)
            }
        })
    }
    return (
        <div>
            {
                services.map(service=> <div key={service._id}>
                    <h2>{service.Name}</h2>
                    <button onClick={()=> handleDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;