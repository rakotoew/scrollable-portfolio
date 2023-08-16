import { useTranslations } from "use-intl";
import Image from "next/image";

export default function Hero(): JSX.Element {
    const t = useTranslations("index.hero");
    return (
        <div>
            <div id="hero" className="flex mt-16">
                <div
                    className="h-full flex flex-row items-center mt-20 mb-10 ml-8 z-10
                md:ml-10
                lg:ml-12
                xl:ml-14"
                >
                    <Image className="rounded-full absolute max-w-[40%] md:max-w-[50%] lg:max-w-[80%] xl:max-w-[100%]" src="/profile.png" alt="profile picture" width={250} height={250} sizes="(max-width: 500px) 50vw"/>
                    <div className="p-3 pl-20 min-[480px]:pl-32 bg-gradient-to-r to-gray-800 from-gray-700 rounded-2xl ml-10 min-[310px]:ml-20 min-[400px]:ml-28 min-[500px]:ml-32">
                        <h1
                            className="text-gray-50
                        text-base
                        min-[400px]:text-xl
                        min-[500px]:text-2xl
                        md:text-4xl
                        lg:text-5xl
                        xl:text-7xl"
                        >
                            {t("name")}
                        </h1>
                        <h3
                            className="text-gray-200
                        text-sm
                        min-[400px]:text-base
                        min-[500px]:text-xl
                        md:text-2xl
                        lg:text-3xl
                        xl:text-4xl"
                        >
                            {t("title")}
                        </h3>
                        <p
                            className="text-gray-400
                        text-xs
                        min-[400px]:text-sm
                        min-[500px]:text-base
                        md:text-xl
                        lg:text-2xl
                        xl:text-3xl"
                        >
                            {t("desc")}
                        </p>
                    </div>
                </div>
            </div>
            <span id="about"></span>
        </div>
    );
}
