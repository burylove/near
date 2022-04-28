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
                    src="https://cdn.discordapp.com/attachments/876498266550853642/969221625226604614/65635.png"
                    alt="People working on laptops"
                />
            </div>
            <div className=" mx-auto  ">
                    <div className="max-w-7xl relative px-12 pt-96 mx-auto ">
                            <div className="flex  justify-center pt-56">
                                <button onClick={login} className="rounded-full">
                                    <img className="rounded-full" src="https://cdn.discordapp.com/attachments/876498266550853642/969221280534495282/252452.png" alt=""/>
                                </button>

                            </div>
                    </div>
            </div>
        </div>
    )
}

export default Home

