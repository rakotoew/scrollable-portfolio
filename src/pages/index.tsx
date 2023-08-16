import Hero from "../components/sections/Hero";
import { GetStaticProps } from "next";
import Techno from "../components/sections/Techno";
import About from "../components/sections/About";
import Study from "../components/sections/Study";
import StaryBackground from "../components/StaryBackground";
import NavBar from "../components/NavBar";
import Projects from "../components/sections/Projects";
import LeftToRightSeparator from "../components/separators/LeftToRightSeparator";

export default function IndexPage(): JSX.Element {
    return (
        <div className="bg-fixed bg-gradient-radial-bot from-cyan-900 to-neutral-800 h-full">
            <StaryBackground />
            <NavBar />
            <Hero />
            <About />
            <Study />
            <LeftToRightSeparator />
            <Techno />
            <Projects />
        </div>
    );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            messages: require(`../lang/${locale}.json`),
        },
    };
};
