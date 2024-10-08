'use client'
import { useEffect,useState } from "react"
import Country from "@/components/country"
export default function Page(){
  const [kraj,setKraj] = useState(null)
  useEffect(()=>{
    const getData = async () =>{
      const data = await fetch('https://restcountries.com/v3.1/all')
      const json = await data.json()
      setKraj(json)
    }
    getData()
  },[])
  return(
    <div className="flex flex-wrap w-full gap-2 h-auto">
      {
        kraj && kraj.map((item,idx)=>(
          <Country key={idx} kraje={item}/>
        ))
      }
    </div>
  )
}