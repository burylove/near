import React, {Fragment, useEffect, useState} from 'react'
import Link from "next/link";
import Wallet from "../../components/wallet";
import {PetStyle} from "../../constant";
import {Dialog, Transition} from "@headlessui/react";
import axios from "axios";
import router, {useRouter} from "next/router";
import {useAtom} from "jotai";
import {LoadingState, NearAccount} from "../../jotai";
import Loading from "../../components/loading";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Detail = () =>{
    const router = useRouter()
    const [openload,setOpenload]=useAtom(LoadingState)
    const[near_address,setNear_hex_account] =useAtom(NearAccount)
    const [openLevel,setOpenLevel] = useState(false)
    const [openRepair,setOpenRepair] = useState(false)
    const [openSell,setOpenSell] = useState(false)
    const [openSellPrice,setOpenSellPrice] = useState(false)
    const [openTransfer,setOpenTransfer] = useState(false)
    const [current,setCurrent] = useState(0)
    const [durability,setDurability] = useState(0)
    const [cost,setCost] = useState(0)
    const minted = [
        {
            type:"Uncommon",
            img:"/1.png",
            index:"123123",

        },
        {
            type:"Rare",
            img:"/1.png",
            index:"1233",

        },

    ]
    const mints = [
        {
            type:"Uncommon",
            img:"/1.png",
            index:"123123",

        },
        {
            type:"Rare",
            img:"/1.png",
            index:"12123",
        },

    ]
    const content={
        id:"",
        near_address:"",
        near_pet_mint_number:"",
        near_pet_charisma_value:"",
        near_pet_health_value:"",
        near_pet_hunger_value:"",
        near_pet_image_url:"",
        near_pet_index:"",
        near_pet_intelligence_value:"",
        near_pet_level:0,
        near_pet_lucky_value:"",
        near_pet_name:"",
        near_pet_price:"",
        near_pet_type:"",
        near_pet_child_1:"",
        near_pet_child_2:"",
        near_pet_child_3:"",
        near_pet_child_4:"",
        near_pet_child_5:"",
        near_pet_child_6:"",
        near_pet_child_7:"",
        near_pet_child_8:"",
        near_pet_child_9:"",
        near_pet_child_10:"",
        near_pet_parents_1:"",
        near_pet_parents_2:""
    }
    const [info,setInfo] = useState(content)

    useEffect(()=>{
        if (router.isReady){
            setOpenload(true)
            const near_pet_index = router.query.slug[0]
            const fetchUserBounty = async (near_pet_index) => {
                const data = await axios.get(`http://127.0.0.1:7001/api/near/user/pet/details?near_pet_index=${near_pet_index}`)
                console.log(data.data)
                const info = data.data
                const content={
                    id:info.id,
                    near_address:info.near_address,
                    near_pet_mint_number:info.near_pet_mint_number,
                    near_pet_charisma_value:info.near_pet_charisma_value,
                    near_pet_health_value:info.near_pet_health_value,
                    near_pet_hunger_value:info.near_pet_hunger_value,
                    near_pet_image_url:info.near_pet_image_url,
                    near_pet_index:info.near_pet_index,
                    near_pet_intelligence_value:info.near_pet_intelligence_value,
                    near_pet_level:info.near_pet_level,
                    near_pet_lucky_value:info.near_pet_lucky_value,
                    near_pet_name:info.near_pet_name,
                    near_pet_price:info.near_pet_price,
                    near_pet_type:info.near_pet_type,
                    near_pet_child_1:info.near_pet_child_1,
                    near_pet_child_2:info.near_pet_child_2,
                    near_pet_child_3:info.near_pet_child_3,
                    near_pet_child_4:info.near_pet_child_4,
                    near_pet_child_5:info.near_pet_child_5,
                    near_pet_child_6:info.near_pet_child_6,
                    near_pet_child_7:info.near_pet_child_7,
                    near_pet_child_8:info.near_pet_child_8,
                    near_pet_child_9:info.near_pet_child_9,
                    near_pet_child_10:info.near_pet_child_10,
                    near_pet_parents_1:info.near_pet_parents_1,
                    near_pet_parents_2:info.near_pet_parents_2
                }
                setInfo(content)
            }
            fetchUserBounty(near_pet_index)
            setOpenload(false)
        }
    },[router.isReady])
    const sell = async ()=>{
        setOpenload(true)
        const price =  (document.getElementById("price") as HTMLInputElement).value
        await  axios.post("http://127.0.0.1:7001/api/near/user/sell/pet_store",{
            near_pet_index:info.near_pet_index,
            near_pet_price:price,
        }).then(async function(response){
            setOpenload(false)
            alert("成功")
            await router.push("/bag")
        }).catch(async function (error){
            setOpenload(false)
            alert("请重试")
        })
    }
    const repair =async ()=>{
        const near_pet_index = router.query.slug[0]
        const data = await axios.get(`http://127.0.0.1:7001/api/near/user/pet/details?near_pet_index=${near_pet_index}`)
        setDurability(data.data.near_pet_hunger_value)
            setCost(0)
            setOpenRepair(true)
            setCurrent(data.data.near_pet_hunger_value)
    }
    const rangeChange = () =>{
        const value = (document.getElementById('range1') as HTMLInputElement).value ;
        const data =Number(((Number(value)-Number(durability))*0.41).toFixed(2))
        setCurrent(Number(value))
        setCost(data)
        console.log(data)
    }
    const repair_confirm =async ()=>{
        setOpenload(true)
        await axios.post("http://127.0.0.1:7001/api/near/user/repair_pet",{
            near_address,
            near_pet_index:info.near_pet_index,
            repair_data:cost
        }).then(async function(response){
            setOpenload(false)
            alert("修理成功")
            location.reload();
        }).catch(async function (error) {
            setOpenload(false)
            alert("网络繁忙")
        })


    }
    const confirm = async () =>{
        setOpenload(true)
        setOpenTransfer(false)
        await axios.post("http://127.0.0.1:7001/api/near/user/transfer/nft_to_external",{
            near_address,
            near_pet_index:info.near_pet_index
        }).then(async function(response){
            setOpenload(false)
            alert("成功")
            await router.push("/main")
        }).catch(async function (error) {
            setOpenload(false)
            alert("网络繁忙")
        })
    }
    const level = async () =>{
        setOpenload(true)
        await axios.post("http://127.0.0.1:7001/api/near/user/level_pet",{
            near_address,
            near_pet_index:info.near_pet_index
        })
            .then(async function(response){
            setOpenload(false)
            location.reload();
        }).catch(async function (error) {
            setOpenload(false)
            alert("网络繁忙,升级失败")
        })

    }
    const mint = ()=>{
        if(info.near_pet_level <5){
            alert("Mint需要宠物等级达到5级")
        }else{
            router.push(`/mint/${info.near_pet_type}/${info.near_pet_index}/${info.near_pet_mint_number}/${info.near_pet_image_url}`)
        }
    }
    if (info != content) {
        return (
            <div className="relative">
                <div className="absolute inset-x-0 bottom-0    "/>
                <div className=" mx-auto  ">
                    <div className="fixed z-20 inset-x-0 flex justify-between px-5 mx-auto ">
                        <Link href="/bag">
                            <div className="text-2xl text-gray-600 ">
                                <i className="fa fa-reply" aria-hidden="true"></i>
                            </div>
                        </Link>
                        <Wallet/>
                    </div>
                    <div className="absolute inset-0">
                        <img
                            className=""
                            src="https://cdn.discordapp.com/attachments/876498266550853642/969529054967529522/5.png"
                            alt=""
                        />
                    </div>
                    <div className="max-w-7xl relative px-8 pt-20 py-10   mx-auto ">
                        <div className="border-2 border-gray-500 border-b-4 border-r-4 rounded-2xl bg-white">
                            <div className="mt-20 mx-14 border border-gray-500 rounded-2xl p-5">
                                <img className="w-36 mx-auto" src={info.near_pet_image_url} alt=""/>
                            </div>
                            <div className="flex justify-between mt-10 mb-5 items-center px-4 text-sm">
                                <div
                                    className={classNames(PetStyle[info.near_pet_type], "border rounded-full px-2 py-0.5 bg-gray-200")}>
                                    {info.near_pet_type}
                                </div>
                                <div
                                    className={classNames(PetStyle[info.near_pet_type], "border rounded-full px-2 py-0.5 bg-gray-200")}>
                                    #{info.near_pet_index}
                                </div>
                                <button onClick={repair} className="w-24 bg-gray-200 h-6 rounded-r-full items-center">
                                    <div className="bg-green-400 h-6 rounded-r-full" style={{width:`${info.near_pet_hunger_value}%`}}></div>
                                    <div className="-mt-5 mb-0.5  flex justify-center text-xs">
                                        {info.near_pet_hunger_value}/100
                                    </div>
                                </button>

                            </div>
                            <div className="px-5 pb-3">
                            <div className="w-full bg-gray-200 h-4   rounded-full">
                                <div className="bg-green-400 h-4 rounded-full"
                                     style={{width: Number(Number(`${info.near_pet_level}`) * 5) + "%"}}></div>
                                <div className="-mt-4 mb-0.5  flex justify-center text-xs">
                                    Level {info.near_pet_level}
                                </div>
                            </div>
                                <div className="w-full bg-gray-200 h-4 mt-5  rounded-full">
                                    <div className="bg-green-400 h-4 rounded-full"
                                         style={{width: Number(Number(`${info.near_pet_mint_number}`) * 10) + "%"}}></div>
                                    <div className="-mt-4 mb-0.5  flex justify-center text-xs">
                                        Shoe Mint {info.near_pet_mint_number}/10
                                    </div>
                                </div>
                            </div>
                            <div className="mx-4 mb-10">
                                <div className="flex justify-center text-xl font-semibold">
                                    Attributes
                                </div>
                                <div className="grid grid-cols-1 gap-4 text-center mt-5">
                                    <div className="">
                                        <div className="flex justify-between items-center text-xs">
                                            <div className="w-36 pr-2 flex items-center">
                                                <img className="w-7 rounded-full mr-2"
                                                     src="https://cdn.discordapp.com/attachments/876498266550853642/972801548788830248/a78317fe48307309.png"
                                                     alt=""/>
                                                智力值
                                            </div>
                                            <div className="w-full bg-gray-200 h-4 rounded-r-full">
                                                <div className="bg-green-400 h-4 rounded-r-full"
                                                     style={{width: Number(Number(`${info.near_pet_intelligence_value}`) / 2) + "%"}}></div>
                                            </div>
                                            <div className="pl-4 w-14 flex justify-center text-sm">
                                                {info.near_pet_intelligence_value}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="flex justify-between items-center text-xs">
                                            <div className="w-36 pr-2 flex items-center">
                                                <img className="w-7 rounded-full mr-2"
                                                     src="https://cdn.discordapp.com/attachments/876498266550853642/972801548268732496/2df774c723a6c758.png"
                                                     alt=""/>
                                                魅力值
                                            </div>
                                            <div className="w-full bg-gray-200 h-4 rounded-r-full">
                                                <div className="bg-green-400 h-4 rounded-r-full"
                                                     style={{width: Number(Number(`${info.near_pet_charisma_value}`) / 2) + "%"}}></div>
                                            </div>
                                            <div className="pl-4 w-14 flex justify-center text-sm">
                                                {info.near_pet_charisma_value}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="flex justify-between items-center text-xs">
                                            <div className="w-36 pr-2 flex items-center">
                                                <img className="w-7 rounded-full mr-2"
                                                     src="https://cdn.discordapp.com/attachments/876498266550853642/972801548033871912/3e94bbb18cb9e5d1.png"
                                                     alt=""/>
                                                健康值
                                            </div>
                                            <div className="w-full bg-gray-200 h-4 rounded-r-full">
                                                <div className="bg-green-400 h-4 rounded-r-full"
                                                     style={{width: Number(Number(`${info.near_pet_health_value}`) / 2) + "%"}}></div>
                                            </div>
                                            <div className="pl-4 w-14 flex justify-center text-sm">
                                                {info.near_pet_health_value}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="flex justify-between items-center text-xs">
                                            <div className="w-36 pr-2 flex items-center">
                                                <img className="w-7 rounded-full mr-2"
                                                     src="https://cdn.discordapp.com/attachments/876498266550853642/972801548558172200/ca72fdb3b0c9c082.png"
                                                     alt=""/>
                                                幸运值
                                            </div>
                                            <div className="w-full bg-gray-200 h-4 rounded-r-full">
                                                <div className="bg-green-400 h-4 rounded-r-full"
                                                     style={{width: Number(Number(`${info.near_pet_lucky_value}`) / 2) + "%"}}></div>
                                            </div>
                                            <div className="pl-4 w-14 flex justify-center text-sm">
                                                {info.near_pet_lucky_value}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="px-8 py-32">
                        <div>
                            <div className="text-black text-2xl font-semibold">
                                Minted form
                            </div>
                            <div className="flex grid grid-cols-2 gap-10 mt-5">
                                {minted.map((item => (
                                    <div key={item.index}
                                         className=" rounded-2xl   text-center border border-gray-500 border-2 border-b-4 border-r-4">
                                        <div className=" px-4  border-gray-500">
                                            <div className="flex justify-center items-center">
                                                <div className={classNames(PetStyle[item.type], 'rounded-b-xl w-5/6 ')}>
                                                    #{item.index}
                                                </div>
                                            </div>
                                            <img className="mx-auto py-6   w-24" src={item.img} alt=""/>
                                        </div>
                                    </div>
                                )))}
                            </div>
                        </div>
                        <div className="mt-10">
                            <div className="text-black text-2xl font-semibold">
                                Mints
                            </div>
                            <div className="flex grid grid-cols-2 gap-10 mt-5">
                                {mints.map((item => (
                                    <div key={item.index}
                                         className=" rounded-2xl   text-center border border-gray-500 border-2 border-b-4 border-r-4">
                                        <div className=" px-4  border-gray-500">
                                            <div className="flex justify-center items-center">
                                                <div className={classNames(PetStyle[item.type], 'rounded-b-xl w-5/6 ')}>
                                                    #{item.index}
                                                </div>
                                            </div>
                                            <img className="mx-auto py-2 py-6  w-24" src={item.img} alt=""/>
                                        </div>
                                    </div>
                                )))}
                            </div>
                        </div>

                    </div>

                    <div className=" fixed z-20 bottom-0 w-full mx-auto">
                        <div
                            className="flex justify-between w-full bg-white px-4 pb-4 p-2 border-t-2 border-blue-300 rounded-t-3xl">
                            <button className="" onClick={() => {
                                if(Number(info.near_pet_level) !== 20){
                                setOpenLevel(true) }
                            }}>
                                <div className="text-2xl text-blue-300">
                                    <i className="fa fa-level-up " aria-hidden="true"></i>
                                </div>
                                <div className="text-xs">Level up</div>
                            </button>

                            <button className="" onClick={repair}>
                                <div className="text-2xl text-blue-300">
                                    <i className="fa fa-wrench" aria-hidden="true"></i>
                                </div>
                                <div className="text-xs">Repair</div>
                            </button>

                            <button onClick={mint}>
                                <a>
                                    <div className="text-2xl text-blue-300">
                                        <i className="fa fa-heart" aria-hidden="true"></i>
                                    </div>
                                    <div className="text-xs">Mint</div>
                                </a>
                            </button>

                            <button className="" onClick={() => {
                                setOpenSell(true)
                            }}>
                                <div className="text-2xl text-blue-300">
                                    <i className="fa fa-tags" aria-hidden="true"></i>
                                </div>
                                <div className="text-xs">Sell</div>
                            </button>

                            <button className="">
                                <div className="text-2xl text-blue-300">
                                    <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                                </div>
                                <div className="text-xs">Lease</div>
                            </button>

                            <button className="" onClick={() => {
                                setOpenTransfer(true)
                            }}>
                                <div className="text-2xl  text-blue-300">
                                    <i className="fa fa-refresh" aria-hidden="true"></i>
                                </div>
                                <div className="text-xs">Transfer</div>
                            </button>


                        </div>
                    </div>
                </div>
                <Transition.Root show={openLevel} as={Fragment}>
                    <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto " onClose={setOpenLevel}>
                        <div className="flex items-center justify-center min-h-screen -mt-20  px-4  text-center ">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                            </Transition.Child>

                            {/* This element is to trick the browser into centering the modal contents. */}
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;
              </span>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <div
                                    className="inline-block align-bottom bg-white rounded-lg w-96 px-4 pt-5 pb-4 text-left  shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                                    <div>
                                        <div className="flex justify-end text-xl ">
                                            <button onClick={() => {setOpenLevel(false)}}>
                                                <i className="fa fa-times" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                        <div className="text-center">
                                            <div className="font-semibold">
                                                LEVEL UP
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 ">
                                        <div className="flex justify-center">
                                            <img className="w-36 " src={info.near_pet_image_url} alt=""/>
                                        </div>
                                        <div className="flex justify-center mt-2 font-semibold text-md">
                                            Lv {info.near_pet_level}
                                        </div>
                                        <div className="flex text-gray-500 text-md mt-4">
                                            Level up to
                                            <div className="ml-1 text-black font-semibold text-md">
                                                Lv {Number(info.near_pet_level)+1}
                                            </div>
                                        </div>
                                        <div
                                            className="flex mt-2 justify-between border border-gray-500 bg-gray-100 rounded-full px-2 py-1">
                                            <div className=" text-gray-500"> Cost</div>
                                            <div className="font-semibold">
                                                30GST+30GMT
                                            </div>
                                        </div>
                                        <div
                                            className="flex mt-2 justify-between border border-gray-500 bg-gray-100 rounded-full px-2 py-1">
                                            <div className=" text-gray-500"> Time</div>
                                            <div className="font-semibold">
                                                {Number(info.near_pet_level)*60} mins
                                            </div>
                                        </div>

                                        <div className="flex justify-between">
                                            <button
                                                onClick={() => {
                                                    setOpenLevel(false)
                                                }}
                                                type="button"
                                                className="w-36 flex mt-5 mr-2  justify-center rounded-full border border-gray-500 border-b-4 border-r-4 shadow-sm px-4 py-2  text-base font-medium text-black  "
                                            >
                                                CANCEL
                                            </button>
                                            <button
                                                onClick={level}
                                                type="button"
                                                className="w-36 flex mt-5  justify-center rounded-full border border-gray-600 border-b-4 border-r-4  shadow-sm px-4 py-2 bg-blue-300 text-base font-medium text-white "
                                            >
                                                CONFIRM
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>
                <Transition.Root show={openRepair} as={Fragment}>
                    <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto " onClose={setOpenRepair}>
                        <div className="flex items-center justify-center min-h-screen -mt-20  px-4  text-center ">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                            </Transition.Child>

                            {/* This element is to trick the browser into centering the modal contents. */}
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;
              </span>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <div
                                    className="inline-block align-bottom bg-white rounded-lg w-96 px-4 pt-5 pb-4 text-left  shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                                    <div>
                                        <div className="flex justify-end text-xl ">
                                            <button onClick={() => {
                                                setOpenRepair(false)
                                            }}>
                                                <i className="fa fa-times" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                        <div className=" text-center ">
                                            <div className="font-semibold">
                                                REPAIR
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 ">
                                        <div className="flex justify-center">
                                            <img className="w-36 " src="/1.png" alt=""/>
                                        </div>
                                        <div className="flex justify-center mt-2 font-semibold text-md">
                                            Durability:{current}/100
                                        </div>
                                        <div className="relative pt-1">
                                            <div className="range">
                                                <input type="range" className="form-range w-full" min={durability} max="100" defaultValue={durability}
                                                       step="1" id="range1" onChange={rangeChange}/>
                                            </div>
                                        </div>
                                        <div
                                            className="flex mt-2 justify-between border border-gray-500 bg-gray-100 rounded-full px-2 py-1">
                                            <div className=" text-gray-500"> Cost</div>
                                            <div className="font-semibold">
                                                {cost} GST
                                            </div>
                                        </div>

                                        <div className="flex justify-between">
                                            <button
                                                onClick={() => {
                                                    setOpenRepair(false)
                                                }}
                                                type="button"
                                                className="w-36 flex mt-5 mr-2  justify-center rounded-full border border-gray-500 border-b-4 border-r-4 shadow-sm px-4 py-2  text-base font-medium text-black  "
                                            >
                                                CANCEL
                                            </button>
                                            <button
                                                onClick={repair_confirm}
                                                type="button"
                                                className="w-36 flex mt-5  justify-center rounded-full border border-gray-600 border-b-4 border-r-4  shadow-sm px-4 py-2 bg-blue-300 text-base font-medium text-white "
                                            >
                                                CONFIRM
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>
                <Transition.Root show={openSell} as={Fragment}>
                    <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto " onClose={setOpenSell}>
                        <div className="flex items-center justify-center min-h-screen -mt-20  px-4  text-center ">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                            </Transition.Child>

                            {/* This element is to trick the browser into centering the modal contents. */}
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;
              </span>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <div
                                    className="inline-block align-bottom bg-white rounded-lg px-4 w-96 pt-5 pb-4 text-left  shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                                    <div>
                                        <div className="flex justify-end text-xl ">
                                            <button onClick={() => {
                                                setOpenSell(false)
                                            }}>
                                                <i className="fa fa-times" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                        <div className=" text-center ">
                                            <div className="font-semibold">
                                                SELL
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 ">
                                        <div className="flex justify-center">
                                            <img className="w-28 " src={info.near_pet_image_url} alt=""/>
                                        </div>
                                        <div className="text-sm  mt-2 flex justify-center  items-center">
                                            <div
                                                className={classNames(PetStyle[info.near_pet_type], "rounded-full px-1.5 py-0.5")}>
                                                #{info.near_pet_index}
                                            </div>
                                        </div>
                                        <div
                                            className="border border-gray-500 rounded-xl mt-6 text-gray-400 text-xs px-4 py-4 grid grid-cols-2 ">
                                            <div className="mb-6">
                                                Class
                                                <div className="text-black font-semibold text-sm">
                                                    {info.near_pet_type}
                                                </div>
                                            </div>
                                            <div className="pl-10">
                                                Level
                                                <div className="text-black font-semibold text-sm">
                                                    {info.near_pet_level}
                                                </div>
                                            </div>
                                            <div>
                                                Durability
                                                <div className="text-black font-semibold text-sm">
                                                    {info.near_pet_hunger_value}/100
                                                </div>
                                            </div>
                                            <div className="pl-10">
                                                Shoe mint
                                                <div className="text-black font-semibold text-sm">
                                                    {info.near_pet_mint_number}/10
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <button
                                                onClick={() => {
                                                    setOpenSell(false)
                                                }}
                                                type="button"
                                                className="w-36 flex mt-5 mr-2  justify-center rounded-full border border-gray-500 border-b-4 border-r-4 shadow-sm px-4 py-2  text-base font-medium text-black  "
                                            >
                                                CANCEL
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setOpenSellPrice(true);
                                                    setOpenSell(false)
                                                }}
                                                className="w-36 flex mt-5  justify-center rounded-full border border-gray-600 border-b-4 border-r-4  shadow-sm px-4 py-2 bg-blue-300 text-base font-medium text-white "
                                            >
                                                NEXT
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>
                <Transition.Root show={openSellPrice} as={Fragment}>
                    <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto " onClose={setOpenSellPrice}>
                        <div className="flex items-center justify-center min-h-screen -mt-20  px-4  text-center ">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                            </Transition.Child>

                            {/* This element is to trick the browser into centering the modal contents. */}
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;
              </span>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <div
                                    className="inline-block align-bottom bg-white rounded-lg  px-4 pt-5 pb-4 text-left w-96  shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                                    <div>
                                        <div className="flex justify-end text-xl ">
                                            <button onClick={() => {
                                                setOpenSellPrice(false)
                                            }}>
                                                <i className="fa fa-times" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                        <div className=" text-center ">
                                            <div className="font-semibold">
                                                SELL
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 ">
                                        <div className="flex justify-center">
                                            <img className="w-28 " src={info.near_pet_image_url} alt=""/>
                                        </div>
                                        <div className="text-sm  mt-2 flex justify-center  items-center">
                                            <div
                                                className={classNames(PetStyle[info.near_pet_type], "rounded-full px-1.5 py-0.5")}>
                                                #{info.near_pet_index}
                                            </div>
                                        </div>
                                        <div className="block text-sm font-medium text-gray-700 mt-5 mb-2 ">Selling
                                            price
                                        </div>
                                        <div className="flex">
                                            <input type="text"
                                                   className="text-xs md:text-sm   rounded-lg p-2 py-3 w-full border-gray-700 border border-2 border-b-4 border-r-4  focus:border-blue-500 transition duration-300  outline-none"
                                                   id="price"
                                            />
                                            <div className="-ml-12 text-sm flex items-center ">
                                                NEAR
                                            </div>
                                        </div>

                                        <div className="flex justify-between">
                                            <button
                                                onClick={() => {
                                                    setOpenSellPrice(false)
                                                }}
                                                type="button"
                                                className="w-36 flex mt-5 mr-2  justify-center rounded-full border border-gray-500 border-b-4 border-r-4 shadow-sm px-4 py-2  text-base font-medium text-black  "
                                            >
                                                CANCEL
                                            </button>
                                            <button
                                                onClick={sell}
                                                type="button"
                                                className="w-36 flex mt-5  justify-center rounded-full border border-gray-600 border-b-4 border-r-4  shadow-sm px-4 py-2 bg-blue-300 text-base font-medium text-white "
                                            >
                                                CONFIRM
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>
                <Transition.Root show={openTransfer} as={Fragment}>
                    <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto " onClose={setOpenTransfer}>
                        <div className="flex items-center justify-center min-h-screen -mt-20  px-4  text-center ">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                            </Transition.Child>

                            {/* This element is to trick the browser into centering the modal contents. */}
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;
              </span>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <div
                                    className="inline-block align-bottom bg-white rounded-lg w-96 px-4 pt-5 pb-4 text-left  shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                                    <div>
                                        <div className="flex justify-end text-xl ">
                                            <button onClick={() => {
                                                setOpenTransfer(false)
                                            }}>
                                                <i className="fa fa-times" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                        <div className="  flex items-center justify-center font">
                                            <div className="text-yellow-400 ">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                                     data-icon="exclamation-triangle"
                                                     className="w-4 h-4 mr-2 fill-current"
                                                     role="img" xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 576 512">
                                                    <path fill="currentColor"
                                                          d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path>
                                                </svg>
                                            </div>
                                            <div className="font-semibold">
                                                WARNING
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 px-3 text-sm text-gray-800 text-center">
                                        <div>
                                            This transaction will lower your Energy
                                            Cap, proceed and your unopened Mystery
                                            Box will be purged. Continue?
                                        </div>

                                        <div className="flex justify-between">
                                            <button
                                               onClick={()=>{
                                                   setOpenTransfer(false)
                                               }}
                                                type="button"
                                                className="w-36 flex mt-5 mr-2  justify-center rounded-full border border-gray-500 border-b-4 border-r-4 shadow-sm px-4 py-2  text-base font-medium text-black  "
                                            >
                                                CANCEL
                                            </button>
                                            <button
                                                onClick={confirm}
                                                type="button"
                                                className="w-36 flex mt-5  justify-center rounded-full border border-gray-600 border-b-4 border-r-4  shadow-sm px-4 py-2 bg-blue-300 text-base font-medium text-white "
                                            >
                                                CONFIRM
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>
                <Loading/>
            </div>
        )
    }else {
        return (
            <>
            1</>
        )
    }
}

export default Detail
