import express from 'express';
import { getAllItems, getItemById, createItem, updateItem, deleteItem } from '../controllers/itemsController.js';

const router = express.Router();

// Define routes
router.get('/items', getAllItems); // Get all items
router.get('/items/:id', getItemById); // Get a single item by ID
router.post('/items', createItem); // Create a new item
router.put('/items/:id', updateItem); // Update an item by ID
router.delete('/items/:id', deleteItem); // Delete an item by ID

export default router;