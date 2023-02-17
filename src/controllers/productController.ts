import {NextFunction, Request, Response, response} from "express";
import {body, validationResult} from "express-validator";
import app from "../server";
import prisma from "../helpers/db";
import products from "../routes/products";

export const getProducts = async (req: any, res = response, next: NextFunction) => {
    const user = await prisma.user.findUnique({
        where: {
            id: req.user.id
        },
        include: {
            products: true
        }
    })
    res.json({data: user!.products})
};
export const getProduct = async (req: any, res = response, next: NextFunction) => {
    const product = await prisma.product.findFirst({
        where: {
            id: req.params.id,
            belongsToId: req.user.id
        },

    })
    res.json({data: product})
};

export const createProduct = async (req: any, res = response, next: NextFunction) => {
    const product = await prisma.product.create({
        data: {
            name: req.body.name,
            belongsToId: req.user.id
        }
    })
    res.json({data: product})

}
export const updateProduct = async (req: any, res = response, next: NextFunction) => {
    const updated = await prisma.product.update({
        where: {
            id_belongsToId: {
                id: req.params.id,
                belongsToId: req.user.id,
            }
        },
        data: {
            name: req.body.name,
        }
    })
    res.json({data: updated})
}
export const deleteProduct = async (req: any, res: Response) => {
    const deleted = await prisma.product.delete({
        where: {
            id_belongsToId: {
                id: req.params.id,
                belongsToId: req.user.id,
            }
        }
    })
    res.json({data: deleted})
}