import { NextFunction, Request, response } from "express";

export const getProduct = (req: any, res = response, next: NextFunction) => {
  res.json({ message: req.shh_secret });
};
