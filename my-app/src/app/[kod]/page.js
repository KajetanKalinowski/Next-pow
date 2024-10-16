'use client'
import { useEffect,useState } from "react"
import Image from "next/image"
import Border from "@/components/borders"
import Link from "next/link"
export default function Info({params}){
    const [kraj,setKraj] = useState([])
    const [load,setLoad] = useState(true)   
    useEffect(()=>{
        const getData = async()=>{
            try{
                const data = await fetch(`https://restcountries.com/v3.1/alpha/${params.kod}`)
                const json = await data.json()
                setKraj(json)
            }catch(error){
                console.log(error)
            }finally{
                setLoad(false)
            }
        }
        getData()
    },[])
    return(
        <div className="h-screen w-full flex flex-wrap items-center justify-center">
            {load ? (<h1>Pobieranie danych...</h1>):(
                <div className='flex flex-col flex-wrap justify-center items-center  gap-2 h-auto'>
                <div className="border-2 border-black p-5 bg-slate-200 ">
                <div className="relative w-[600px] h-[400px] border-2 border-black flex flex-col items-centers">
                <Image src={kraj[0].flags.png} alt={kraj[0].name.common} layout="fill" objectFit="contain"/>
                </div>
                <h1 className="font-semibold text-center">{kraj[0].name.common}</h1>
                <p className="text-center">Stolica: {kraj[0].capital}</p>
                <p className="text-center">Populacja: {kraj[0].population}</p>
                </div>
                <div className="flex flex-row flex-wrap justify-center items-center">
                {
                       kraj[0].borders && kraj[0].borders.map((item,idx)=>(
                            <Link key={idx} href={`/${item}`}>
                            <Border code={item}/>
                            </Link>
                        ))
                    }
                </div>
                </div>
                
            )}

        </div>
    )
}
