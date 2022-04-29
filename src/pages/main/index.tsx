import React from 'react'
import Wallet from "../../components/wallet";
import {useAtom} from "jotai";
import {PeopleAvatar} from "../../jotai";
import Navigation from "../../components/navigation";
import Link from 'next/link';
import Header from "../../components/header";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Main = () =>{

    return (
        <div className="relative">
            <div className="absolute inset-x-0 bottom-0    " />
            <div className=" mx-auto  ">
                <div className="absolute inset-0">
                    <img
                        className="h-screen w-full mx-auto"
                        src="https://cdn.discordapp.com/attachments/876498266550853642/969529054967529522/5.png"
                        alt="People working on laptops"
                    />
                </div>
               <Header/>
                <div className="max-w-7xl relative px-8 pt-20 pb-7 max-h-screen    mx-auto rounded-b-3xl ">
                    <div>
                        <div className="border-2 border-gray-400 bg-white rounded-2xl border-b-4 border-r-4">
                           <div className="text-center mt-4 mb-10">
                               #1021392</div>
                            <div className="flex px-4 items-center text-2xl h-56 text-gray-400">
                                <div className="">
                                    <button>
                                    <i className="fa fa-arrow-left" aria-hidden="true"></i>
                                    </button>
                                </div>
                                <Link href="/bag/detail">
                                <img className="w-36 mx-auto" src="/1.png" alt=""/>
                                </Link>
                                <div>
                                    <button>
                                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-between px-4 mt-16 mb-3">
                                <div className="rounded-full border border-gray-400 w-20 h-5">
                                </div>
                                <div>
                                    LV 1
                                </div>
                                <div className="rounded-full border border-gray-400 w-20 h-5">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 flex justify-between">
                        <div className="border-2 w-16  rounded-lg  border-gray-400">

                        </div>
                        <div className="border-2 w-16 h-16 rounded-lg  border-gray-400">

                        </div>
                        <div className="border-2 w-16 h-16 rounded-lg  border-gray-400">

                        </div>
                        <div className="border-2 w-16 h-16 rounded-lg  border-gray-400">

                        </div>
                    </div>
                    <div className="flex justify-between mt-10 text-3xl text-blue-500 ">
                        <button>
                            <i className="fa fa-gift" aria-hidden="true"></i>
                        </button>
                        <button>
                            <i className="fa fa-question-circle-o" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div className="flex justify-center mt-10 items-center ">
                        <div className="">
                            <img className="w-32" src="https://cdn.discordapp.com/attachments/876498266550853642/969501553935405076/LEARN.png" alt=""/>
                        </div>
                        <div>
                            <Link href="/answer">
                                <div className="">
                                    <img className="w-32" src="https://cdn.discordapp.com/attachments/876498266550853642/969501554119933962/REVIEW.png" alt=""/>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="text-xs mt-2 flex justify-end px-20">
                        当前剩余答题次数 2
                    </div>
                </div>


                    <Navigation/>

            </div>
        </div>
    )
}

export default Main
