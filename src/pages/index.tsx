import Hero from "../components/sections/Hero";
import { GetStaticProps } from "next";
import Techno from "../components/sections/Techno";
import About from "../components/sections/About";
import Study from "../components/sections/Study";

export default function IndexPage(): JSX.Element {
    return (
        <div className="bg-fixed bg-gradient-radial from-cyan-900 to-neutral-800 h-full">
            <Hero />
            <About />
            <Study />
            <Techno />
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
