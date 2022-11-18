import { Request, Response } from 'express';
// import { Response } from '../../../types';
// import Cars from '../../../models/cars';

// export const postCar = async (req: Request, res: Response) => {
//   try {
//     const values = {
//       name: req.body.name.toUpperCase(),
//       description: req.body.description,
//       signUpTag: req.body.signUpTag
//     };

//     if (values.name) {
//       const exist = await Cars.findOne({ name: values.name, logicDelete: false });
//       if (exist) {
//         throw new Error('Tag name already exists');
//       }
//     }

//     const tag = new Cars(values);
//     const newTag = await tag.save();
//     return res.success({ data: newTag, status: 201 });
//   }
//   catch (error) {
//     return res.boom.badRequest(error);
//   }
// };

export const getCar = (req: Request, res: Response) => {
  // try {
  //   const response = await Cars.find({ logicDelete: false });
  //   if (!response) {
  //     throw new Error('There are not Cars');
  //   }
  //   return res.success({ status: 200, data: response });
  // }
  // catch (error) {
  //   return res.boom.badRequest(error);
  // }

  res.send([
    {
      id: "1",
      name: "car1"
    },
    {
      id: "2",
      name: "car2"
    },
    {
      id: "3",
      name: "car3"
    },
  ]);
};

// export const inactivateCar = async (req: Request, res: Response) => {
//   try {

//     const response = await Cars.findOneAndUpdate(
//       { isActive: true, _id: req.params.id, logicDelete: false },
//       { isActive: false },
//       { new: true }
//     );

//     if (!response) {
//       throw new Error('Tag not found');
//     }


//     return res.success({ status: 201, data: response });
//   }
//   catch (error) {
//     return res.boom.badRequest(error);
//   }
// };

// export const activateCar = async (req: Request, res: Response) => {
//   try {
//     const response = await Cars.findOneAndUpdate(
//       { isActive: false, _id: req.params.id, logicDelete: false },
//       { isActive: true },
//       { new: true },
//     );

//     if (!response) {
//       throw new Error('Tag not found');
//     }
//     return res.success({ status: 201, data: response });
//   }
//   catch (error) {
//     return res.boom.badRequest(error);
//   }
// };

// export const logicDeleteCar = async (req: Request, res: Response) => {
//   try {
//     const updatedTag = await Cars.findOneAndUpdate(
//       { logicDelete: false, _id: req.params.id },
//       { logicDelete: true },
//       { new: true }
//     );

//     if (!updatedTag) {
//       throw new Error('Tag not found');
//     }

//     return res.success({ status: 201, data: updatedTag });
//   }
//   catch (error) {
//     return res.boom.badRequest(error);
//   }
// };

// export const modifyCar = async (req: Request, res: Response) => {
//   try {
//     const values = req.body;

//     const updatedValues = {
//       ...values,
//       name: req.body.name ? req.body.name.toUpperCase() : undefined
//     };

//     const updatedTag = await Cars.findOneAndUpdate(
//       { _id: req.params.id },
//       updatedValues,
//       { new: true },
//     );

//     if (!updatedTag || !updatedTag._id) {
//       throw new Error('Tag not found');
//     }

//     return res.success({ status: 201, data: updatedTag });
//   }
//   catch (error) {
//     return res.boom.badRequest(error);
//   }
// };