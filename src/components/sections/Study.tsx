import { useTranslations } from "use-intl";

export default function Study(): JSX.Element {
    const t = useTranslations("index.study");
    return (
        <div>
            <span id="study"></span>
            <div className="ml-20 mt-14 z-10 mb-2">
                <p className="text-gray-200 text-xl md:text-2xl lg:text-3xl font-semibold mb-8">{t("title")}</p>
                <p className="text-gray-300">{t("p1")}</p>
                <p className="text-gray-300">{t("p2")}</p>
                <p className="text-gray-300">{t("p3")}</p>
            </div>
            <span className="absolute ml-40 w-0.5 h-10 bg-gray-400 mt-1"></span>
        </div>
    );
}
