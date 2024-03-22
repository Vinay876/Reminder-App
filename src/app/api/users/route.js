import { connectDb } from "@/helper/db";
import {User} from '../../../models/user'
import { NextResponse } from "next/server";

connectDb();

//  get request function
export async function GET(request) {

    let users=[]
    try {
        users= await User.find()
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"failed to get users",
            success:false
        })

    }
    return NextResponse.json(users);
}



//create user
export async function POST(request) {

    // fetch user details from request
    const { name, email, password, about, profileURL } = await request.json()
    // console.log({ name, email, password, about, profileURL })
    // create user object with user model

    const user = new User({
        name,
        email,
        password,
        about,
        profileURL,
    });
    try {
        // save object to database
        const createdUser = await user.save()
        const response = NextResponse.json(user,{
            status: 201,  })

        return response
    }

    catch (error) {
        console.log(error)
        return NextResponse.json({
            message: 'failed to create user',
            status: false,
        })
    }
}


//