"use client"

import React, { useState } from 'react'
import loginSvg from '../../assets/login.svg'
import Image from 'next/image'
import { addTask } from '@/services/taskService'
//  export const metadata={
//     title:'AddTask : Work Manager'
//   }

const AddTask = () => {
  // console.log('this is as class component')

  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
    userId: "65192da4ff782af88f7202a7",
  })

  const handleAddTask=async (event)=>{
    event.preventDefault();
    console.log(task);

    // validating task data

    try {
      
      const result=await addTask(task)
      console.log(result);

    } catch (error) {
      console.log(error)
    }
  

  }

  return (
    <div className='grid grid-cols-12 justify-center '>
      <div className='text-white col-span-6 col-start-4 p-5'>
        <div className='my-4 flex justify-center'>
          <Image src={loginSvg} style={{ width: '50%' }} alt='Login Banner Image' />
        </div>
        <h1 className='text-3xl text-center'>Add your task here !!</h1>

        <form action="" onSubmit={handleAddTask}>
          <div className='mt-4'>
            <label htmlFor="task_title" className='block text-sm font-medium mb-2'>Title</label>
            <input type="text" className="w-full p-3 rounded-xl bg-gray-800 focus:ring-gray-600" id='task_title' name="task_title"
              onChange={(event) => {
                setTask({
                 ...task,
                 title:event.target.value
                })
              }}
              value={task.title}
            />
          </div>
          <div className='mt-4'>
            <label htmlFor="task_content" className='block text-sm font-medium mb-2'>Content</label>
            <textarea className="w-full p-3 rounded-xl bg-gray-800 focus:ring-gray-600" id='task_content' rows={5}
            name="task_content"
              onChange={(event) => {
                setTask({
                 ...task,
                 content:event.target.value
                })
              }}
              value={task.content}
               />
          </div>
          <div className='mt-4'>
            <label htmlFor="task_status" className='block text-sm font-medium mb-2'>Status</label>
            <select className="w-full p-3 rounded-xl bg-gray-800 focus:ring-gray-600" id="task_status"
              name="task_status"
              onChange={(event) => {
                setTask({
                 ...task,
                 status:event.target.value
                })
              }}
              value={task.status}
              >
              <option value="none"
              disabled>----Select Status----</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {/* button action  */}
          <div className='mt-4 flex justify-between'>
            <button onClick={handleAddTask} className='bg-green-600 py-3 px-3 rounded-lg'>Add Todo</button>
            <button className='bg-red-600 py-3 px-6 rounded-lg'>Clear</button>

            {/* {JSON.stringify(task)} */}
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddTask
