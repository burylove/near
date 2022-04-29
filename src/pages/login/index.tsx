import React from 'react'
import {useAtom} from "jotai";
import {PeopleEmail} from "../../jotai";
const Login = () =>{
    const[email,setEmail] = useAtom(PeopleEmail)
    const login = () =>{
        const Email = (document.getElementById("email") as HTMLInputElement).value

       setEmail(Email)
        console.log(email)
        window.location.replace('/login/activation')
    }
    return (
        <div className="relative pt-16">
            <div className="absolute inset-x-0 bottom-0    " />
            <div className="absolute inset-0">
                <img
                    className="h-screen w-full mx-auto"
                    src="https://cdn.discordapp.com/attachments/876498266550853642/969529054967529522/5.png"
                    alt="People working on laptops"
                />
                </div>
            <div className=" mx-auto  ">
                <div className="max-w-7xl relative px-12 py-16  sm:px-6  mx-auto ">
                    <div>
                        <div className="flex justify-between items-center">
                            <div>
                                <input type="text"
                                       className="  text-xs md:text-sm   rounded-lg p-2 py-4 w-full border-gray-700 border   focus:border-blue-500 transition duration-300  outline-none"
                                       placeholder="Email address"
                                       id="email"
                                />
                            </div>
                            <div>
                                <button className="">
                                    <img className="w-32" src="https://cdn.discordapp.com/attachments/876498266550853642/969529054581620786/LOGINsend.png" alt=""/></button>
                            </div>
                        </div>
                        <div>
                            <div className="mt-24">
                                <input type="text"
                                       className="  text-xs md:text-sm   rounded-lg p-2 py-4  border-gray-700 border   focus:border-blue-600 transition duration-300  outline-none"
                                       placeholder="Email  code"
                                       id="code"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center mt-32">
                            <button onClick={login}  className="">
                                <img className="w-32" src="https://cdn.discordapp.com/attachments/876498266550853642/969529054397100032/LOGIN.png" alt=""/>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
