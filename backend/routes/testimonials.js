import express from 'express';
import { getAllTestimonials, getTestimonialById, createTestimonial, updateTestimonial, deleteTestimonial } from '../controllers/testimonialController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getAllTestimonials);
router.get('/:id', getTestimonialById);
router.post('/', createTestimonial);
router.put('/:id', updateTestimonial);
router.delete('/:id', deleteTestimonial);

export default router;