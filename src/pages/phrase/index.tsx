import React from 'react'
import {useAtom} from "jotai";
import {SeedPhrase} from "../../jotai";
import Link from 'next/link';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Phrase = () =>{
    const  [seedPhrase,setSeedPhrase] = useAtom(SeedPhrase)
    const phrase = seedPhrase.trim().split(" ")
    console.log(phrase)

    return (
        <div className="relative">
            <div className="absolute inset-x-0 bottom-0"/>
            <div className=" mx-auto  ">
                <div className="max-w-7xl relative px-8 py-10   mx-auto ">
                    <div>
                        <div className="flex justify-center text-2xl font-semibold">NEW WALLET</div>
                        <div className="flex mt-10 ">
                            <div className="border py-8 px-4 rounded-2xl border-black text-sm  text-center mx-auto">
                                <div className="text-red-400">
                                    Don't risk losing your funds. Protect your wallet by
                                    saving your Seed Phrase in a place you trust.

                                </div>
                                <div className="my-2 text-red-500  font-semibold">

                                    It's the only way to recover your wallet if you get
                                    locked out of the app or get a new device.
                                </div>
                                <div className="mt-10">
                                    {phrase.map((l,m)=>
                                        <div key={l} className=" flex  justify-center  mt-5">
                                            <div className="flex w-20">
                                            <div className="mr-5 text-gray-400">
                                                {m+1}
                                            </div>
                                            <div className="text-black font-semibold">
                                            {l}
                                            </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-10 ">
                            <Link href="/phrase/verify">
                            <a className="w-10/12 flex mt-10  justify-center rounded-full border border-transparent shadow-sm px-4 py-2 bg-blue-300 text-base font-medium text-white ">
                                I HAVE WRITTEN DOWN
                            </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Phrase
