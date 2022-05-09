import React, {useEffect, useState} from 'react'
import Header from "../../components/header";
import { Tab } from '@headlessui/react';
import Navigation from "../../components/navigation";
import {useAtom} from "jotai";
import {NearAccount} from "../../jotai";
import axios from "axios";
import {formatDecimal} from "../../utils";
import {PetStyle} from "../../constant";
import {route} from "next/dist/server/router";
import router from 'next/router';
import Link from "next/link";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Pet = () =>{
    const [near_address,] =useAtom(NearAccount)
    const [pet,setPet] = useState([])

    useEffect(()=>{
        const fetchUserBounty = async () => {
            console.log(near_address)
            const data= await axios.get("https://api.burylove.org/api/ near/user/pet/all",{
                params:{
                    near_address
                }}
            )
            setPet(data.data)
            console.log(data)
        }

        fetchUserBounty()
    },[])


    return(
        <>
            <div className="grid grid-cols-2 gap-3 ">
                {pet.map((item=>(
                    <Link href={`/pet/${item.near_pet_index}`}  key={item.near_pet_index} >
                    <a className=" rounded-2xl  text-center border border-gray-500 border-2 border-b-4 border-r-4">
                        <div className=" px-4  border-gray-500">
                            <div className="flex justify-center items-center">
                            <div className={classNames(PetStyle[item.near_pet_type],'rounded-b-xl w-5/6 ')}>
                                #{item.near_pet_index}
                            </div>
                            </div>
                            <img className="mx-auto  py-3" src={item.near_pet_image_url} alt=""/>
                            <div className="flex justify-between text-sm px-4 font-semibold pb-2">
                                <div>
                                    Mint:{item.near_pet_birth_times}
                                </div>
                                <div>
                                    Lv {item.near_pet_level}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between p-2 px-3 items-center rounded-b-xl bg-gray-200">
                                <div className="flex  text-sm mr-2">
                                    <div>
                                        <i className="fa fa-arrow-circle-o-down text-indigo-400" aria-hidden="true"></i>
                                    </div>
                                    <div className="ml-0.5">
                                        {item.near_pet_health_value}
                                    </div>
                                </div>
                                <div className="flex  text-sm mr-2">
                                    <div>
                                        <i className="fa fa-arrow-circle-o-left text-yellow-300" aria-hidden="true"></i>
                                    </div>
                                    <div className="ml-0.5">
                                        {item.near_pet_intelligence_value}
                                    </div>
                                </div>
                                <div className="flex  text-sm mr-2">
                                    <div>
                                        <i className="fa fa-arrow-circle-o-right text-blue-400" aria-hidden="true"></i>
                                    </div>
                                    <div className="ml-0.5">
                                        {item.near_pet_charisma_value}
                                    </div>
                                </div>
                                <div className="flex  text-sm mr-2">
                                    <div>
                                        <i className="fa fa-arrow-circle-o-up text-green-400" aria-hidden="true"></i>
                                    </div>
                                    <div className="ml-0.5">
                                        {item.near_pet_lucky_value}
                                    </div>
                                </div>
                          </div>
                        </div>
                    </a>
                    </Link>
                )))}
            </div>
        </>
    )
}

const Eggs = () =>{
    const [near_address,] =useAtom(NearAccount)
    const [pet,setPet] = useState([])

    useEffect(()=>{
        const fetchUserBounty = async () => {
            console.log(near_address)
            const data= await axios.get("https://api.burylove.org/api/ near/user/pet_eggs/all",{
                params:{
                    near_address
                }}
            )
            setPet(data.data)
            console.log(data.data)
        }
        fetchUserBounty()
    },[])
    const open = async (e) =>{
        await axios.post("https://api.burylove.org/api/ near/user/open/pet_eggs",{
            near_address,
            near_pet_eggs_index:e
        })
        await location.reload()
    }
    return(
        <>
            <div className="grid grid-cols-2 gap-3">
                {pet.map((item=>(
                    <div key={item.near_pet_eggs_index} className=" rounded-2xl  text-center border border-gray-500 border-2 border-b-4 border-r-4">
                        <div className=" px-4  border-gray-500">
                            <div className="flex justify-center items-center">
                                <div className={classNames(PetStyle[item.near_pet_eggs_type],'rounded-b-xl w-5/6 ')}>
                                    #{item.near_pet_eggs_index}
                                </div>
                            </div>
                            <img className="mx-auto py-1  rounded-full w-24" src={item.near_pet_eggs_image_url} alt=""/>
                        </div>

                        <div>
                            <div className=" p-2 px-3 items-center rounded-b-xl bg-gray-200">
                                <button onClick={()=>{open(item.near_pet_eggs_index)}} className="px-2 py-0.5  border border-gray-500 border border-r-2 border-b-2 rounded-full text-sm ">
                                    OPEN
                                </button>

                            </div>

                        </div>

                    </div>
                )))}
            </div>
        </>
    )
}

const Bag = () =>{

    const [title] = useState({
        宠物: [],
        宠物蛋: [],
    })

    return (
        <div className="relative">
            <div className="absolute inset-x-0 bottom-0    " />
            <div className=" mx-auto  ">
                <Header/>
                <div className="max-w-7xl relative px-4 pt-14 py-10    mx-auto ">
                    <div className="">
                        <Tab.Group>
                            <Tab.List className=" p-1  bg-blue-900/20 rounded-xl mx-auto       ">
                                <div className="rounded-full overflow-hidden border border-gray-500 flex items-center">
                                    {Object.keys(title).map((category) => (
                                        <Tab
                                            key={category}
                                            className={({ selected }) =>
                                                classNames(
                                                    'w-full  py-2  text-sm  font-medium  ',
                                                    selected ? 'bg-gray-500 text-gray-50' : '')}>
                                            {category}
                                        </Tab>
                                    ))}
                                </div>
                            </Tab.List>
                            <Tab.Panels className="my-5">
                                <Tab.Panel className={classNames(
                                        '')}>
                                    <Pet/>
                                </Tab.Panel>
                                <Tab.Panel
                                    className={classNames('')}>
                                    <Eggs/>
                                </Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>
                    </div>
                </div>
                <Navigation/>
            </div>
        </div>
    )
}

export default Bag
