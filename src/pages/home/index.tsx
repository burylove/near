import {router} from "next/client";
import React from 'react'

const Home = () =>{

    const login = () =>{
        window.location.replace('/login')
    }
    return (
        <div className="relative pt-16">
            <div className="absolute inset-x-0 bottom-0    " />
            <div className="absolute inset-0">
                <img
                    className="h-screen w-full mx-auto"
                    src="https://cdn.discordapp.com/attachments/876498266550853642/968338383183183894/5.png"
                    alt="People working on laptops"
                />
            </div>
            <div className=" mx-auto  ">
                    <div className="max-w-7xl relative px-12 py-16  sm:px-6  mx-auto ">
                        <div>
                            <div className="flex justify-between">
                                <div>
                                    <input type="text"
                                           className="  text-xs md:text-sm text-white  rounded-lg p-2 py-4 w-full border-gray-700 border   focus:border-blue-500 transition duration-300  outline-none"
                                           placeholder="Email address"
                                           id="address"
                                    />
                                </div>
                                <div>
                                    <button className="py-3 px-8 border rounded-lg border-black">
                                    Send</button>
                                </div>
                            </div>
                            <div>
                                <div className="mt-24">
                                    <input type="text"
                                           className="  text-xs md:text-sm text-white  rounded-lg p-2 py-4  border-gray-700 border   focus:border-blue-600 transition duration-300  outline-none"
                                           placeholder="Email  code"
                                           id="code"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-center mt-32">
                                <button onClick={login} className="py-3 px-8 border border-black rounded-lg">
                                    Login
                                </button>

                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Home

