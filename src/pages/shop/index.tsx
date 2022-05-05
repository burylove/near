import React, {Fragment, useState } from 'react'
import Header from "../../components/header";
import {Listbox, Tab, Transition } from '@headlessui/react';
import Navigation from "../../components/navigation";
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import Link from "next/link";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const people = [
    { id: 1, name: 'Latest' },
    { id: 2, name: 'Lowest Price' },
    { id: 3, name: 'Highest Price' },

]

const Pet = () =>{
    const [selected, setSelected] = useState(people[2])
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
            <div>
                <Listbox value={selected} onChange={setSelected}>
                    {({ open }) => (
                        <>
                            <div className="mt-1 relative mb-4">
                                <Listbox.Button className="bg-white relative w-36 border border-gray-300 rounded-full shadow-sm pl-3  py-1 text-left cursor-default  sm:text-sm">
                                    <span className="block truncate text-base">{selected.name}</span>
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
                                </Listbox.Button>

                                <Transition
                                    show={open}
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="absolute z-10 mt-1 w-40 bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                        {people.map((person) => (
                                            <Listbox.Option
                                                key={person.id}
                                                className={({ active }) =>
                                                    classNames(
                                                        active ? 'text-white bg-gray-600' : 'text-gray-900',
                                                        'cursor-default select-none relative py-2 pl-3 pr-9')} value={person}>
                                                {({ selected, active }) => (
                                                    <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {person.name}
                        </span>

                                                    </>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </>
                    )}
                </Listbox>
            <div className="grid grid-cols-2 gap-3">
                {pet.map((item=>(
                    <Link href="/shop/detail" key={item.number}>
                    <div  className=" rounded-2xl  text-center border border-gray-500 border-2 border-b-4 border-r-4">
                        <div className="p-2 px-4 border-b border-gray-500">
                            <div>
                                {item.number}
                            </div>
                            <img className="mx-auto w-24 py-1" src={item.img} alt=""/>
                        </div>

                        <div>
                            <div className="  flex justify-between p-2 mx-2 items-center">
                                <div className="flex  w-full text-sm">
                                    <div>
                                        {item.price}
                                    </div>
                                    <div className="ml-0.5">
                                        NEAR
                                    </div>
                                </div>

                                <button className="px-2 py-0.5  border border-gray-500 border border-r-2 border-b-2 rounded-full text-sm ">
                                    Buy
                                </button>

                            </div>

                        </div>

                    </div>
                    </Link>
                )))}
            </div>
            </div>
        </>
    )
}

const Eggs = () =>{
    const [selected, setSelected] = useState(people[2])
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
            <div>
                <Listbox value={selected} onChange={setSelected}>
                    {({ open }) => (
                        <>
                            <div className="mt-1 relative mb-4">
                                <Listbox.Button className="bg-white relative w-36 border border-gray-300 rounded-full shadow-sm pl-3  py-1 text-left cursor-default  sm:text-sm">
                                    <span className="block truncate text-base">{selected.name}</span>
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
                                </Listbox.Button>

                                <Transition
                                    show={open}
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="absolute z-10 mt-1 w-40 bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                        {people.map((person) => (
                                            <Listbox.Option
                                                key={person.id}
                                                className={({ active }) =>
                                                    classNames(
                                                        active ? 'text-white bg-gray-600' : 'text-gray-900',
                                                        'cursor-default select-none relative py-2 pl-3 pr-9')} value={person}>
                                                {({ selected, active }) => (
                                                    <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {person.name}
                        </span>

                                                    </>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </>
                    )}
                </Listbox>
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
                            <div className="  flex justify-between p-2 mx-2 items-center">
                                <div className="flex  w-full text-sm">
                                    <div>
                                        {item.price}
                                    </div>
                                    <div className="ml-0.5">
                                        NEAR
                                    </div>
                                </div>

                                <button className="px-2 py-0.5  border border-gray-500 border border-r-2 border-b-2 rounded-full text-sm ">
                                    Buy
                                </button>

                            </div>

                        </div>

                    </div>
                )))}
            </div>
            </div>
        </>
    )
}

const Shop = () =>{

    const [title] = useState({
        宠物: [],
        宠物蛋: [],
    })

    return (
        <div className="relative">
            <div className="absolute inset-x-0 bottom-0    " />
            <div className=" mx-auto  ">
                <Header/>
                <div className="max-w-7xl relative px-4 pt-20 py-10    mx-auto ">
                    <div className="">
                        <Tab.Group>
                            <Tab.List className="   bg-blue-900/20 rounded-xl mx-auto       ">
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
                            <Tab.Panels className=" mt-5">
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

export default Shop
