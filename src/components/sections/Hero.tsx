import { useTranslations } from "use-intl";
import Image from "next/image";

export default function Hero(): JSX.Element {
    const t = useTranslations("index.hero");
    return (
        <div className="border-b-2 border-gray-700 pb-6 flex">
            <div className="h-full flex flex-row items-center mt-20 mb-20 ml-8">
                <Image className="rounded-full absolute" src="/profile.png" alt="profile picture" width="250" height="250" />
                <div className="h-36 p-3 pl-12 bg-gray-700 rounded-2xl ml-52">
                    <h1 className="text-5xl text-gray-50">{t("name")}</h1>
                    <h3 className="text-3xl text-gray-200">{t("title")}</h3>
                    <p className="text-2xl text-gray-400">{t("desc")}</p>
                </div>
            </div>
        </div>
    );
}
