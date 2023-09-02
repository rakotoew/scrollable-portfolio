import { Project } from "./sections/Projects";
import Image from "next/image";

export interface ProjectCardProps {
    props: Project;
    index: number;
}

export default function ProjectCard({ props, index }: ProjectCardProps): JSX.Element {
    let even = index % 2 === 0;
    const imagePositionClass = even ? "" : "flex-row-reverse";
    const textAlignmentClass = even ? "" : "text-right";
    return (
        <a href={props.src}>
            <div className={`flex ${imagePositionClass}`}>
                <Image
                    src={props.imagesrc}
                    alt={props.name}
                    width={250}
                    height={250}
                    sizes="(max-width: 500px) 50vw"
                    className="rounded-lg shadow-lg h-52 w-96 object-cover rounded-2xl"
                />
                <div className={`flex flex-col p-2 h-52 mb-4 mx-4 ${textAlignmentClass}`}>
                    <p className="text-gray-200 text-xl md:text-2xl font-semibold mb-2 top-0">{props.name}</p>
                    <p className="text-cyan-600 text-base md:text-sm">
                        {props.tech}, <span className="text-emerald-500">{props.framework}</span>
                    </p>
                    <p className="text-gray-300 text-base md:text-sm">{props.desc}</p>
                </div>
            </div>
        </a>
    );
}
