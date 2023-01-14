import Hero from "../components/sections/Hero";
import { GetStaticProps } from "next";
import Techno from "../components/sections/Techno";

export default function IndexPage(): JSX.Element {
    return (
        <div className="bg-gray-700">
            <Hero />
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
