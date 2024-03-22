"use client";

import React from 'react'


import Link from 'next/link';
const CustomNavbar = () => {
    return (
        <div className='bg-slate-900 h-12 py-2 px-4 flex justify-between items-center'>
            <div className='brand text-white'>
                <h1 className='text-xl font-semibold'><Link href={"#!"}>Work Manager</Link></h1>

            </div>
            <div >
                <ul className='flex text-white space-x-5'>
                    <li>
                        <Link href={"/"} className='hover:text-slate-300'>Home</Link>
                    </li>
                    <li>
                        <Link href="/add-task"  className='hover:text-slate-300'>Add Task</Link>
                    </li>
                    <li>
                        <Link href="/show-tasks"  className='hover:text-slate-300'>Show Tasks</Link>
                    </li>
                </ul>
            </div>
            <div>
                <ul className='flex text-white space-x-3'>
                    <li>
                        <Link href="#!"  className='hover:text-slate-300'>Login</Link>
                    </li>
                    <li>
                        <Link href="#!"  className='hover:text-slate-300'>Singup</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CustomNavbar
