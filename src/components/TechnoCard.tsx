import { Comp } from "./sections/Techno";
import Image from "next/image";

export interface TechnoCardProps {
    props: Comp;
}

export default function TechnoCard({ props }: TechnoCardProps): JSX.Element {
    return (
        <>
            <div className=" flex-col w-36 h-36 m-4">
                <Image className="rounded-xl absolute" src={props.src} alt={props.name} width="125" height="125" sizes="125" />
                <h3 className="text-center text-xl text-gray-400 mt-32 pr-3">{props.name ? props.name : ""}</h3>
            </div>
        </>
    );
}
