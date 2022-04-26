


const Activation = () =>{
    const send = () =>{
        window.location.replace('/main')
    }

    return (
        <div className="relative pt-16">
            <div className="absolute inset-x-0 bottom-0    " />
            <div className=" mx-auto  ">
                <div className="max-w-7xl relative px-12 py-16 h-screen   sm:px-6  mx-auto ">
                    <div className="mt-36 ">
                        <div className="flex justify-between">
                            <div>
                                <input type="text"
                                       className="  text-xs md:text-sm   rounded-lg p-2 py-4 w-full border-gray-700 border   focus:border-blue-500 transition duration-300  outline-none"
                                       placeholder="Email address"
                                       id="address"
                                />
                            </div>
                            <div>
                                <button onClick={send} className="py-3 px-8 border rounded-lg border-black">
                                    Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activation
