import React from 'react'

const Home = () =>{

    const img = [
        {
            img:"data:image/png;base64,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"
        },
        {
            img:"data:image/png;base64,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"
        },
    ]
    const login = () =>{
        window.location.replace('/login')
    }
    return (
        <div className="relative pt-16">
            <div className="absolute inset-x-0 bottom-0    " />
            <div className="absolute inset-0">
                <img
                    className="h-screen w-full mx-auto"
                    src="https://cdn.discordapp.com/attachments/876498266550853642/984028870367903754/f37ee4a219518981.png"
                    alt="People working on laptops"
                />
            </div>
            <div className=" mx-auto  ">
                    <div className="max-w-7xl relative px-12 pt-72  mx-auto ">

                            <div className="flex  justify-center pt-96">
                                <button onClick={login} className="rounded-xl w-56 px-5 py-2 bg-white">
                                   Email login
                                </button>
                            </div>
                        <div className="flex justify-between">
                            {img.map((item=>(
                                <img className="w-12 opacity-10 rounded-full transition duration-1000 transform hover:-translate-y-48 hover:scale-125 hover:opacity-100" key={item.img} src={item.img} alt=""/>
                            )))}

                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Home

