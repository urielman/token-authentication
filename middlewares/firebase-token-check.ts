import { Request, Response, NextFunction } from 'express';



export const checkToken = async (req: Request, res: Response, next: NextFunction) => {

  if (!req.headers.authorization) {
    return res.send('Token is required');
  }

  // buscamos en la base de datos un administrador con la apiKey enviada.
  // const response = await Admin.findOne({ apiKey: req.headers.authorization, isActive: true, logicDelete: false });

  const isValid = req.headers.authorization === "12345";
  // en caso de existir el administrador, continuamos con la ejecucion, sino retornamos un error.
  if (isValid) {
    return next();
  } else {
    return res.send('Access not allowed');
  }
};