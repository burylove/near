import React, {Fragment, useState} from 'react'
import {Dialog, Transition} from "@headlessui/react";
import Link from "next/link";
import {useAtom} from "jotai";
import {GSTToken} from "../../../jotai";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Questions = () =>{
    const [openSuccess,setOpenSuccess] = useState(false)
    const [openError,setOpenError] = useState(false)
    const [openEnd,setOpenEnd] = useState(false)
    const [GSTtoken,setGSTtoken] = useAtom(GSTToken)

    const questions ={
        question:" 什么是区块链",
        options:[
            {
                option:"大铁锤",
            },
            {
                option:"一种分布式数据库",
            },
            {
                option:"一种思想",
            },
            {
                option:"我是嫩爹",
            },
        ],
    }

    const success = ()=>{
        setOpenSuccess(true)
        const token = GSTtoken +11
        setGSTtoken(token)
    }

    return (
        <div className="relative pt-4">
            <div className="absolute inset-x-0 bottom-0    " />
            <div className=" mx-auto  ">
                <div className="max-w-7xl relative  py-10   mx-auto ">
                    <div>
                        <div className="h-72 border-t border-b border-gray-500 px-8 flex items-center justify-center">
                            {questions.question}
                        </div>
                        <div className="flex justify-between px-8 h-20 items-center text-sm">
                            <div>
                                剩余答题次数 2 次
                            </div>
                            <div className="flex items-center">
                                当前此题剩余 30s
                                <div className="text-gray-600 text-xl ml-1">
                                    <i className="fa fa-clock-o  " aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                        <div className="flex grid grid-cols-2 mt-2 border-t border-b border-gray-500">
                            {questions.options.map((item=>(
                                <div key={item.option} onClick={success} className="flex items-center justify-center text-sm border-gray-500 border-r border-b h-32 ">
                                    {item.option}
                                </div>
                            )))}
                        </div>
                        <div className="flex justify-center  ">
                            <button onClick={()=>{setOpenEnd(true)}}>
                                <div className="w-36 flex mt-5  justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-300 text-base font-medium text-white ">
                                    End
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <Transition.Root show={openSuccess} as={Fragment}>
                    <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto "  onClose={()=>{return  false}}>
                        <div className="flex items-center justify-center min-h-screen -mt-20  px-4  text-center ">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                            </Transition.Child>

                            {/* This element is to trick the browser into centering the modal contents. */}
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;
              </span>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                                    <div>

                                        <div className=" text-center mt-2 w-80">
                                            <div className="font-semibold">
                                                Congratulations！ 🎉
                                            </div>
                                        </div>
                                        <div className=" flex items-center justify-center my-10">
                                            <img className="w-10" src="https://s2.coinmarketcap.com/static/img/coins/64x64/16352.png" alt=""/>
                                            <div className="ml-3 flex">
                                                +
                                                <div className="ml-1 text-red-600 text-xl font-semibold">
                                                    12.94
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 ">
                                        <div className="flex justify-center  ">
                                            <button onClick={()=>{location.reload()}}>
                                                <div className="w-36 flex   justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-300 text-base font-medium text-white ">
                                                    Confirm
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>
                <Transition.Root show={openError} as={Fragment}>
                    <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto "  onClose={()=>{return  false}}>
                        <div className="flex items-center justify-center min-h-screen -mt-20  px-4  text-center ">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                            </Transition.Child>

                            {/* This element is to trick the browser into centering the modal contents. */}
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;
              </span>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                                    <div>

                                        <div className=" text-center mt-2 w-80">
                                            <div className="font-semibold">
                                                很抱歉回答错误 答案是：xxx
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-10 ">
                                        <div className="flex justify-center  ">
                                            <button onClick={()=>{location.reload()}}>
                                                <div className="w-36 flex   justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-300 text-base font-medium text-white ">
                                                    Confirm
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>
                <Transition.Root show={openEnd} as={Fragment}>
                    <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto "  onClose={()=>{return  false}}>
                        <div className="flex items-center justify-center min-h-screen -mt-20  px-4  text-center ">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                            </Transition.Child>

                            {/* This element is to trick the browser into centering the modal contents. */}
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;
              </span>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                                    <div>
                                        <div className="flex justify-end text-xl w-72"><button onClick={()=>{setOpenEnd(false)}} >
                                            <i className="fa fa-times" aria-hidden="true"></i>
                                        </button></div>
                                        <div className=" text-center mt-2 w-80">
                                            <div className="font-semibold">
                                                本次已完成4题 还有0题未答
                                            </div>
                                            <div className="font-semibold">
                                               总共获得 24 个GST
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 ">
                                        <div className="flex justify-between  ">
                                            <button onClick={()=>{setOpenEnd(false)}}>
                                                <div className="w-36 flex mt-5  justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-500 text-base font-medium text-white ">
                                                    Cancel
                                                </div>
                                            </button>
                                            <Link href="/main">
                                                <div className="w-36 flex mt-5  justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white ">
                                                    END
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>
            </div>
        </div>
    )
}

export default Questions
