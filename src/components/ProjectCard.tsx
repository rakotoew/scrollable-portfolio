import { Project } from "./sections/Projects";

export interface ProjectCardProps {
    props: Project;
}

export default function ProjectCard({ props }: ProjectCardProps): JSX.Element {
    return (
        <a href={props.src}>
            <div className="flex flex-col items-center border border-gray-700 bg-gradient-radial-center to-gray-800 from-gray-800 rounded-xl p-2 h-52 mb-4 mx-4">
                <p className="text-gray-200 text-xl md:text-2xl font-semibold mb-2 top-0">{props.name}</p>
                <p className="text-cyan-600 text-base md:text-sm">
                    {props.tech}, <span className="text-emerald-500">{props.framework}</span>
                </p>
                <p className="text-gray-300 text-base md:text-sm">{props.desc}</p>
            </div>
        </a>
    );
}
