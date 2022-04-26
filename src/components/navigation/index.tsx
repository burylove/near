import Link from 'next/link'
import React from 'react'

const Navigation = () =>{

    return (
            <div className=" fixed z-20 bottom-16 w-full px-8 mx-auto">

        <div className="flex justify-between w-full px-4 p-2 border-2 border-yellow-400 rounded-full">
            <Link href="/main">
                <a className="text-2xl ">
            <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                </a>
            </Link>

            <Link href="/bag">
                <a className="text-2xl">
                <i className="fa fa-cube" aria-hidden="true"></i>
                </a>
            </Link>

            <Link href="">
                <a className="text-2xl">
                <i className="fa fa-sort-amount-desc" aria-hidden="true"></i>
                </a>
        </Link>

            <Link href="/shop">
                <a className="text-2xl">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </a>
            </Link>
        </div>
                </div>
    )
}

export default Navigation
