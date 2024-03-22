import mongoose, { Schema } from 'mongoose'


const UserSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique:true,
        required: [true, "Email is required !!"],
    },
    password: {
        type: String,
        require: [true, "Password Required !!"],
    },
    about: String,
    // profileURL: String,
    // adress: {
    //     street: String,
    //     city: String,
    //     country: String,
    //     pinCode: Number,
    // }
})


export const User= mongoose.models.users || mongoose.model("users",UserSchema)