import app from "../server"
import request from "supertest";
import {createNewUser} from "../controllers/userController";

describe('user routes',  () => {
    let token:string;

    it('should create new  user',async () => {
        const req = {body:{"username": "mocker", password:'password'}}
        // @ts-ignore
        const res = {json({token}){
            expect(token).toEqual("444")
            }}
        await createNewUser(req,res, () => {})
    })


});