import mongoose from "mongoose";
import connectDB from "./db/connection.js";
import bcrypt, { hash } from "bcrypt";
import User from "./models/user.js";

const register =  async ()=>{
    try{
        connectDB();
        const hashPassword =await hash("admin",10)
        const newUser =new User({
            name:"admin",
            password:hashPassword,
            email:"admin@gmail.com",
            address:"admin address",
            role:"admin"
        })

        await newUser.save();
        console.log("Admin User created Successfully")
    }
    catch(err){
        console.log(err)
    }
}

register()



