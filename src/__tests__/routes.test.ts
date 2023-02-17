import app from "../server"
import request from "supertest"
import express from "express";

describe('get Index', () => {
    it('should return some data' , async () => {
        const response = await request(app)
            .get('/')
        expect(response.body.message).toBe('Hallo!')
    })
})