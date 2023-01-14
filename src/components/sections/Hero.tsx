import { useTranslations } from "use-intl";

export default function Hero(): JSX.Element {
    const t = useTranslations("index.hero");
    return (
        <div className="border-b-2 border-gray-500 pb-6">
            <h1 className="text-5xl text-gray-50">{t("name")}</h1>
            <h3 className="text-3xl text-gray-200">{t("title")}</h3>
            <p className="text-2xl text-gray-400">{t("desc")}</p>
        </div>
    );
}
