import React, {useEffect, useState} from 'react'
import axios from "axios";
import {useAtom} from "jotai";
import {NearAccount} from "../../jotai";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Test = () =>{
    const [near_address,] =useAtom(NearAccount)
    const [pet,setPet] = useState([])

    useEffect(()=>{
        const fetchUserBounty = async () => {
            console.log(near_address)
            const data= await axios.get("https://api.burylove.org/api/near/user/pet/all",{
                params:{
                    near_address:'zombies.testnet'
                }}
            )
            setPet(data.data)
        }
        fetchUserBounty()
    },[])
    console.log("qq"+pet)

    return (
        <div className="relative">
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
