import React, {useEffect, useState} from 'react'
import {useRouter} from "next/router";
import Link from "next/link";
import {Constant} from "../../../constant";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const ToExternal = () =>{
    const router = useRouter()
    const [tokenName,setTokenName]=useState("")
    const tokenInfo = Constant()
    useEffect(()=>{
        if(router.isReady){
            const name = router.query.slug[0]
            setTokenName(name)
        }

    },[router.isReady])
    return (
        <div className="relative">
            <div className="absolute inset-x-0 bottom-0    " />
            <div className=" mx-auto  ">
                <div className="fixed z-20 inset-x-0 flex justify-between">
                    <Link href="/wallet/external">
                        <div className="text-2xl text-gray-600 px-5">
                            <i className="fa fa-reply" aria-hidden="true"></i>
                        </div>
                    </Link>
                    <div className="text-xl font-semibold">
                      SEND TO
                    </div>
                    <div>
                        <div className=" text-2xl  text-gray-600 px-8">

                        </div>
                    </div>
                </div>
                <div className="max-w-7xl relative px-8 py-10   mx-auto ">
                    <div>
                        <div className="flex justify-center mt-3">
                        <img className="w-12 rounded-full" src={classNames(tokenInfo.TokenImg[tokenName])} alt=""/>
                        </div>

                        <div className="mt-10 text-sm text-gray-500 mb-2">
                            To Address
                        </div>
                        <div className="flex">
                            <input type="text"
                                   className="text-xs md:text-sm   rounded-lg p-2 py-3 w-full border-gray-700 border-2 border-r-4 border-b-4  transition duration-300  outline-none"
                                   id="address"
                            />
                           </div>

                        <div className="mt-10 text-sm text-gray-500 mb-2">
                            Amount
                        </div>
                        <div className="flex">
                            <input type="text"
                                   className="text-xs md:text-sm   rounded-lg p-2 py-3 w-full border-gray-700 border-2 border-r-4 border-b-4  transition duration-300  outline-none"
                                   id="amount"
                            />
                            <div className="-ml-20 text-sm flex items-center text-yellow-400">
                                <div className="mr-4 text-black font-semibold">
                                    {tokenName}
                                </div>
                               All
                            </div></div>
                        <div className="flex text-xs mt-1">
                            Balance:
                            <div className="ml-0.5 flex">
                                {classNames(tokenInfo.TokenData[tokenName])}
                                <div className="ml-0.5">{tokenName}</div>
                            </div>
                        </div>

                        <div className="bg-gray-100 p-3 rounded-2xl mt-8 text-sm">
                            Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
                        </div>
                        <div className="flex justify-center mt-10 ">
                            <button className="w-10/12 flex mt-10  justify-center rounded-full border border-transparent shadow-sm px-4 py-2 bg-blue-300 text-base font-medium text-white ">
                               CONFIRM
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToExternal
