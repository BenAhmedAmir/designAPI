import {Request, Response} from "express";
import db from "../helpers/db";
import prisma from "../helpers/db";

export const putUpdate = async (req:any, res:Response) => {
    const products = await prisma.product.findMany({
        where: {
            belongsToId: req.user.id
        },
        include:{
            updates:true
        }
    })
    const updates = products.reduce((allUpdates:any, product:any) => {
        return [...allUpdates, ...product.updates]
    }, [])
    const match = updates.find(update => update.id === req.params.id)
    if(!match) {
        return res.json({message: 'update dont match'})
    }
    const updateData = await prisma.update.update({
        where: {
            id: req.params.id,
        },
        data: req.body
    })
    res.json({data: updateData})
}

export const createUpdate = async (req:Request, res:Response) => {
    const product = await prisma.product.findUnique({
        where:{
            id: req.body.productId
        }
    })
    if(!product){
      return res.json({message: 'Product not found'})
    }
    const update = await prisma.update.create({
        data: req.body
    })
    res.json({data: update})
}
export const getUpdate = async (req:Request, res:Response) => {
    const updateData = await prisma.update.findFirst({
        where: {
            id: req.params.id
        }
    })
    res.json({data: updateData})
}
export const getUpdates =async (req:any, res:Response) => {
    const products = await prisma.product.findMany({
        where: {
            belongsToId: req.user.id
        },
        include:{
            updates: true
        }
    })
    const updates = products.reduce((allUpdates:any, product:any) => {
        return [...allUpdates, ...product.updates]
    }, [])
    res.json({data: updates})
}
export const deleteUpdate = async (req:any, res:Response) => {
    const products = await prisma.product.findMany({
        where: {
            belongsToId: req.user.id
        },
        include:{
            updates:true
        }
    })
    const updates = products.reduce((allUpdates:any, product:any) => {
        return [...allUpdates, ...product.updates]
    }, [])
    const match = updates.find(update => update.id === req.params.id)
    if(!match) {
        return res.json({message: 'update dont match'})
    }
    const deletedUpdate = await prisma.update.delete({
        where: {
            id: req.params.id
        }
    })
    res.json({message :"update deleted successfully",data: deletedUpdate})
}