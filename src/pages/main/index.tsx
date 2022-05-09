import React, {useEffect, useState} from 'react'
import Wallet from "../../components/wallet";
import {useAtom} from "jotai";
import {NearAccount, PeopleAvatar, pet_info, PetList} from "../../jotai";
import Navigation from "../../components/navigation";
import Link from 'next/link';
import Header from "../../components/header";
import { Transition } from '@headlessui/react';
import axios from "axios";
import {useRouter} from "next/router";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Main = () =>{
    const info = [
        {
            number:"1",
            img:"https://cdn.discordapp.com/attachments/876498266550853642/969892589354512394/72fb26297978255e.png",
            lvl:"5",
        },
        {
            number:"2",
            img:"https://cdn.discordapp.com/attachments/876498266550853642/969892589669072926/2b589afe10e09b84.png",
            lvl:"10",
        },
        {
            number:"3",
            img:"/1.png",
            lvl:"15",
        },

    ]
    const router = useRouter()
    // const [Pet,setPetList] = useAtom(PetList)
    const [Pet,setPetList] = useState(info)
    const [learning,setLearning] = useState(false)
    const [clickNmu,SetClickNmu]  = useState(0)
    const [pet,setPet] = useState(Pet[clickNmu])
    // const [pet,setPet] = useAtom(pet_info)
    const [near_address,] =useAtom(NearAccount)

    // useEffect(()=>{
    //     if (router.isReady){
    //         const fetchUserBounty = async () => {
    //             // console.log(near_address)
    //             const data= await axios.get("http://127.0.0.1:7001/api/near/user/pet/all",{
    //                 params:{
    //                     near_address:'zombies.testnet'
    //                 }})
    //             // console.log(data.data)
    //             setPetList(data.data)
    //             // setPet(data.data)
    //         }
    //         fetchUserBounty()
    //     }
    // },[router.isReady])
    let new_clickNum
    const right = () => {
            new_clickNum = clickNmu + 1
            if (new_clickNum < Pet.length) {
                SetClickNmu(new_clickNum)
                    setPet(Pet[new_clickNum])
            }else{
                SetClickNmu(0)
                setPet(Pet[0])
            }

    }
    const left = () => {
            if(clickNmu == 0 ){
                SetClickNmu(Pet.length-1)
                setPet(Pet[Pet.length-1])
            }else {
                new_clickNum = clickNmu - 1
                if (new_clickNum < Pet.length) {
                    SetClickNmu(new_clickNum)
                    setPet(Pet[new_clickNum])
                }else{
                    SetClickNmu(0)
                    setPet(Pet[0])
                }
            }
    }

    const learn =()=>{
        setLearning(true)
    }
    if (Pet.length != 0){
        // console.log(pet)
        return (
            <div className="relative">
                <div className="absolute inset-x-0 bottom-0    " />
                <div className=" mx-auto  ">
                    <div className="absolute inset-0">
                        <img
                            className="h-screen w-full mx-auto"
                            src="https://cdn.discordapp.com/attachments/876498266550853642/969529054967529522/5.png"
                            alt="People working on laptops"
                        />
                    </div>
                    <Header/>
                    <div className="max-w-7xl relative px-8  pt-20 pb-12 max-h-screen    mx-auto rounded-b-3xl ">
                        <div>

                            <Transition
                                show={true}
                                enter="transition-opacity ease-linear duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition-opacity ease-linear duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className=" border-2  border-gray-400  bg-white rounded-2xl border-b-4 border-r-4">
                                    <div className="">
                                    <div className= {learning?"absolute w-20   animate-pulse transform  -rotate-45 text-blue-500 font-semibold":"hidden"}>
                                        Learning...
                                    </div>
                                    <div className="text-center mt-4 mb-10">
                                        #{pet.number}
                                    </div>
                                    </div>
                                    <div className="flex px-4 items-center text-2xl h-56 text-gray-400">
                                        <div className="">
                                            <button onClick={left}>
                                                <i className="fa fa-arrow-left" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                        <Link href={`/pet/${pet.number}`}>
                                            <img className="w-36 mx-auto" src={pet.img} alt=""/>
                                        </Link>
                                        <div>
                                            <button onClick={right}>
                                                <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex justify-between px-4 mt-16 mb-3">
                                        <div className="rounded-full border border-gray-400 w-20 h-5">
                                        </div>
                                        <div>
                                            LV{pet.lvl}
                                        </div>
                                        <div className="rounded-full border border-gray-400 w-20 h-5">
                                        </div>
                                    </div>
                                </div>
                            </Transition>
                        </div>

                        <div className="mt-5 flex justify-between">
                            <div className="border-2 w-16  rounded-lg  border-gray-400">

                            </div>
                            <div className="border-2 w-16 h-16 rounded-lg  border-gray-400">

                            </div>
                            <div className="border-2 w-16 h-16 rounded-lg  border-gray-400">

                            </div>
                            <div className="border-2 w-16 h-16 rounded-lg  border-gray-400">

                            </div>
                        </div>
                        <div className="flex justify-between mt-10 text-3xl text-blue-500 ">
                            <button>
                                <i className="fa fa-gift" aria-hidden="true"></i>
                            </button>
                            <button>
                                <i className="fa fa-question-circle-o" aria-hidden="true"></i>
                            </button>
                        </div>
                        <div className="flex justify-center mt-10 items-center ">
                            <button className="" onClick={learn}>
                                <img className="w-32" src="https://cdn.discordapp.com/attachments/876498266550853642/969501553935405076/LEARN.png" alt=""/>
                            </button>
                            <div>
                                <Link href="/answer">
                                    <div className="">
                                        <img className="w-32" src="https://cdn.discordapp.com/attachments/876498266550853642/969501554119933962/REVIEW.png" alt=""/>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="text-xs mt-2 flex justify-end px-20">
                            当前剩余答题次数 3
                        </div>
                    </div>
                    <Navigation/>
                </div>
            </div>
        )
    }else{
        return (
            <div className="relative">
                <div className="absolute inset-x-0 bottom-0    " />
                <div className=" mx-auto  ">
                    <div className="absolute inset-0">
                        <img
                            className="h-screen w-full mx-auto"
                            src="https://cdn.discordapp.com/attachments/876498266550853642/969529054967529522/5.png"
                            alt="People working on laptops"
                        />
                    </div>
                    <Header/>
                    <div className="max-w-7xl relative px-8 pt-20 pb-7 max-h-screen    mx-auto rounded-b-3xl ">
                        <div>
                            <Transition
                                show={true}
                                enter="transition-opacity ease-linear duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition-opacity ease-linear duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="border-2 border-gray-400 bg-white rounded-2xl border-b-4 border-r-4">
                                    <div className="text-center mt-4 mb-10">
                                        #{pet.number}
                                    </div>
                                    <div className="flex px-4 items-center text-2xl h-56 text-gray-400">
                                        <div className="">
                                            <button onClick={left}>
                                                <i className="fa fa-arrow-left" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                        <Link href="/bag/detail">
                                            <img className="w-36 mx-auto" src={pet.img} alt=""/>
                                        </Link>
                                        <div>
                                            <button onClick={right}>
                                                <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex justify-between px-4 mt-16 mb-3">
                                        <div className="rounded-full border border-gray-400 w-20 h-5">
                                        </div>
                                        <div>
                                            LV{pet.lvl}
                                        </div>
                                        <div className="rounded-full border border-gray-400 w-20 h-5">
                                        </div>
                                    </div>
                                </div>
                            </Transition>
                        </div>

                        <div className="mt-5 flex justify-between">
                            <div className="border-2 w-16  rounded-lg  border-gray-400">

                            </div>
                            <div className="border-2 w-16 h-16 rounded-lg  border-gray-400">

                            </div>
                            <div className="border-2 w-16 h-16 rounded-lg  border-gray-400">

                            </div>
                            <div className="border-2 w-16 h-16 rounded-lg  border-gray-400">

                            </div>
                        </div>
                        <div className="flex justify-between mt-10 text-3xl text-blue-500 ">
                            <button>
                                <i className="fa fa-gift" aria-hidden="true"></i>
                            </button>
                            <button>
                                <i className="fa fa-question-circle-o" aria-hidden="true"></i>
                            </button>
                        </div>
                        <div className="flex justify-center mt-10 items-center ">
                            <div className="">
                                <img className="w-32" src="https://cdn.discordapp.com/attachments/876498266550853642/969501553935405076/LEARN.png" alt=""/>
                            </div>
                            <div>
                                <Link href="/answer">
                                    <div className="">
                                        <img className="w-32" src="https://cdn.discordapp.com/attachments/876498266550853642/969501554119933962/REVIEW.png" alt=""/>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="text-xs mt-2 flex justify-end px-20">
                            当前剩余答题次数 2
                        </div>
                    </div>
                    <Navigation/>
                </div>
            </div>
        )
    }
}

export default Main
