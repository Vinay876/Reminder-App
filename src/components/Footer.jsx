"use client"

import React from 'react'

const Footer = () => {
    return (
        <footer className='h-40 bg-slate-900 mt-5 '>
            <div className='flex p-5 justify-around'>
                <div className='text-center text-white flex-col flex justify-center'>'
                    <h1 className='text-3xl'>Welcome to Work Manager</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem possimus, nostrum facere quisquam dignissimos doloremque.
                    </p>
                </div>
                <div className='text-start text-white flex-col flex justify-center'>
                    <h1>Important Links</h1>
                    <ul>
                        <li>
                            <a href="#!">Facebook</a>
                        </li>
                        <li>
                            <a href="#!">Linkdin</a>
                        </li>
                        <li>
                            <a href="#!">Twitter</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
