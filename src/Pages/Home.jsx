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

    logResult > 0 && logResult <= 14 ? setResult(logResult) && setErr("") : setErr("invalid properties!") && setResult(0);
    
}

    return(
        <div className='flex flex-col items-center'>

            <div className='flex flex-col items-center mt-9 border border-slate-500 rounded-lg w-fit p-5'>
            <h1 className='text-3xl font-bold mt-4 mb-2'>Find pH with pKa and constraction</h1>
            <hr className='w-full mb-3' />


            <div>
            <label>
                <span>pKa</span>
                <input type="text" placeholder="pka" onChange={(e) => setpka(e.target.value)} />
            </label>

            <label>
                <span>constraction</span>
                <input type="text" placeholder="constraction"  onChange={(e) => setConstraction(e.target.value)} />
            </label>
            </div>
            

            <button onClick={calculatepka}>find pH</button>

            <label>
                <span>pH is : {result}</span>
                <span>{err}</span>
            </label>

            </div>

        </div>
    )
}