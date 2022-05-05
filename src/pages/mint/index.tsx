import React from 'react'
import Link from "next/link";
import {PetStyle} from "../../constant";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Mint = () =>{

    return (
        <div className="relative">
            <div className="absolute inset-x-0 bottom-0    " />
            <div className=" mx-auto  ">
                <div className="fixed z-20 inset-x-0 flex justify-between">
                    <Link href="/pet">
                        <div className=" text-2xl text-gray-600 px-5">
                            <i className="fa fa-reply" aria-hidden="true"></i>
                        </div>
                    </Link>
                    <div className="text-xl font-semibold">
                       SHOE MINT
                    </div>
                    <div>
                        <div className="text-2xl text-gray-600 px-5">
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl relative px-4 py-10   mx-auto ">
                    <div className="flex justify-between mt-10">
                    <div className=" rounded-2xl w-7/12  text-center border border-gray-500 border-2 border-b-4 border-r-4">
                        <div className=" px-4  border-gray-500">
                            <div className="flex justify-center items-center">
                                <div className={classNames(PetStyle.Uncommon,'rounded-b-xl text-sm w-5/6 ')}>
                                    #1234
                                </div>
                            </div>
                            <img className="mx-auto   py-3" src="1.png" alt=""/>
                            <div className="flex justify-between text-sm  font-semibold pb-2">
                                <div>
                                    Mint:0
                                </div>
                                <div>
                                    Lv 25
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="flex items-center mx-5">
                            <i className="fa fa-plus" aria-hidden="true"></i>
                        </div>
                        <div className=" rounded-2xl  w-7/12   text-center border border-gray-500 border-2 border-b-4 border-r-4">
                            <div className=" px-4  border-gray-500">
                                <div className="flex justify-center items-center">
                                    <div className={classNames(PetStyle.Uncommon,'rounded-b-xl text-sm w-5/6 ')}>
                                        #1234
                                    </div>
                                </div>
                                <img className="mx-auto  py-3" src="1.png" alt=""/>
                                <div className="flex justify-between text-sm  font-semibold pb-2">
                                    <div>
                                        Mint:0
                                    </div>
                                    <div>
                                        Lv 5
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between px-4 py-3  mt-20 rounded-xl  border-gray-500 border-2 border-b-4 border-r-4">
                        <div className="text-gray-500 text-sm">
                            Token consumption
                        </div>
                        <div className="text-sm">
                            240 GST + 240 GMT
                        </div>
                    </div>
                    <div className="flex justify-center mt-20">
                        <button
                            type="button"
                            className="w-36 flex mt-5  justify-center rounded-full border border-gray-600 border-b-4 border-r-4  shadow-sm px-4 py-2 bg-blue-300 text-base font-medium text-white "
                        >
                            Mint
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mint
