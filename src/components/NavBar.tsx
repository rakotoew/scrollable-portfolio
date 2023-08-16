import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "use-intl";
import { useState } from "react";
export default function NavBar(): JSX.Element {
    const t = useTranslations("navbar");
    const [dropdownOpen, setDropdownOpen] = useState(false);
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
                        <a href="#project" className="text-xl mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
                            {t("projects")}
                        </a>
                    </div>
                </div>
                <div className="flex-grow items-center w-auto md:hidden">
                    <button
                        className="text-gray-200 hover:text-white mr-2 inline-flex p-1 hover:bg-gray-700 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <div className="overflow-hidden">
                        <div
                            className={`${
                                dropdownOpen ? "top-full opacity-100 visible" : "top-[110%] invisible opacity-0"
                            } absolute left-0 z-40 mt-2 w-full rounded border-[.5px] border-gray-700 bg-gray-800 py-5 shadow-card transition-all`}
                        >
                            <a
                                onClick={() => setDropdownOpen(false)}
                                href="#about"
                                className="block py-2 px-5 text-base font-semibold text-gray-200 hover:bg-primary hover:bg-opacity-5 hover:text-white"
                            >
                                {t("about")}
                            </a>
                            <a
                                onClick={() => setDropdownOpen(false)}
                                href="#study"
                                className="block py-2 px-5 text-base font-semibold text-gray-200 hover:bg-primary hover:bg-opacity-5 hover:text-white"
                            >
                                {t("study")}
                            </a>
                            <a
                                onClick={() => setDropdownOpen(false)}
                                href="#techno"
                                className="block py-2 px-5 text-base font-semibold text-gray-200 hover:bg-primary hover:bg-opacity-5 hover:text-white"
                            >
                                {t("techno")}
                            </a>
                            <a
                                onClick={() => setDropdownOpen(false)}
                                href="#project"
                                className="block py-2 px-5 text-base font-semibold text-gray-200 hover:bg-primary hover:bg-opacity-5 hover:text-white"
                            >
                                {t("projects")}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <a href="https://www.github.com/rakotoew" className="text-gray-200 hover:text-white mr-8">
                        <FontAwesomeIcon icon={faGithub} size="xl" />
                    </a>
                    <a href="https://www.linkedin.com/in/ewan-rakotoanosy-844938249/" className="text-gray-200 hover:text-white mr-8">
                        <FontAwesomeIcon icon={faLinkedin} size="xl" />
                    </a>
                    <a href="#contact" className="text-gray-200 hover:text-white mr-8">
                        <FontAwesomeIcon icon={faEnvelope} size="xl" />
                    </a>
                </div>
                <div>
                    <a href={t("link")} className="text-gray-200 text-xl font-semibold hover:text-white border rounded-xl px-2">
                        <FontAwesomeIcon icon={faGlobe} size="sm"/>
                        <span>{t("lang")}</span>
                    </a>
                </div>
            </nav>
        </div>
    );
}
