
//api/tasks/{taskId}{URL}


import { Task } from "@/models/task";
import { getResponseMessage } from "@/helper/responseMessage";
import { NextResponse } from "next/server";



//db connection 
import { connectDb } from "@/helper/db";
connectDb();


// Get Single id Task
export async function GET(request ,{params}){
console.log(params)
    const {taskId}=params;
 try {
   const task= await Task.findById(taskId)
   return  NextResponse.json(task)
 } catch (error) {
    return getResponseMessage("Error in getting task !!",404,false)
 }

}

// Update Task
export async function PUT(request ,{params}){
    try {
        const {taskId}=params;

        const {title,content,status}=await request.json()

       let task = await Task.findById(taskId)
        task.title=title,
        task.content=content,
        task.status=status
        //....

       const updatedTask= await task.save()
       return NextResponse.json(updatedTask)

    } catch (error) {
console.log(error)
return getResponseMessage("Error In Updating Task !!",500,false)
    }
}


// DELETING the task
export async function DELETE(request ,{params}){
    try {
        const {taskId}=params
        await Task.deleteOne({
          _id:taskId,
        });4
        return getResponseMessage("Task Deleted!!",200,true)
    } catch (error) {
        console.log(error)
        return getResponseMessage("Failed in deleting a task",500,false)
    }

}