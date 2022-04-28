import React from 'react'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Phrase = () =>{

    const phrase = [
        {
            id:"1",
            data:"phrase",
        },
        {
            id:"2",
            data:"phrase",
        },
        {
            id:"3",
            data:"phrase",
        },
        {
            id:"4",
            data:"phrase",
        },
        {
            id:"5",
            data:"phrase",
        },
        {
            id:"6",
            data:"phrase",
        },
        {
            id:"7",
            data:"phrase",
        },
        {
            id:"8",
            data:"phrase",
        },
        {
            id:"9",
            data:"phrase",
        },
        {
            id:"10",
            data:"phrase",
        }
    ]

    return (
        <div className="relative">
            <div className="absolute inset-x-0 bottom-0"/>
            <div className=" mx-auto  ">
                <div className="max-w-7xl relative px-8 py-10   mx-auto ">
                    <div>
                        <div className="flex justify-center text-2xl font-semibold">NEW WALLET</div>
                        <div className="flex mt-10">
                            <div className="border py-8 px-4 rounded-2xl border-black text-sm  text-center">
                                <div className="text-red-400">
                                    Don't risk losing your funds. Protect your wallet by
                                    saving your Seed Phrase in a place you trust.

                                </div>
                                <div className="my-2 text-red-500  font-semibold">
                                    It's the only way to recover your wallet if you get
                                    locked out of the app or get a new device.
                                </div>
                                <div className="mt-10">
                                {phrase.map((item=>(
                                    <div key={item.id} className=" flex items-center justify-center mt-5">
                                        <div className="mr-6 text-gray-400">
                                            {item.id}
                                        </div>
                                        <div className="font-semibold">
                                            {item.data}
                                        </div>
                                    </div>

                                )))}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-10 ">
                            <button className="w-10/12 flex mt-10  justify-center rounded-full border border-transparent shadow-sm px-4 py-2 bg-blue-300 text-base font-medium text-white ">
                                I HAVE WRITTEN DOWN
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Phrase
