import { User } from "@/models/user";
import { NextResponse } from "next/server";

//db connection 
import { connectDb } from "@/helper/db";
connectDb();



// GET INDIVISUAL USER
export async function GET(request,{params}){
//destructuring the userid 
try {
    const {userId}=params

    const user= await User.findById(userId)
    return NextResponse.json(user,{
        message:'GEtting user by Id successfully',
        success:true 
    })
    
} catch (error) {
    return NextResponse.json({
        message:"failed in Getting a userID!!",
        success:false
    })
}
}









//USER DELETED {USERID} API
export async function DELETE(request, { params }) {
    //     console.log(params);
    //    const response= NextResponse.json(params)
    //    return response

// destructuring the userid from params
    const { userId } = params;

    try {
      await  User.deleteOne({
            _id:userId
        })

        return NextResponse.json({
            message:"User deleted successfully!!",
            success:true
        })
    } catch (error) {
        console.log(error)
     return NextResponse.json({
            message:"failed in deleting a userID!!",
            success:false
        })
    }
}