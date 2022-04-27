import React, {Fragment, useState} from 'react'
import {Dialog, Transition} from "@headlessui/react";
import {useAtom} from "jotai";
import {OpenName} from "../../jotai";
import Link from 'next/link';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Answer = () =>{
    const [open,setOpen] = useState(false)

    return (
        <div className="relative pt-4">
            <div className="absolute inset-x-0 bottom-0    " />
            <div className=" mx-auto  ">
                <div className="max-w-7xl relative  py-10   mx-auto ">
                    <div className="h-big overflow-auto px-8 border-gray-500  border-t-2 border-b">
                        Fantom utilizes the Ethereum Virtual Machine (EVM) in the backend. Smart contracts are written in Solidity and they can function on Fantom as they do on Ethereum.
                        To deploy a smart contract, you send a Fantom transaction containing your bytecode without specifying any recipients.
                        After the contract is deployed, it will be available to all users of the Fantom network.
                        Smart contracts have a Fantom address like other accounts.
                        Requirements
                        Bytecode (compiled code) of your smart contract
                        FTM for gas costs
                        Deployment script/plugin
                        Access to a Fantom node, either by running your own node or API access to a node.
                        Additional resources
                        Compiling
                        Deploying a smart contract on Ethereum
                        Tools
                        Truffle: Development environment, testing framework and asset pipeline for blockchains using the EVM
                        Remix: IDE that’s used to write, compile, debug & deploy Solidity code ll in your browser.
                        Solidity: Solidity is an object-oriented, high-level language for implementing smart contracts.
                        OpenZeppelin: OpenZeppelin Contracts helps you minimize risk by using battle-tested libraries of smart contracts for Ethereum and other blockchains.</div>
                    <div className="flex justify-center mt-8">
                        <button onClick={()=>{setOpen(true)}}  className="py-1.5 px-8 w-6/12  border border-black rounded-full">
                            Start
                        </button>
                    </div>
                </div>
                <Transition.Root show={open} as={Fragment}>
                    <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto "  onClose={setOpen}>
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
                                        <div className="flex justify-end text-xl w-80"><button onClick={()=>{setOpen(false)}} >
                                            <i className="fa fa-times" aria-hidden="true"></i>
                                        </button></div>
                                        <div className=" text-center mt-2 ">
                                            <div className="font-semibold">
                                                Are you sure the inspection is done?
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 ">
                                        <div className="flex justify-between">
                                            <button
                                                onClick={()=>{setOpen(false)}}
                                                type="button"
                                                className="w-36 flex mt-5  justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-300 text-base font-medium text-white "
                                            >
                                                Cancel
                                            </button>
                                            <Link href="/answer/questions">
                                            <div className="w-36 flex mt-5  justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-300 text-base font-medium text-white ">
                                                Start
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

export default Answer
