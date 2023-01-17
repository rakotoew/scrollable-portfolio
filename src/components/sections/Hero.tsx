import { useTranslations } from "use-intl";
import Image from "next/image";

export default function Hero(): JSX.Element {
    const t = useTranslations("index.hero");
    return (
        <div className="flex">
            <div className="h-full flex flex-row items-center mt-20 mb-10 ml-8">
                <span className="bg-gray-400 w-0.5 h-16 absolute mt-64 ml-32"></span>
                <Image className="rounded-full absolute" src="/profile.png" alt="profile picture" width="250" height="250" />
                <div className="p-3 pl-32 bg-gray-700 rounded-2xl ml-32">
                    <h1 className="text-5xl text-gray-50">{t("name")}</h1>
                    <h3 className="text-3xl text-gray-200">{t("title")}</h3>
                    <p className="text-2xl text-gray-400">{t("desc")}</p>
                </div>
                <span className="bg-gray-400 absolute h-0.5 w-64 mt-80 ml-32"></span>
                <span className="bg-gray-400 absolute h-5 w-0.5 mt-80 ml-96"></span>
            </div>
        </div>
    );
}
