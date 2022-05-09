import React from "react";
import axios from "axios";
import {useAtom} from "jotai";
import {PublicKey, SecretKey, SeedPhrase} from "../../../jotai";

const Activation = () =>{
    const  [publicKey,setPublicKey] = useAtom(PublicKey)
    const  [secretKey,setSecretKey] = useAtom(SecretKey)
    const  [seedPhrase,setSeedPhrase] = useAtom(SeedPhrase)

    const send =async () =>{
        const code = (document.getElementById("activation") as HTMLInputElement).value
       const data = await axios.post("https://api.burylove.org/api/ near/generate/near_seedPhrase",{
            key:code
        })
        console.log(data)
        if(data.data !== "no key"){
            setPublicKey(data.data.publicKey)
            setSecretKey(data.data.secretKey)
            setSeedPhrase(data.data.seedPhrase)
            window.location.replace('/phrase')
        }else {
            alert("激活码错误，请重试 ")
        }



    }

    return (
        <div className="relative pt-16">
            <div className="absolute inset-x-0 bottom-0    " />
            <div className="absolute inset-0">
                <img
                    className="h-screen w-full mx-auto"
                    src="https://cdn.discordapp.com/attachments/876498266550853642/969529054967529522/5.png"
                    alt="People working on laptops"
                />
            </div>
            <div className=" mx-auto  ">
                <div className="max-w-7xl relative px-12 py-16 h-screen   sm:px-6  mx-auto ">
                    <div className="mt-36 ">
                        <div className="flex justify-between">
                            <div>
                                <input type="text"
                                       className="  text-xs md:text-sm   rounded-lg p-2 py-4 w-full border-gray-700 border   focus:border-blue-500 transition duration-300  outline-none"
                                       placeholder="activation code"
                                       id="activation"
                                />
                            </div>
                            <div>
                                <button onClick={send} className="">
                                    <img className="w-32" src="https://cdn.discordapp.com/attachments/876498266550853642/969524082938904606/ACTIVATION.png" alt=""/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activation
