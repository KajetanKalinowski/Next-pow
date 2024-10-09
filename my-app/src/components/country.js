import Image from "next/image"
export default function Country({kraje}){
    return(
        <div className="border-black border-2 flex flex-col items-center p-2 gap-2 bg-slate-200">
            <div className="relative w-[200px] h-[100px]">
            <Image src={kraje.flags.png} alt={kraje.name.common} layout="fill" objectFit="contain"/>
            </div>
            <h1 className="text-center font-semibold">{kraje.name.common}</h1>
            <p>Stolica: {kraje.capital}</p>
            <p>Populacja: {kraje.population}</p>
        </div>
    )
}