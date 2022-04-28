import React from "react";


const Activation = () =>{
    const send = () =>{
        window.location.replace('/phrase')
    }

    return (
        <div className="relative pt-16">
            <div className="absolute inset-x-0 bottom-0    " />
            <div className="absolute inset-0">
                <img
                    className="h-screen w-full mx-auto"
                    src="https://cdn.discordapp.com/attachments/876498266550853642/969177072507420712/2b1aace3652d68c3.png"
                    alt="People working on laptops"
                />
            </div>
            <div className=" mx-auto  ">
                <div className="max-w-7xl relative px-12 py-16 h-screen   sm:px-6  mx-auto ">
                    <div className="mt-36 ">
                        <div className="flex justify-between">
                            <div>
                                <input type="text"
                                       className="  text-xs md:text-sm   rounded-lg p-2 py-4 w-full border-gray-700 border   focus:border-blue-500 transition duration-300  outline-none"
                                       placeholder="activation code"
                                       id="activation"
                                />
                            </div>
                            <div>
                                <button onClick={send} className="py-3 px-8 shadow-lg rounded-lg bg-blue-200 border-black">
                                    Activation</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activation
