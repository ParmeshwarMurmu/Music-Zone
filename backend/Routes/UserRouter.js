const express = require('express');
const { UserModel } = require('../Models/UserSchema');

const userRouter = express.Router();

userRouter.post('/signUp', async(req, res)=>{

    try {
        const newUser = UserModel({...req.body})
        await newUser.save();
        res.status(200).send({"message": "Signup Success."})
        
    } catch (error) {
        res.status(400).send({"message": "Something went wrong. Try Again."})
    }
})



module.exports = {
    userRouter
}