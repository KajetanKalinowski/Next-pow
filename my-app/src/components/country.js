import Image from "next/image"
export default function Country({kraje}){
    return(
        <div className="border-black border-2 flex flex-col items-center p-2">
            <Image src={kraje.flags.png} />
            <h1>{kraje.name.common}</h1>
        </div>
    )
}