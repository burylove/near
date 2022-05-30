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
            const data= await axios.get("http://127.0.0.1:7001/api/near/user/pet/all",{
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
                        <div className=" px-4  pb-2 border-gray-500">
                            <div className="flex justify-center items-center">
                            <div className={classNames(PetStyle[item.near_pet_type],'rounded-b-xl w-5/6 ')}>
                                #{item.near_pet_index}
                            </div>
                            </div>
                            <img className="mx-auto  py-3" src={item.near_pet_image_url} alt=""/>
                            <div className="flex justify-between text-sm px-4 font-semibold pb-2">
                                <div>
                                    Mint:{item.near_pet_mint_number}
                                </div>
                                <div>
                                    Lv {item.near_pet_level}
                                </div>
                            </div>
                                <div className="w-full bg-gray-200 h-3 md:saturate-0  rounded-full">
                                    <div className="bg-green-400 h-3 rounded-full"
                                         style={{width: `${item.near_pet_hunger_value}%`}}></div>
                                </div>
                        </div>
                        <div>
                            <div className="flex justify-between p-2  text-xs items-center rounded-b-xl bg-gray-200">
                                <div className="flex">
                                    <div>
                                        <i className="fa fa-arrow-circle-o-down text-indigo-400" aria-hidden="true"></i>
                                    </div>
                                    <div className="ml-0.5">
                                        {item.near_pet_health_value}
                                    </div>
                                </div>
                                <div className="flex">
                                    <div>
                                        <i className="fa fa-arrow-circle-o-left text-yellow-300" aria-hidden="true"></i>
                                    </div>
                                    <div className="ml-0.5">
                                        {item.near_pet_intelligence_value}
                                    </div>
                                </div>
                                <div className="flex">
                                    <div>
                                        <i className="fa fa-arrow-circle-o-right text-blue-400" aria-hidden="true"></i>
                                    </div>
                                    <div className="ml-0.5">
                                        {item.near_pet_charisma_value}
                                    </div>
                                </div>
                                <div className="flex">
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
            const data= await axios.get("http://127.0.0.1:7001/api/near/user/pet_eggs/all",{
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
        await axios.post("http://127.0.0.1:7001/api/near/user/open/pet_eggs",{
            near_address,
            near_pet_eggs_index:e
        })
        await location.reload()
    }
    return(
        <>
            <div className="grid grid-cols-2 gap-3">
                {pet.map((item=>(
                    <Link href={`/egg/${item.near_pet_eggs_index}`} key={item.near_pet_eggs_index}>
                    <div  className=" rounded-2xl  text-center border border-gray-500 border-2 border-b-4 border-r-4">
                        <div className=" px-4  border-gray-500">
                            <div className="flex justify-center items-center">
                                <div className={classNames(PetStyle[item.near_pet_eggs_type],'rounded-b-xl  text-sm px-3 pb-1')}>
                                    {item.near_pet_eggs_type} eggs
                                </div>
                            </div>
                            <img className="mx-auto py-1  rounded-full w-24" src={item.near_pet_eggs_image_url} alt=""/>
                        </div>

                        <div>
                            <div className=" p-2 px-3 items-center rounded-b-xl bg-gray-200">
                                <div className={classNames(PetStyle[item.near_pet_eggs_type],'rounded-xl  ')}>
                                    #{item.near_pet_eggs_index}
                                </div>
                            </div>

                        </div>
                    </div>
                    </Link>
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
