import React, { useState } from 'react';
import { createCar } from '../services/CarsAPI';

const CreateCar = () => {
    const [car, setCar] = useState({
        name: '',
        description: '',
        price: ''
    });

    const handleChange = (e) => {
        setCar({ ...car, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createCar(car);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={car.name}
                onChange={handleChange}
                placeholder="Car name"
                required
            />
            <input
                type="text"
                name="description"
                value={car.description}
                onChange={handleChange}
                placeholder="Car description"
                required
            />
            <input
                type="number"
                name="price"
                value={car.price}
                onChange={handleChange}
                placeholder="Price"
                required
            />
            <button type="submit">Create Car</button>
        </form>
    );
};

export default CreateCar;