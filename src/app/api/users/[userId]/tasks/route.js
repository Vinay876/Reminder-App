// {URL} localhost:3000/users/{userId}/task

// fetching all task according to user id

import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task"
import { NextResponse } from "next/server";

export async function GET(request,{params}){

    const {userId}=params
    try {
       const task= await Task.find({
            userId:userId
        });
        return NextResponse.json(task);
    } catch (error) {
        console.log()
        return getResponseMessage("Error occured in fetching all task of any perticular user",404,false)
    }
}