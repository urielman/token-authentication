import express from 'express';
import admin from './admin/index';
import publicEndpoints from './publicEndpoints/index';
import {
    checkToken,
} from '../middlewares/token-check';


const router = express.Router();
router.use('/admin', checkToken, admin);
router.use('/public', publicEndpoints);

export default router;
