import Link from 'next/link'
import React from 'react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Test = () =>{

    return (
        <div className="relative">
            <div className="absolute inset-x-0 bottom-0    " />
            <div className=" mx-auto  ">
                <div className="fixed z-20 inset-x-0 flex justify-between">
                    <button onClick={()=>{window.history.back()}}>
                        <div className=" text-2xl text-gray-600 px-5">
                            <i className="fa fa-reply" aria-hidden="true"></i>
                        </div>
                    </button>
                    <div className="text-xl font-semibold">
                       #25381
                    </div>
                    <div>
                        <div className="text-2xl text-gray-600 px-5">
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl relative px-8 py-10   mx-auto ">
                    <div className="mt-12">
                        <img className="w-64 mx-auto" src="https://cdn.discordapp.com/attachments/876498266550853642/974566779445727242/1.png" alt=""/>
                        <div className="flex justify-between mt-20">
                            <Link href="/wallet/external/pets/detail/send">
                                <a className="w-36 flex mt-5 mr-2  justify-center rounded-full border border-gray-500 border-b-4 border-r-4 shadow-sm px-4 py-2  text-base font-medium text-black">
                                Send
                                </a>
                            </Link>
                            <button
                                className="w-36 flex mt-5  justify-center rounded-full border border-gray-600 border-b-4 border-r-4  shadow-sm px-4 py-2 bg-blue-300 text-base font-medium text-white "
                            >
                                To Inventory
                            </button>
                        </div>

                        <div className="mt-10 ">
                            <div className="text-black text-xl font-semibold">
                                Description
                            </div>
                            <div className="mt-2 text-gray-500">
                                NFT Pets,user in Pet to move2earn
                            </div>
                        </div>

                        <div className="mt-5 ">
                            <div className="text-black text-xl font-semibold">
                               Properties
                            </div>
                            <div className="mt-2 text-gray-500 flex flex-wrap">
                                <div className="mr-3 border p-2 rounded-lg text-sm">
                                    <div className="text-gray-400">
                                        Sneaker type
                                    </div>
                                    <div className="text-black font-semibold">
                                        Jogger
                                    </div>
                                </div>

                                <div className="mr-3 border p-2 rounded-lg text-sm">
                                    <div className="text-gray-400">
                                       Sneaker quality
                                    </div>
                                    <div className="text-black font-semibold">
                                        Common
                                    </div>
                                </div>

                                <div className="mr-3 border p-2 rounded-lg text-sm">
                                    <div className="text-gray-400">
                                       Level
                                    </div>
                                    <div className="text-black font-semibold">
                                       0
                                    </div>
                                </div>

                                <div className="mr-3 mt-4 border p-2 rounded-lg text-sm">
                                    <div className="text-gray-400">
                                        Optimal Speed
                                    </div>
                                    <div className="text-black font-semibold">
                                        4.0-10.0km/h
                                    </div>
                                </div>

                                <div className="mr-3 mt-4 border p-2 rounded-lg text-sm">
                                    <div className="text-gray-400">
                                       Shoe-minting Count
                                    </div>
                                    <div className="text-black font-semibold">
                                       0/7
                                    </div>
                                </div>
                                <div className="mr-3 mt-4 border p-2 rounded-lg text-sm">
                                    <div className="text-gray-400">
                                        Efficiency
                                    </div>
                                    <div className="text-black font-semibold">
                                        8.8
                                    </div>
                                </div>
                                <div className="mr-3 mt-4 border p-2 rounded-lg text-sm">
                                    <div className="text-gray-400">
                                        Resilience
                                    </div>
                                    <div className="text-black font-semibold">
                                        6.0
                                    </div>
                                </div>
                                <div className="mr-3 mt-4 border p-2 rounded-lg text-sm">
                                    <div className="text-gray-400">
                                        Luck
                                    </div>
                                    <div className="text-black font-semibold">
                                        4.6
                                    </div>
                                </div>
                                <div className="mr-3 mt-4 border p-2 rounded-lg text-sm">
                                    <div className="text-gray-400">
                                       Comfortability
                                    </div>
                                    <div className="text-black font-semibold">
                                        8.8
                                    </div>
                                </div>

                                <div className="mr-3 mt-4 border p-2 rounded-lg text-sm">
                                    <div className="text-gray-400">
                                        Durability
                                    </div>
                                    <div className="text-black font-semibold">
                                        100/100
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Test
