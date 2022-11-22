import express from 'express';
import cars from './cars';

const router = express.Router();
router.use('/cars', cars);

export default router;
