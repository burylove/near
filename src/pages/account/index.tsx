import Link from 'next/link'
import React, { useState } from 'react'
import {StarIcon} from "@heroicons/react/solid";
import { Switch } from '@headlessui/react'
import {useAtom} from "jotai";
import {PeopleAvatar, PeopleEmail, PeopleName} from "../../jotai";



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Account = () =>{
    const [enabled, setEnabled] = useState(false)
    const [name,setName] = useAtom(PeopleName)
    const[email,setEmail] = useAtom(PeopleEmail)
    const[avatar,setAvatar] = useAtom(PeopleAvatar)
    const  info={
        credit: 4
    }

    return (
        <div className="relative ">
            <div className="absolute inset-x-0 bottom-0    " />
            <div className=" mx-auto  ">
                <Link href="/main">
                    <div className="fixed z-20 inset-x-0 text-2xl text-gray-600 px-5">
                        <i className="fa fa-reply" aria-hidden="true"></i>
                    </div>
                </Link>
                <div className="max-w-7xl relative px-8 py-5  mx-auto ">
                    <div className="mt-10">
                        <div className=" flex  justify-between items-center">
                            <div className="flex items-center">
                                <img className="w-14 rounded-full" src={avatar} alt=""/>

                                <div className="text-left text-sm  ml-2">
                                    <div className="font-semibold">
                                        {name}
                                    </div>
                                    <div className="text-gray-400 ">
                                        {email}
                                    </div>
                                </div>
                            </div>
                            <div className="text-gray-500 text-xl">
                                <Link href="/account/info">
                                <i className="fa fa-chevron-right " aria-hidden="true"></i>
                                </Link>
                            </div>
                        </div>

                        <div className=" flex  justify-between items-center mt-10">
                            <div className="flex items-center ">
                                <div className="text-left   ml-2">
                                    <div className="font-semibold">
                                       Activation code
                                    </div>
                                </div>
                            </div>
                            <div className="text-gray-500 text-xl flex items-center">
                                <div className="mr-4  text-base text-black font-semibold">
                                    1
                                </div>
                                <Link href="/account/activation">
                                <i className="fa fa-chevron-right " aria-hidden="true"></i>
                                </Link>
                            </div>
                        </div>

                        <div className=" flex  justify-between items-center mt-10">
                            <div className="flex items-center ">
                                <div className="text-left   ml-2">
                                    <div className="font-semibold">
                                        Total Achievement
                                    </div>
                                </div>
                            </div>
                            <div className="text-gray-500 text-xl flex items-center">
                                <div className="mr-4  text-base text-black font-semibold">
                                    20
                                </div>
                                <i className="fa fa-chevron-right " aria-hidden="true"></i>
                            </div>
                        </div>

                        <div className=" flex  justify-between items-center mt-10">
                            <div className="flex items-center ">
                                <div className="text-left   ml-2">
                                    <div className="font-semibold">
                                       Credit
                                    </div>
                                </div>
                            </div>
                            <div className="text-gray-500 text-xl flex items-center">
                                {[0, 1, 2, 3, 4].map((rating) => (
                                    <StarIcon
                                        key={rating}
                                        className={classNames(
                                            info.credit > rating ? 'text-yellow-400' : 'text-gray-200',
                                            'h-5 w-5 flex-shrink-0'
                                        )}
                                        aria-hidden="true"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className=" flex  justify-between items-center mt-10">
                        <div className="flex items-center ">
                            <div className="text-left   ml-2">
                                <div className="font-semibold">
                                   Work Time
                                </div>
                            </div>
                        </div>
                        <div className="text-gray-500 text-xl flex items-center">
                            <div className="border  w-48 h-5 rounded-full">
                                <div className="w-2/4 h-5 rounded-full bg-blue-400">

                                </div>
                                <div className="-mt-5 text-sm text-black  ml-2 ">
                                    1/23
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className=" flex  justify-between items-center mt-10">
                        <div className="flex items-center ">
                            <div className="text-left   ml-2">
                                <div className="font-semibold">
                                    Questions Times
                                </div>
                            </div>
                        </div>
                        <div className="text-gray-500 text-xl flex items-center">
                            <div className="mr-4 text-base text-black font-semibold">
                              2
                            </div>
                        </div>
                    </div>

                    <div className=" flex  justify-between items-center mt-10">
                        <div className="flex items-center ">
                            <div className="text-left   ml-2">
                                <div className="font-semibold">
                                    Multi-Chain Switch
                                </div>
                            </div>
                        </div>
                        <div className="text-gray-500 text-xl flex items-center">
                            <div className="mr-4  text-base text-black font-semibold">
                               NEAR
                            </div>
                            <i className="fa fa-chevron-right " aria-hidden="true"></i>
                        </div>
                    </div>

                    <div className=" flex  justify-between items-center mt-10">
                        <div className="flex items-center ">
                            <div className="text-left   ml-2">
                                <div className="font-semibold">
                                    Sound
                                </div>
                            </div>
                        </div>
                        <div className="text-gray-500 text-xl flex items-center">
                            <Switch
                                checked={enabled}
                                onChange={setEnabled}
                                className="flex-shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer "
                            >
                                <span className="sr-only">Use setting</span>
                                <span aria-hidden="true" className="pointer-events-none absolute bg-white w-full h-full rounded-md" />
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        enabled ? 'bg-indigo-600' : 'bg-gray-200',
                                        'pointer-events-none absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200'
                                    )}
                                />
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        enabled ? 'translate-x-5' : 'translate-x-0',
                                        'pointer-events-none absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-200'
                                    )}
                                />
                            </Switch>
                        </div>
                    </div>


                    <div className=" flex  justify-between items-center mt-10">
                        <div className="flex items-center ">
                            <div className="text-left   ml-2">
                                <div className="font-semibold">
                                   Version
                                </div>
                            </div>
                        </div>
                        <div className="text-gray-500 text-xl flex items-center">
                            <div className="mr-4  text-base text-black font-semibold">
                               0.0.1
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account
