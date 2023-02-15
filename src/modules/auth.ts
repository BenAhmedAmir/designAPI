import jwt from "jsonwebtoken";
import { NextFunction, Response } from "express";
import bcrypt from "bcrypt";
export const createJWT = (user: any) => {
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET!
  );
  return token;
};
export const protect = (req: any, res: Response, next: NextFunction) => {
  const bearer = req.headers.authorization;
  console.log(bearer);
  if (!bearer) {
    res.status(401);
    res.json({ message: "owww ya m3allem win da5el 🤬" });
    return;
  }
  //descruction
  const [, token] = bearer.split(" ");
  if (!token) {
    res.status(401);
    res.json({ message: "owww ya m3allem rak ghalt 🤬" });
    return;
  }
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET!);

    req.user = user;
    next();
  } catch (e) {
    console.error(e);
    res.status(401);
    res.json({ message: "owww ya m3allem rak ghalt 🤬" });
    return;
  }
};
export const comparePasswords = (password: string, hashedPassword: string) => {
  return bcrypt.compare(password, hashedPassword);
};
export const hashPassword = (password: string) => {
  return bcrypt.hash(password, 5);
};
