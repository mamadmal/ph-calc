import React, { useState } from 'react';


export const Home=()=>{

const [pka, setpka] = useState(0)
const [constraction, setConstraction] = useState(0)
const [result, setResult] = useState()
const [err, setErr] = useState("")



const calculatepka = ()=>{
    const numerator = Math.sqrt(1 + 4 * constraction * Math.pow(10, pka)) - (1);
    const denominator = 2 * Math.pow(10, pka);
    const logResult = -Math.log10(numerator / denominator);

    logResult > 0 && logResult <= 14 ? setResult(logResult) && setErr("") || pka === "" || constraction === "" : setErr("invalid properties!") && setResult(0) ;
    
}

    return(
        <div className='flex flex-col items-center'>

            <div className='flex flex-col items-center mt-9 border border-slate-100 rounded-lg w-fit p-5'>
            <h1 className='text-3xl font-bold mt-4 mb-2'>Find pH with pKa and constraction</h1>
            <hr className='w-full mb-3' />


            <div className='flex flex-col'>
            <label className='flex flex-col items-start my-3'>
                <span className='my-1 text-xl'>pKa</span>
                <input className='p-1 rounded-sm text-slate-900 focus:outline-none focus:ring focus:ring-slate-100' type="text" placeholder="pka" onChange={(e) => setpka(e.target.value)} />
            </label>

            <label className='flex flex-col items-start my-1'>
                <span className='my-1 text-xl'>constraction</span>
                <input type="text" placeholder="constraction"  onChange={(e) => setConstraction(e.target.value)}  className='p-1 rounded-sm text-slate-900 focus:outline-none focus:ring focus:ring-slate-100'/>
            </label>
            </div>
            

            <button className='border border-slate-100 rounded-lg p-1 px-3 my-3 text-2xl hover:bg-slate-100 hover:text-[#242424]' onClick={calculatepka}>find pH</button>

            <label>
                <span>pH is : {result}</span>
                <span>{err}</span>
            </label>

            </div>

        </div>
    )
}