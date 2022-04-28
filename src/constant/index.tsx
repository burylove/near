import {useAtom} from "jotai";
import {GMTToken, GSTToken, NEARToken} from "../jotai";

const Constant = ()=>{
    const [GST,] = useAtom(GSTToken)
    const [GMT,] = useAtom(GMTToken)
    const [NEAR,] = useAtom(NEARToken)
    const TokenData= { GST, GMT, NEAR}
    const TokenImg = {
        GST:"https://s2.coinmarketcap.com/static/img/coins/64x64/16352.png",
        GMT:"https://s2.coinmarketcap.com/static/img/coins/200x200/18069.png",
        NEAR:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1onspODOPj_-mr_lbWFWTt6SFO69mMdG6eT-tnkCiaBy97s2i-1KauNPVv4nN_L1bYkA&usqp=CAU",
    }
    return {TokenData,TokenImg}
}

export {Constant}
