import { Project } from "./sections/Projects";

export interface ProjectCardProps {
    props: Project;
}

export default function ProjectCard({ props }: ProjectCardProps): JSX.Element {
    return (
        <a href={props.src}>
            <div className="flex flex-col items-center border border-gray-600 bg-gray-800 rounded-xl p-2 h-52 mb-4 mx-4">
                <p className="text-gray-200 text-xl md:text-2xl font-semibold mb-2 top-0">{props.name}</p>
                <p className="text-cyan-600">
                    {props.tech}, {props.framework}
                </p>
                <p className="text-gray-300">{props.desc}</p>
            </div>
        </a>
    );
}
