import {NextFunction, Request, Response} from "express";
import prisma from "../helpers/db";
import {comparePasswords, createJWT, hashPassword} from "../modules/auth";

export const createNewUser = async (req: any,res: any,next: NextFunction) => {
   try {
       const user = await prisma.user.create({
           data: {
               username: req.body.username,
               password: await hashPassword(req.body.password),
           },
       });
       const token = createJWT(user);
       res.json({token: token});
   } catch (err:any) {
       err.type = 'input'
       next(err);
   }

};
export const signin = async (req: Request, res: Response) => {
    const user = await prisma.user.findUnique({
        where: {
            username: req.body.username,
        },
    });
    const isValid = await comparePasswords(req.body.password, user!.password);
    if (!isValid) {
        res.status(401);
        res.json({message: "password ghalt 🤦🏻‍️"});
        return
    }
    const token = createJWT(user)
    res.json(token);
};
