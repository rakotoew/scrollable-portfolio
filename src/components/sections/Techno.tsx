import TechnoCard from "../TechnoCard";

export interface Comps {
    comp: Comp[];
}

export interface Comp {
    name: string;
    desc: string;
    src: string;
}

export default function Techno(): JSX.Element {
    const frameworks: Comps = {
        comp: [
            {
                name: "Next.js",
                desc: "Next.js is a React framework that allows you to create static and dynamic websites with React.",
                src: "/icons/logo/logo-nextjs.svg",
            },
            {
                name: "React",
                desc: "React is a JavaScript library for building user interfaces.",
                src: "/icons/logo/logo-react.svg",
            },
            {
                name: "Angular",
                desc: "Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.",
                src: "/icons/logo/logo-angular.png",
            },
        ],
    };
    const languages: Comps = {
        comp: [
            {
                name: "TypeScript",
                desc: "TypeScript is an open-source language which builds on JavaScript, one of the world's most used tools, by adding static type definitions.",
                src: "/icons/logo/logo-typescript.png",
            },
            {
                name: "JavaScript",
                desc: "JavaScript is a high-level, interpreted programming language.",
                src: "/icons/logo/logo-javascript.png",
            },
            {
                name: "Java",
                desc: "Java is a general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation dependencies as possible.",
                src: "/icons/logo/logo-java.png",
            },
            {
                name: "C",
                desc: "C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system.",
                src: "/icons/logo/logo-c.png",
            },
            {
                name: "C++",
                desc: "C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or \"C with Classes\".",
                src: "/icons/logo/logo-c++.svg",
            },
            {
                name: "C#",
                desc: "C# is a general-purpose, multi-paradigm programming language encompassing strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines.",
                src: "/icons/logo/logo-csharp.png",
            },
            {
                name: "Python",
                desc: "Python is an interpreted, high-level and general-purpose programming language.",
                src: "/icons/logo/logo-python.png",
            },
            {
                name: "CSS",
                desc: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language like HTML.",
                src: "/icons/logo/logo-css.png",
            },
            {
                name: "ocaml",
                desc: "OCaml is an industrial-strength programming language supporting functional, imperative and object-oriented styles.",
                src: "/icons/logo/logo-ocaml.png",
            },
        ],
    };
    return (
        <div className="border-b-2 border-gray-500 pt-6 pb-6 flex flex-col">
            <span className="text-3xl text-gray-200">Frameworks</span>
            <div className="inline-flex ">
                {frameworks.comp.map((framework) => {
                    return <TechnoCard key={framework.name} props={framework} />;
                })}
            </div>
            <span>Languages</span>
            <div className="flex">
                {languages.comp.map((language) => {
                    return <TechnoCard key={language.name} props={language} />;
                })}
            </div>
        </div>
    );
}
