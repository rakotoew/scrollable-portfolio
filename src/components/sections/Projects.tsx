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
                name: t("project2.title"),
                tech: t("project2.tech"),
                framework: t("project2.framework"),
                desc: t("project2.desc"),
                src: t("project2.src"),
            },
            {
                name: t("project3.title"),
                tech: t("project3.tech"),
                framework: t("project3.framework"),
                desc: t("project3.desc"),
                src: t("project3.src"),
            },
            {
                name: t("project4.title"),
                tech: t("project4.tech"),
                framework: t("project4.framework"),
                desc: t("project4.desc"),
                src: t("project4.src"),
            },
            {
                name: t("project5.title"),
                tech: t("project5.tech"),
                framework: t("project5.framework"),
                desc: t("project5.desc"),
                src: t("project5.src"),
            },
            {
                name: t("project6.title"),
                tech: t("project6.tech"),
                framework: t("project6.framework"),
                desc: t("project6.desc"),
                src: t("project6.src"),
            },
        ],
    };
    return (
        <div id="project">
            <div className="ml-10 mt-14 z-10 pb-10">
                <p
                    className="ml-10 text-gray-200 text-xl
                md:text-2xl
                lg:text-3xl
                font-semibold mb-8 "
                >
                    {t("title")}
                </p>
                <div
                    className="grid
                xl:grid-cols-
                lg:grid-cols-4
                md:grid-cols-3
                sm:grid-cols-2
                grid-cols-1 mr-10"
                >
                    {projects.projects.map((project) => (
                        <ProjectCard key={project.name} props={project} />
                    ))}
                </div>
            </div>
        </div>
    );
}
