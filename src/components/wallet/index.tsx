import React, {useEffect} from 'react'
import {useAtom} from "jotai";
import {GMTToken, GSTToken, NearAccount, NEARToken} from "../../jotai";
import Link from "next/link";
import axios from "axios";
import {formatDecimal} from "../../utils";
const Wallet = () =>{

   const [GSTtoken,setGSTtoken] = useAtom(GSTToken)
   const [GMTtoken,setGMTtoken] = useAtom(GMTToken)
   const [NEARtoken,setNEARtoken] = useAtom(NEARToken)
   const [near_address,setNear_hex_account] =useAtom(NearAccount)
    useEffect(() =>{
        const fetchUserBounty = async () => {
            console.log(near_address)
            const data= await axios.get("https://api.burylove.org/api/near/query/near_internal_account_balance",{
                params:{
                    near_address
                }
                })
            const near_balance = Number(formatDecimal(data.data,4))
            setNEARtoken(near_balance)
        }
       fetchUserBounty()
    },[])
    return (
        <div className="flex h-10">
        <div className="flex   justify-between border border-gray-400 bg-white px-2 py-1.5 rounded-full pr-10">
            <div className="flex items-center pr-2">
                <img className="rounded-full w-6"
                     src="https://s2.coinmarketcap.com/static/img/coins/64x64/16352.png" alt=""/>
                <div className="pl-1 max-w-md truncate text-xs">
                {GSTtoken}</div>
            </div>
            <div className="flex items-center pr-2">
                <img className="rounded-full w-6"
                     src="https://s2.coinmarketcap.com/static/img/coins/200x200/18069.png" alt=""/>
               <div className="pl-1 truncate text-xs">
                {GMTtoken}
               </div>
            </div>
            <div className="flex items-center pr-2">
                <img className="rounded-full w-6"
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1onspODOPj_-mr_lbWFWTt6SFO69mMdG6eT-tnkCiaBy97s2i-1KauNPVv4nN_L1bYkA&usqp=CAU" alt=""/>
              <div className="pl-1 truncate text-xs">
                {NEARtoken}
              </div>
            </div>
        </div>
            <div className="flex items-center -ml-10">
                <Link href="/wallet">
                    <a>
                <img className="rounded-full w-10   border "
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXkvtQAreQJ8OmKHJ9UvXI5ELYj5ayETZvwQ&usqp=CAU" alt=""/>
                    </a></Link></div>
        </div>
    )
}

export default Wallet
