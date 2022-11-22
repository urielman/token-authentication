import express from 'express';

import {
    getCars,
    // postCar,
    // inactivateCar,
    // activateCar,
    // logicDeleteCar,
    // modifyCar,
} from './controller';

const router = express.Router();

router
    .route('/')
    .get(getCars)
// .post(postCar);

// router
//     .route('/:id')
//     .patch(modifyCar);

// router
//     .route('/inactivate/:id')
//     .put(inactivateCar);

// router
//     .route('/activate/:id')
//     .put(activateCar);

// router
//     .route('/logicdelete/:id')
//     .put(logicDeleteCar);

export default router;