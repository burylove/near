import React from 'react'
import Link from "next/link";
import Wallet from "../../../components/wallet";

const Detail = () =>{

    const Attributes = [
        {
            name:"饥饿值"
        },
        {
            name:"智力值"
        },
        {
            name:"体力值"
        },
        {
            name:"魅力值"
        },
        {
            name:"健康值"
        },
        {
            name:"幸运值"
        },

    ]



    return (
        <div className="relative">
            <div className="absolute inset-x-0 bottom-0    " />
            <div className=" mx-auto  ">
                <div className="fixed z-20 inset-x-0 flex justify-between px-5 mx-auto ">
                    <Link href="/main">
                        <div className="text-2xl text-gray-600 ">
                            <i className="fa fa-reply" aria-hidden="true"></i>
                        </div>
                    </Link>
                    <Wallet/>
                </div>
                <div className="max-w-7xl relative px-8 pt-20 py-10   mx-auto ">
                    <div className="border border-gray-500 rounded-2xl">
                        <div className="my-20 mx-14 border border-gray-500 rounded-2xl p-5">
                            <img className="w-36 mx-auto" src="/1.png" alt=""/>
                        </div>
                        <div className="mx-4 mb-10" >
                            <div className="flex justify-center text-xl font-semibold">
                              Attributes
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-center mt-10">
                                {Attributes.map((item=>(
                                    <div key={item.name} className="">
                                        <div className="flex items-center text-xs">
                                            <div>
                                                {item.name}
                                            </div>
                                            <div className="ml-2 border h-2 w-8/12 rounded-full">

                                            </div>
                                        </div>
                                    </div>
                                )))}


                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail
