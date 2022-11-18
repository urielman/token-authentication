import express from 'express';
import admin from './admin';
import {
    checkToken,
} from '../middlewares/token-check';


const router = express.Router();
router.use('/admin', checkToken, admin);

export default router;
