import React, { useEffect, useState } from 'react';
import { getAllCars } from '../services/CarsAPI';

const ViewCars = () => {
    const [cars, setCars] = useState([]); // Initialize with an empty array
    const [loading, setLoading] = useState(true); // To handle loading state

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const data = await getAllCars();
                setCars(data); // Set the fetched data
                setLoading(false); // Set loading to false once the data is loaded
            } catch (error) {
                console.error('Error fetching cars:', error);
                setLoading(false);
            }
        };

        fetchCars(); // Fetch cars when the component mounts
    }, []);

    // Handle the loading state
    if (loading) {
        return <div>Loading cars...</div>;
    }

    // Handle the case when there are no cars
    if (cars.length === 0) {
        return <div>No cars available.</div>;
    }

    return (
        <div>
            <h1>Cars List</h1>
            <ul>
                {cars.map(car => (
                    <li key={car.id}>
                        {car.name} - ${car.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ViewCars;