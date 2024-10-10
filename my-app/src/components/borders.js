import { useState,useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
export default function Border({code}){
    const [border,setBorder] = useState([])
    const [load,setLoad] = useState(true)
    useEffect(()=>{
        const getData = async ()=>{
            try{
                const data = await fetch(`https://restcountries.com/v3.1/alpha/${code}`)
                const json = await data.json()
                setBorder(json[0])
            }catch(error){
                console.log(error)
            }finally{
                setLoad(false)
            }
        }
        getData()
    },[])
    return(
        <div>
            {load ? (<h1>Ładowanie</h1>):(
                <div className="w-[200px]">
                <div className="border-black border-2 flex flex-col items-center p-2 gap-2 bg-slate-200">
                <div className="relative w-[100px] h-[50px] border-2 border-black flex flex-col items-centers">
                <Image src={border.flags.png} alt={border.name.common} layout="fill" objectFit="contain"/>
                </div>
                <h1 className="font-semibold text-center">{border.name.common}</h1>
                <p className="text-center">Stolica: {border.capital}</p>
                <p className="text-center">Populacja: {border.population}</p>
                </div>
                </div>
            )}
        </div>
    )
}