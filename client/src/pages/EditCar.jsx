import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCarById, updateCar } from '../services/CarsAPI';

const EditCar = () => {
    const { id } = useParams(); // Get the car ID from the URL
    const navigate = useNavigate(); // For navigation after edit
    const [car, setCar] = useState({
        name: '',
        description: '',
        price: ''
    });
    const [loading, setLoading] = useState(true);

    // Fetch the car details when the component loads
    useEffect(() => {
        const fetchCar = async () => {
            try {
                const carData = await getCarById(id);
                setCar(carData); // Set the car data in the form fields
                setLoading(false); // Stop loading
            } catch (error) {
                console.error('Failed to fetch car details:', error);
            }
        };
        fetchCar();
    }, [id]);

    // Handle form input changes
    const handleChange = (e) => {
        setCar({ ...car, [e.target.name]: e.target.value });
    };

    // Handle form submission to update the car
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateCar(id, car); // Update car details in the database
            navigate(`/cars/${id}`); // Redirect to the car details page after successful update
        } catch (error) {
            console.error('Failed to update car:', error);
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h1>Edit Car</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Car Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={car.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={car.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={car.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Update Car</button>
            </form>
        </div>
    );
};

export default EditCar;