'use client'
import { useEffect,useState } from "react"
import Country from "@/components/country"
import Link from "next/link"
export default function Page(){
  const [kraj,setKraj] = useState(null)
  useEffect(()=>{
    const getData = async () =>{
      const data = await fetch('https://restcountries.com/v3.1/all')
      const json = await data.json()
      console.log(json)
      setKraj(json)
    }
    getData()
  },[])
  return(
    <div className="flex flex-wrap w-full gap-2 h-auto">
      {
        kraj && kraj.map((item,idx)=>(
          <Link key={idx} href={`/${item.cca2}`}>
          <Country kraje={item}/>
          </Link>
        ))
      }
    </div>
  )
}