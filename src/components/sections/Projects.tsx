import { useTranslations } from "use-intl";
import ProjectCard from "../ProjectCard";

export interface ProjectsList {
    projects: Project[];
}

export interface Project {
    name: string;
    tech: string;
    framework: string;
    desc: string;
    src: string;
}

export default function Projects(): JSX.Element {
    const t = useTranslations("index.projects");
    const projects: ProjectsList = {
        projects: [
            {
                name: t("project1.title"),
                tech: t("project1.tech"),
                framework: t("project1.framework"),
                desc: t("project1.desc"),
                src: t("project1.src"),
            },
            {
                name: t("project1.title"),
                tech: t("project1.tech"),
                framework: t("project1.framework"),
                desc: t("project1.desc"),
                src: t("project1.src"),
            },
            {
                name: t("project1.title"),
                tech: t("project1.tech"),
                framework: t("project1.framework"),
                desc: t("project1.desc"),
                src: t("project1.src"),
            },
            {
                name: t("project1.title"),
                tech: t("project1.tech"),
                framework: t("project1.framework"),
                desc: t("project1.desc"),
                src: t("project1.src"),
            },
            {
                name: t("project1.title"),
                tech: t("project1.tech"),
                framework: t("project1.framework"),
                desc: t("project1.desc"),
                src: t("project1.src"),
            },
            {
                name: t("project1.title"),
                tech: t("project1.tech"),
                framework: t("project1.framework"),
                desc: t("project1.desc"),
                src: t("project1.src"),
            },
        ],
    };
    return (
        <div id="project">
            <div className="ml-10 mt-14 z-10 pb-10">
                <p className="ml-10 text-gray-200 text-xl md:text-2xl lg:text-3xl font-semibold mb-8 ">{t("title")}</p>
                <div className="grid xl:grid-cols- lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mr-10">
                    {projects.projects.map((project) => (
                        <ProjectCard key={project.name} props={project} />
                    ))}
                </div>
            </div>
        </div>
    );
}
