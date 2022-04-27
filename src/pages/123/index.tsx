import React from 'react'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Test = () =>{

    return (
        <div className="relative pt-4">
            <div className="absolute inset-x-0 bottom-0    " />
            <div className=" mx-auto  ">
                <div className="max-w-7xl relative px-8 py-10   mx-auto ">
                  <div>
                      border border-2 border-b-4 border-r-4
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Test
