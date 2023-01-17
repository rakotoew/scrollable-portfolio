import { useTranslations } from "use-intl";

export default function Study(): JSX.Element {
    const t = useTranslations("index.study");
    return (
        <div className="ml-20 mt-10">
            <span className="absolute ml-80 -mt-3.5 w-0.5 h-10 bg-gray-400 "></span>
            <p className="text-gray-200 text-3xl">{t("title")}</p>
            <p className="text-gray-300">{t("p1")}</p>
            <p className="text-gray-300">{t("p2")}</p>
            <p className="text-gray-300">{t("p3")}</p>
            <span className="absolute ml-80 w-0.5 h-10 bg-gray-400 "></span>
        </div>
    );
}
