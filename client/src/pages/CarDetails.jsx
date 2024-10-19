import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCarById } from '../services/CarsAPI';

const CarDetails = () => {
    const { id } = useParams();
    const [car, setCar] = useState(null);

    useEffect(() => {
        const fetchCar = async () => {
            const data = await getCarById(id);
            setCar(data);
        };

        fetchCar();
    }, [id]);

    if (!car) return <div>Loading...</div>;

    return (
        <div>
            <h1>{car.name}</h1>
            <p>{car.description}</p>
            <p>Price: ${car.price}</p>
        </div>
    );
};

export default CarDetails;