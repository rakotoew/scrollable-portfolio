import { useTranslations } from "use-intl";
import Image from "next/image";

export default function Hero(): JSX.Element {
    const t = useTranslations("index.hero");
    return (
        <div className="flex">
            <span className="bg-gray-400 w-0.5 h-16 absolute mt-64 ml-40"></span>
            <div className="h-full flex flex-row items-center mt-20 mb-10 ml-8 z-10">
                <Image className="rounded-full absolute" src="/profile.png" alt="profile picture" width="250" height="250" />
                <div className="p-3 pl-32 bg-gradient-to-r to-gray-800 from-gray-700 rounded-2xl ml-32">
                    <h1 className="text-5xl text-gray-50">{t("name")}</h1>
                    <h3 className="text-3xl text-gray-200">{t("title")}</h3>
                    <p className="text-2xl text-gray-400">{t("desc")}</p>
                </div>
            </div>
        </div>
    );
}
