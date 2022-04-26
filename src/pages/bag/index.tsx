import React, { useState } from 'react'
import Header from "../../components/header";
import { Tab } from '@headlessui/react';
import Navigation from "../../components/navigation";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Pet = () =>{

    const pet = [
        {
            number:"#asdasd",
            img:"/1.png",
            one:"32",
            two:"1",
            three:"4",
            four:"2",

        },
        {
            number:"#xzczxc",
            img:"/1.png",
            one:"32",
            two:"1",
            three:"4",
            four:"2",

        },
        {
            number:"#1021392",
            img:"/1.png",
            one:"32",
            two:"12",
            three:"10",
            four:"22",

        },

    ]
    return(
        <>
            <div className="grid grid-cols-2 gap-3">
                {pet.map((item=>(
                    <div key={item.number} className=" rounded-2xl  text-center border border-gray-500 border-2 border-b-4 border-r-4">
                        <div className="p-2 px-4 border-b border-gray-500">
                            <div>
                                {item.number}
                            </div>
                            <img className="mx-auto w-24 py-1" src={item.img} alt=""/>
                        </div>

                        <div>
                            <div className="  flex justify-between p-2 mx-2 items-center">
                                <div className="flex  text-sm mr-2">
                                    <div>
                                        <i className="fa fa-arrow-circle-o-down text-indigo-400" aria-hidden="true"></i>
                                    </div>
                                    <div className="ml-0.5">
                                        {item.one}
                                    </div>
                                </div>
                                <div className="flex  text-sm mr-2">
                                    <div>
                                        <i className="fa fa-arrow-circle-o-left text-yellow-300" aria-hidden="true"></i>
                                    </div>
                                    <div className="ml-0.5">
                                        {item.two}
                                    </div>
                                </div>
                                <div className="flex  text-sm mr-2">
                                    <div>
                                        <i className="fa fa-arrow-circle-o-right text-blue-400" aria-hidden="true"></i>
                                    </div>
                                    <div className="ml-0.5">
                                        {item.three}
                                    </div>
                                </div>
                                <div className="flex  text-sm mr-2">
                                    <div>
                                        <i className="fa fa-arrow-circle-o-up text-green-400" aria-hidden="true"></i>
                                    </div>
                                    <div className="ml-0.5">
                                        {item.four}
                                    </div>
                                </div>


                          </div>

                        </div>

                    </div>
                )))}
            </div>
        </>
    )
}

const Eggs = () =>{
    const pet = [
        {
            number:"#asdasd",
            img:"/1.png",
            price:"32312",
        },
        {
            number:"#xzczxc",
            img:"/1.png",
            price:"32312",
        },
        {
            number:"#1021392",
            img:"/1.png",
            price:"32312",
        },

    ]
    return(
        <>
            <div className="grid grid-cols-2 gap-3">
                {pet.map((item=>(
                    <div key={item.number} className=" rounded-2xl  text-center border border-gray-500 border-2 border-b-4 border-r-4">
                        <div className="p-2 px-4 border-b border-gray-500">
                            <div>
                                {item.number}
                            </div>
                            <img className="mx-auto py-1 rounded-full w-24" src={item.img} alt=""/>
                        </div>

                        <div>
                            <div className=" p-2 mx-2 items-center">
                                <button className="px-2 py-0.5  border border-gray-500 border border-r-2 border-b-2 rounded-full text-sm ">
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
        <div className="relative pt-4">
            <div className="absolute inset-x-0 bottom-0    " />
            <div className=" mx-auto  ">
                <Header/>
                <div className="max-w-7xl relative px-4 pt-20 py-10    mx-auto ">
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
                            <Tab.Panels className="mt-5 ">
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
