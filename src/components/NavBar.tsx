import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "use-intl";
export default function NavBar(): JSX.Element {
    const t = useTranslations("navbar");
    return (
        <div>
            <nav className="flex flex-row items-center justify-between flex-wrap bg-gray-800 p-5 fixed w-full top-0 z-50">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <a href="#top" className="font-semibold text-2xl tracking-tight">
                        E.R
                    </a>
                </div>
                <div className="w-full flex-grow flex items-center w-auto hidden sm:hidden md:contents">
                    <div className="text-sm flex-grow">
                        <a href="#about" className="text-xl mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
                            {t("about")}
                        </a>
                        <a href="#study" className="text-xl mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
                            {t("study")}
                        </a>
                        <a href="#techno" className="text-xl mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
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
                    <a href={t("link")} className="text-gray-200 text-xl font-semibold hover:text-white mr-4 border rounded-xl px-4">
                        {t("lang")}
                    </a>
                </div>
                <div>
                    <button className="text-gray-200 hover:text-white mr-8 inline-flex p-1 hover:bg-gray-700 rounded md:hidden ml-auto hover:text-white outline-none nav-toggler">
                        <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </nav>
        </div>
    );
}
