import { useTranslations } from "use-intl";

export default function About(): JSX.Element {
    const t = useTranslations("index.about");
    return (
        <div>
            <div
                className="ml-6 mt-14 z-10 mb-5
            sm:mt-16 sm:ml-8
            md:mt-18 md:ml-10
            lg:mt-20 lg:ml-14
            xl:mt-24 xl:ml-20"
            >
                <p
                    className="text-gray-200 font-semibold mb-2 text-xl
                sm:mb-4
                md:text-2xl md:mb-6
                lg:text-4xl lg:mb-8
                xl:text-5xl"
                >
                    {t("title")}
                </p>
                <p
                    className="text-gray-300 ml-4
                md:text-xl
                lg:text-2xl
                xl:text-3xl"
                >
                    {t("p1")}
                </p>
                <p
                    className="text-gray-300 ml-4
                md:text-xl
                lg:text-2xl
                xl:text-3xl"
                >
                    {t("p2")}
                </p>
                <p
                    id="study"
                    className="text-gray-300 ml-4
                md:text-xl
                lg:text-2xl
                xl:text-3xl"
                >
                    {t("p3")}
                </p>
            </div>
            <span
                className="absolute ml-24 sm:ml-32 md:ml-40 w-0.5 h-10 bg-gray-400
            lg:h-14 lg:w-1
            xl:h-20"
            ></span>
        </div>
    );
}
