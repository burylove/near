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
            <div className=" mx-auto  ">
                <div className="max-w-7xl relative px-12 py-16  sm:px-6  mx-auto ">
                    <div>
                        <div className="flex justify-between">
                            <div>
                                <input type="text"
                                       className="  text-xs md:text-sm   rounded-lg p-2 py-4 w-full border-gray-700 border   focus:border-blue-500 transition duration-300  outline-none"
                                       placeholder="Email address"
                                       id="email"
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
                                       className="  text-xs md:text-sm   rounded-lg p-2 py-4  border-gray-700 border   focus:border-blue-600 transition duration-300  outline-none"
                                       placeholder="Email  code"
                                       id="code"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center mt-32">
                            <button onClick={login}  className="py-3 px-8 border border-black rounded-lg">
                                Login
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
