import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "use-intl";
export default function NavBar(): JSX.Element {
    const t = useTranslations("navbar");
    return (
        <div>
            <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-5 fixed w-full top-0 z-50">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <a href="#top" className="font-semibold text-2xl tracking-tight">
                        E.R
                    </a>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <a href="#about" className="block text-xl mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
                            {t("about")}
                        </a>
                        <a href="#study" className="block text-xl mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
                            {t("study")}
                        </a>
                        <a href="#techno" className="block text-xl mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
                            {t("techno")}
                        </a>
                    </div>
                </div>
                <div className="flex items-center">
                    <a href="https://www.github.com/rakotoew" className="text-gray-200 hover:text-white mr-8">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://www.linkedin.com/in/ewan-rakotoanosy-844938249/" className="text-gray-200 hover:text-white mr-8">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href="#contact" className="text-gray-200 hover:text-white mr-8">
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                    </a>
                </div>
                <div>
                    <a href={t("link")} className="text-gray-200 text-xl font-semibold hover:text-white mr-4 ml-16 border rounded-xl px-4">
                        {t("lang")}
                    </a>
                </div>
            </nav>
        </div>
    );
}
