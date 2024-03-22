// /tasks{URL}

import { getResponseMessage } from "../../../helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

//db connection 
import { connectDb } from "@/helper/db";
connectDb();

// get all the tasks
export async function GET(request) {
    try {
        const tasks = await Task.find()
        return NextResponse.json(tasks, {
            status: 201
        })
    } catch (error) {
        console.log(error)
        return getResponseMessage("Error in getting all task!!", 404, false)
    }
}

//create all the tasks 
export async function POST(request) {

    const { title, content,status, userId } = await request.json();

    try {
        const task = new Task({
            title,
            content,
            status,
            userId,
        })

        const createdTask = await task.save()
        return NextResponse.json(createdTask, {
            status: 201
        })


    } catch (error) {
        console.log(error)
        return getResponseMessage("Error in creating a task!!",500, false)
    }
}