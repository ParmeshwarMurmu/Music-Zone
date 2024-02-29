const express = require('express');
const { UserModel } = require('../Models/UserSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('dotenv').config()

const userRouter = express.Router();


// Handling User Sign Up 
userRouter.post('/signUp', async (req, res) => {

    try {
        const { email, password } = req.body;
        const existingUser = await UserModel.findOne({ email })
        if (existingUser) {
            res.status(200).send({ "message": "Email Already Exist" })
        }
        else {

            // Hashing User Password
            bcrypt.hash(password, 5, async(err, hash) => {
                // Store hash in your password DB.
                if (err) {
                    res.status(200).send({ "message": "Something went wrong Try Again" })
                }
                
                // Adding credential to database
                const newUser = UserModel({ ...req.body, password: hash })
                await newUser.save();
                res.status(200).send({ "message": "Signup Success" })
            });
        }


    } catch (error) {
        res.status(400).send({ "message": "Something went wrong Cannot Sign Up" })
    }
})


// Handling User Login
userRouter.post('/login', async (req, res) => {

    try {
        const { email, password } = req.body;
        console.log(req.body);
        const existingUser = await UserModel.findOne({ email })
        console.log(existingUser);
        if (existingUser) {

            // Comparing the user pssword and existing user password
            bcrypt.compare(password, existingUser.password, function(err, result) {
                // result == true
                if(err){
                    res.status(200).send({ "message": "Wrong Password" })
                }

                const token = jwt.sign({userId: existingUser._id, userEmail: existingUser.email}, process.env.SECRET_KEY);
                res.status(200).send({"message": "Login Success", "token": token, "userId": existingUser._id})


            });
        }
        else {
            res.status(200).send({ "message": "Email does not Exists" });
        }


    } catch (error) {
        res.status(400).send({ "message": "Something went wrong. Try Again." })
    }
})


// Handling Single User
userRouter.get('/singleUser/:_id', async(req, res)=>{
    try {
        const { _id } = req.params;
        if(_id){
            const singleUserData = await UserModel.findOne({_id});
            res.status(200).send({"userData": singleUserData})
        }
    } catch (error) {
        
    }
})


module.exports = {
    userRouter
}