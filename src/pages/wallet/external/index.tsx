import React, {Fragment, useState} from "react";
import Link from "next/link";
import {Listbox, Transition} from "@headlessui/react";
import {CheckIcon, SelectorIcon} from "@heroicons/react/solid";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const tokens = [
    {
        id: 1,
        name: 'GST',
        avatar: "https://s2.coinmarketcap.com/static/img/coins/64x64/16352.png",
    },
    {
        id: 2,
        name: 'GMT',
        avatar: "https://s2.coinmarketcap.com/static/img/coins/200x200/18069.png"
    },
    {
        id: 3,
        name: 'NEAR',
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1onspODOPj_-mr_lbWFWTt6SFO69mMdG6eT-tnkCiaBy97s2i-1KauNPVv4nN_L1bYkA&usqp=CAU",
    },
]
const ExternalInfo = () =>{
    const [selected, setSelected] = useState(tokens[2])
    const [token,setToken] = useState(444.24)
    const [tokenName,SetTokenName] = useState("NEAR")
    return(
        <>
            <div className="relative">
                <div className="absolute inset-x-0 bottom-0    " />
                <div className=" mx-auto  ">
                    <div className="max-w-7xl relative px-8 py-10   mx-auto ">
                        <div className="mt-5">
                            <div className="flex justify-center">
                                <Listbox value={selected} onChange={setSelected}>
                                    {({open}) => (
                                        <>
                                                 <div className="mt-1 relative">
                                                    <Listbox.Button className="relative  bg-white border  border-gray-500 rounded-full shadow-sm  pr-10  text-left cursor-default ">
                                          <span className="flex items-center">
                                            <span className="ml-3 block truncate">{selected.name}</span>
                                          </span>
                                          <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                            <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                                          </span>
                                        <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                        <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                      </span>
                                                </Listbox.Button>

                                                <Transition
                                                    show={open}
                                                    as={Fragment}
                                                    leave="transition ease-in duration-100"
                                                    leaveFrom="opacity-100"
                                                    leaveTo="opacity-0"
                                                >
                                                    <Listbox.Options
                                                        className="absolute z-10 mt-1 w-48  -ml-12 bg-white shadow-lg px-2 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto  ">
                                                        {tokens.map((token) => (
                                                            <Listbox.Option
                                                                key={token.id}
                                                                onClick={()=>{}}
                                                                className={({active}) =>
                                                                    classNames('cursor-default select-none relative border border-2 border-r-4 border-b-4  border-gray-500 rounded-xl my-2 py-2 pl-3 pr-9')}
                                                                value={token}>
                                                                {({selected, active}) => (
                                                                    <div className="flex items-center">
                                                                        <img src={token.avatar} alt="" className="flex-shrink-0 h-6 w-6 rounded-full"/>
                                                                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}>
                                                         {token.name}
                                                                       </span>
                                                                        {selected ? (
                                                                            <span className={classNames(active ? 'text-green-400' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4')}>
                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" /></span>) : null}</div>
                                                                )}
                                                            </Listbox.Option>
                                                        ))}
                                                    </Listbox.Options>
                                                </Transition>
                                            </div>
                                        </>
                                    )}
                                </Listbox>
                            </div>
                            <div className="flex justify-center mt-5 text-2xl font-semibold">
                                <div>
                                    {token}
                                </div>
                                <div className="ml-1">
                                    {tokenName}
                                </div>
                            </div>
                            <div className="flex justify-center mt-5">
                                <div className="w-6/12 px-4 text-center  py-0.5 border-gray-500 border border-2 border-b-4 border-r-4 rounded-full ">
                                    zombies.near
                                </div>
                            </div>

                            <div className="flex justify-between mt-10 px-12">
                                <div>
                                <div className="text-green-500 flex items-center  text-2xl px-4 py-3.5 border-gray-500   border-2 rounded-full">
                                    <i className="fa fa-download" aria-hidden="true"></i>
                                </div>
                                    <div className="text-xs text-center mt-1">
                                        Receive
                                    </div>
                                </div>

                                <div>
                                    <div className="text-green-500 flex items-center  text-2xl px-3.5 py-3.5  border-gray-500 border-2 rounded-full">
                                        <i className="fa fa-external-link" aria-hidden="true"></i>
                                    </div>
                                    <div className="text-xs text-center mt-1">
                                       Transfer
                                    </div>
                                </div>

                            </div>

                            <div className="mt-8 text-xl font-semibold flex items-center">
                                Wallet Account

                                <div className="ml-5 text-2xl text-gray-500">
                                    <button>
                                        <i className="fa fa-question-circle-o" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="mt-2 border-2 border-gray-500 rounded-xl  border-r-4 border-b-4">
                                <div className="flex justify-between px-4 py-2 items-center ">
                                    <div className="flex items-center">
                                        <div>
                                            <img className="rounded-full w-9"
                                                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1onspODOPj_-mr_lbWFWTt6SFO69mMdG6eT-tnkCiaBy97s2i-1KauNPVv4nN_L1bYkA&usqp=CAU" alt=""/>
                                        </div>
                                        <div className="ml-2 font-semibold">
                                            NEAR
                                        </div>
                                    </div>
                                    <div className="text-left">
                                        NEARtoken
                                    </div>
                                </div>
                                <div className="flex justify-between px-4 py-2 border-t border-b border-gray-500 items-center ">
                                    <div className="flex items-center">
                                        <div>
                                            <img className="rounded-full w-9"
                                                 src="https://s2.coinmarketcap.com/static/img/coins/64x64/16352.png" alt=""/>
                                        </div>
                                        <div className="ml-2 font-semibold">
                                            GST
                                        </div>
                                    </div>
                                    <div className="text-left">
                                        GSTtoken
                                    </div>
                                </div>
                                <div className="flex justify-between px-4 py-2  border-b border-gray-500   items-center ">
                                    <div className="flex items-center">
                                        <div>
                                            <img className="rounded-full w-9"
                                                 src="https://s2.coinmarketcap.com/static/img/coins/200x200/18069.png" alt=""/>
                                        </div>
                                        <div className="ml-2 font-semibold">
                                            GMT
                                        </div>
                                    </div>
                                    <div className="text-left">
                                        GMTtoken
                                    </div>
                                </div>
                                <div className="flex justify-between px-4 py-2 items-center ">
                                    <div className="flex items-center">
                                        <div>
                                            <img className="rounded-full w-9"
                                                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1onspODOPj_-mr_lbWFWTt6SFO69mMdG6eT-tnkCiaBy97s2i-1KauNPVv4nN_L1bYkA&usqp=CAU" alt=""/>
                                        </div>
                                        <div className="ml-2 font-semibold">
                                            USN
                                        </div>
                                    </div>
                                    <div className="text-left">
                                        NEARtoken
                                    </div>
                                </div>


                            </div>

                            <div className="mt-12 border-2 border-gray-500 rounded-xl  border-r-4 border-b-4">
                                <div className="flex justify-between px-4 py-2 items-center ">
                                    <div className="flex items-center">
                                        <div>
                                            <img className="rounded-full w-9"
                                                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1onspODOPj_-mr_lbWFWTt6SFO69mMdG6eT-tnkCiaBy97s2i-1KauNPVv4nN_L1bYkA&usqp=CAU" alt=""/>
                                        </div>
                                        <div className="ml-2 font-semibold">
                                            NEAR
                                        </div>
                                    </div>
                                    <div className="text-left">
                                        NEARtoken
                                    </div>
                                </div>
                                <div className="flex justify-between px-4 py-2 border-t border-b border-gray-500 items-center ">
                                    <div className="flex items-center">
                                        <div>
                                            <img className="rounded-full w-9"
                                                 src="https://s2.coinmarketcap.com/static/img/coins/64x64/16352.png" alt=""/>
                                        </div>
                                        <div className="ml-2 font-semibold">
                                            GST
                                        </div>
                                    </div>
                                    <div className="text-left">
                                        GSTtoken
                                    </div>
                                </div>
                                <div className="flex justify-between px-4 py-2  border-b border-gray-500   items-center ">
                                    <div className="flex items-center">
                                        <div>
                                            <img className="rounded-full w-9"
                                                 src="https://s2.coinmarketcap.com/static/img/coins/200x200/18069.png" alt=""/>
                                        </div>
                                        <div className="ml-2 font-semibold">
                                            GMT
                                        </div>
                                    </div>
                                    <div className="text-left">
                                        GMTtoken
                                    </div>
                                </div>
                                <div className="flex justify-between px-4 py-2 items-center ">
                                    <div className="flex items-center">
                                        <div>
                                            <img className="rounded-full w-9"
                                                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1onspODOPj_-mr_lbWFWTt6SFO69mMdG6eT-tnkCiaBy97s2i-1KauNPVv4nN_L1bYkA&usqp=CAU" alt=""/>
                                        </div>
                                        <div className="ml-2 font-semibold">
                                            USN
                                        </div>
                                    </div>
                                    <div className="text-left">
                                        NEARtoken
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const External = () =>{

    return (
        <div className="relative">
            <div className="absolute inset-x-0 bottom-0    " />
            <div className=" mx-auto  ">
                <div className="fixed z-20 inset-x-0 flex justify-between items-center">
                    <Link href="/main">
                        <div className="text-2xl text-gray-600 px-5">
                            <i className="fa fa-reply" aria-hidden="true"></i>
                        </div>
                    </Link>
                    <div className="flex justify-center items-center border border-gray-500 overflow-hidden rounded-full">
                        <Link href="/wallet">
                            <a className="bg-white text-black px-6 py-2">
                                Internal
                            </a>
                        </Link>
                        <Link href="/wallet/external">
                            <a className="bg-black text-white px-5 py-2">
                                External
                            </a>
                        </Link>
                    </div>
                    <div className="  text-2xl text-gray-600 px-5">
                        <i className="fa fa-cog " aria-hidden="true"></i>
                    </div>
                </div>
                <ExternalInfo/>
            </div>
        </div>
    )
}

export default External
