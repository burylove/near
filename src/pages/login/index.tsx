import React, {useEffect, useState} from 'react'
import {useAtom} from "jotai";
import {HiddenReciprocal, NearAccount, PeopleEmail} from "../../jotai";
import axios from "axios";
const Login = () =>{
    const[email,setEmail] = useAtom(PeopleEmail)
    const[hidden,setHidden] = useState(false)
    const[time,setTime] = useState(21)
    const[near_address,setNear_hex_account] =useAtom(NearAccount)
    useEffect(()=>{

    },[])
    const send = async () =>{
        const Email = (document.getElementById("email") as HTMLInputElement).value
        await axios.post("http://127.0.0.1:7001/api/email/send",{
            email:Email
        })
            .then(function (response) {
                setHidden(true)
                countdown()
            })
            .catch(function (error) {
                alert("请检查邮箱")
            });

    }

    const countdown = ()=>{
            setHidden(true)
            setTimeout(()=> {
                setHidden(false)
            },10000)
        }

    const login = async () =>{
        const code = (document.getElementById("code") as HTMLInputElement).value
        const Email = (document.getElementById("email") as HTMLInputElement).value.toString()
        const data = await axios.get("http://127.0.0.1:7001/api/email/check_code",{
            params:{
                email:Email,
                code:code
           }
        })
            .then(function (response) {
            console.log(response.data)
                if( response.data == "no code"){
                    alert("请输入正确的验证码")
                }else {
                    if(response.data.length == 0){
                        setEmail(Email)
                        console.log(email)
                        window.location.replace('/login/activation')
                    }else {
                        console.log("New address")
                        console.log(response.data[0].near_address)
                        setEmail(Email)
                        setNear_hex_account(response.data[0].near_address)
                        window.location.replace('/main')
                    }
                }
        })
            .catch(function (error) {
                alert("网络错误")
            });

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
                <div className="max-w-7xl relative px-12 py-16  sm:px-6  mx-auto ">
                    <div>
                        <div className="flex justify-between items-center">
                            <div>
                                <input type="text"
                                       className="  text-xs md:text-sm   rounded-lg p-2 py-4 w-full border-gray-700 border   focus:border-blue-500 transition duration-300  outline-none"
                                       placeholder="Email address"
                                       id="email"
                                />
                            </div>
                            <div>
                                <button onClick={send} className={hidden?"hidden":""}>
                                    <img className="w-32" src="https://cdn.discordapp.com/attachments/876498266550853642/969529054581620786/LOGINsend.png" alt=""/></button>
                                <button  className={hidden?"cursor-not-allowed w-32 bg-blue-300 py-3 rounded-xl font-semibold":"hidden"}>
                                    Resend
                                    </button>
                            </div>
                        </div>
                        <div>
                            <div className="mt-24">
                                <input type="text"
                                       className="  text-xs md:text-sm   rounded-lg p-2 py-4  border-gray-700 border   focus:border-blue-600 transition duration-300  outline-none"
                                       placeholder="Email  code"
                                       id="code"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center mt-32">
                            <button onClick={login}  className="">
                                <img className="w-32" src="https://cdn.discordapp.com/attachments/876498266550853642/969529054397100032/LOGIN.png" alt=""/>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
