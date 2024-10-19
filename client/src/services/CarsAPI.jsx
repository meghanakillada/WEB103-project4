
const API_URL = '/api/cars';

// Get all cars
export const getAllCars = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching cars:', error);
    }
};

// Get a single car by ID
export const getCarById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching car with ID ${id}:`, error);
    }
};

// Create a new car
export const createCar = async (car) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(car),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating car:', error);
    }
};

// Update a car
export const updateCar = async (id, car) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(car),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error updating car with ID ${id}:`, error);
    }
};

// Delete a car
export const deleteCar = async (id) => {
    try {
        await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
    } catch (error) {
        console.error(`Error deleting car with ID ${id}:`, error);
    }
};
