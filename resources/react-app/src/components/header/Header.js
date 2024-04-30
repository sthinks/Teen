import { Disclosure } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import teenlogo from "../../assets/logo/whiteteen.png";
import teenlogoblack from "../../assets/logo/teenlogo.png";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Header() {
    const [navItem, setNavItem] = useState(" ");
    const [navbar, setNavbar] = useState(false);
    const { t, i18n } = useTranslation();
    const slug = window.location.pathname;
    useEffect(() => {
        setNavItem(slug);
    }, [slug]);
    const scrollToSolutions = (item) => {
        const element = document.getElementById(item);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "start",
            });
        }
    };
    const navigation = [
        { name: t("navsolutionabout"), href: "about" },
        { name: t("navsolutionpartner"), href: "solutionspartner" },
        { name: t("navsolution"), href: "solutions" },
        { name: t("navproje"), href: "project" },
        { name: t("test"), href: "contact" },
    ];
    const navigate = useNavigate();
    const changeBackground = () => {
        if (window.scrollY >= 300) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
        return () => {
            window.removeEventListener("scroll", changeBackground);
        };
    }, []);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("lang", lang);
    };
    const isMobile = window.innerWidth <= 768;
    return (
        <Disclosure
            as="nav"
            className={`absolute top-0 z-50 w-full max-sm:relative max-md:bg-white ${
                !isMobile && navbar
                    ? "sticky top-0 bg-white shadow-md z-[99999] transition-all duration-500 h-28"
                    : ""
            }`}
            style={{ top: !isMobile && navbar ? "0" : "" }}
        >
            {({ open, close }) => (
                <>
                    <div className="container mx-auto">
                        <div className="relative flex  h-16 items-center justify-between">
                            <div className="absolute inset-y-0 flex-row-reverse left-0 flex items-center md:hidden justify-between w-full ">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex  items-center justify-center p-2 text-slate-700 ring-2 ring-inset ring-white max-md:mt-2">
                                    <div
                                        className={`hamburger-menu ${
                                            open ? "open" : ""
                                        }`}
                                    >
                                        <span className="line"></span>
                                        <span className="line"></span>
                                        <span className="line"></span>
                                    </div>
                                </Disclosure.Button>
                                <img
                                    className="block lg:hidden h-12"
                                    src={
                                        !isMobile
                                            ? teenlogoblack
                                            : teenlogoblack
                                    }
                                    onClick={() => navigate("/")}
                                    alt="Teen"
                                />
                            </div>
                            <div className="flex items-center justify-center sm:items-stretch sm:justify-around text-[#191919] font-semibold w-full mt-3">
                                <div className="hidden max-sm:ml-6 md:block w-full max-xl:w-full">
                                    <div className="flex justify-between items-center max-xl:text-sm ">
                                        <div className="max-w-4xl max-xl:max-w-3xl flex justify-center items-center">
                                            <div className="flex w-[300px] max-lg:w-[200px] ">
                                                <a href="/">
                                                    <img
                                                        className="hidden w-auto md:block relative top-[10px]"
                                                        src={
                                                            !isMobile && navbar
                                                                ? teenlogoblack
                                                                : teenlogo
                                                        }
                                                        alt="Teen"
                                                    />
                                                </a>
                                            </div>
                                            <div className="w-full flex justify-start items-center pl-12 max-lg:pl-4  text-white gap-8 max-xl:gap-4 mt-8">
                                                {navigation.map((item, i) => (
                                                    <p
                                                        key={i}
                                                        className={
                                                            navItem ===
                                                            `${item.href}`
                                                                ? `text-base text cursor-pointer font-medium text-with-underline    ${
                                                                      !isMobile &&
                                                                      navbar
                                                                          ? "text-gray-800 cursor-pointer underline text-with-underline2"
                                                                          : "underline cursor-pointer text-white "
                                                                  }`
                                                                : `text-base font-normal cursor-pointer  hover:opacity-50 duration-150 delay-150 text-with-underline ${
                                                                      !isMobile &&
                                                                      navbar
                                                                          ? "text-gray-800 cursor-pointer underline text-with-underline2"
                                                                          : "underline cursor-pointer text-white "
                                                                  }`
                                                        }
                                                        onClick={() =>
                                                            scrollToSolutions(
                                                                item.href
                                                            )
                                                        }
                                                    >
                                                        {item.name}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>

                                        <div className=" max-w-xs flex justify-center items-center gap-2 relative   text-[#535353] text-base font-light max-xl:pr-4 mt-8">
                                            <div className="flex justify-between items-center max-xl:hidden pl-2 gap-3">
                                                <a
                                                    href={
                                                        i18n.language === "tr"
                                                            ? "https://www.teentechnic.com/trsema.png"
                                                            : "https://www.teentechnic.com/engtema.png"
                                                    }
                                                    target="blank"
                                                    className={` text-base  font-medium text-with-underline cursor-pointer mr-2 text-with-underline   ${
                                                        navbar
                                                            ? "text-[#535353] text-with-underline2"
                                                            : "text-white"
                                                    }`}
                                                >
                                                    {t("katalog")}
                                                </a>
                                                <p
                                                    className={`${
                                                        i18n.language === "en"
                                                            ? `cursor-pointer font-bold underline  ${
                                                                  navbar
                                                                      ? "text-[#535353]"
                                                                      : "text-white"
                                                              }`
                                                            : `cursor-pointer hover:scale-105  ${
                                                                  navbar
                                                                      ? "text-[#535353]"
                                                                      : "text-white"
                                                              } duration-200 delay-200 hover:opacity-50`
                                                    }`}
                                                    onClick={() =>
                                                        changeLanguage("en")
                                                    }
                                                >
                                                    ENG
                                                </p>
                                                <span
                                                    className={`cursor-pointer font-bold   ${
                                                        navbar
                                                            ? "text-[#535353]"
                                                            : "text-white"
                                                    }`}
                                                >
                                                    /
                                                </span>
                                                <p
                                                    className={`${
                                                        i18n.language === "tr"
                                                            ? `cursor-pointer font-bold underline  ${
                                                                  navbar
                                                                      ? "text-[#535353]"
                                                                      : "text-white"
                                                              }`
                                                            : `cursor-pointer hover:scale-105  ${
                                                                  navbar
                                                                      ? "text-[#535353]"
                                                                      : "text-white"
                                                              } duration-200 delay-200 hover:opacity-50`
                                                    }`}
                                                    onClick={() =>
                                                        changeLanguage("tr")
                                                    }
                                                >
                                                    TR
                                                </p>
                                                <a
                                                    href="https://www.linkedin.com/company/t-een-technic"
                                                    target="blank"
                                                >
                                                    <FaLinkedin
                                                        className={`text-2xl hover:scale-110 duration-150 delay-150 cursor-pointer ${
                                                            !navbar
                                                                ? "text-white"
                                                                : "text-black"
                                                        } `}
                                                    />
                                                </a>
                                                <a
                                                    href="https://www.instagram.com/teentechnic/"
                                                    target="blank"
                                                >
                                                    <FaInstagram
                                                        className={`text-2xl hover:scale-110 duration-150 delay-150 cursor-pointer ${
                                                            !navbar
                                                                ? "text-white"
                                                                : "text-black"
                                                        } `}
                                                    />
                                                </a>
                                                <a
                                                    href="https://www.youtube.com/@TeenTechnic"
                                                    target="blank"
                                                >
                                                    <FaYoutube
                                                        className={`text-3xl hover:scale-110 duration-150 delay-150 cursor-pointer ${
                                                            !navbar
                                                                ? "text-white"
                                                                : "text-black"
                                                        } `}
                                                    />
                                                </a>
                                                <a
                                                    href="https://twitter.com/TeenTechnic"
                                                    target="blank"
                                                >
                                                    <FaXTwitter
                                                        className={`text-2xl hover:scale-110 duration-150 delay-150 cursor-pointer ${
                                                            !navbar
                                                                ? "text-white"
                                                                : "text-black"
                                                        } `}
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel
                        className={`md:hidden  opacity-0 duration-200 delay-200 ${
                            open ? "opacity-95" : "opacity-0"
                        }`}
                    >
                        <div className="space-y-1 px-2 pt-2 pb-3 navbar-open-close">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    onClick={() => scrollToSolutions(item.href)}
                                    target={item.target ? "_blank" : ""}
                                    className="block px-3 py-2 rounded-md  font-medium"
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                            <div className="flex justify-start items-center px-3 py-2 gap-5">
                                <p
                                    className={`${
                                        i18n.language === "en"
                                            ? "cursor-pointer font-bold "
                                            : "cursor-pointer hover:scale-105  duration-200 delay-200 hover:opacity-50"
                                    }`}
                                    onClick={() => changeLanguage("en")}
                                >
                                    ENG
                                </p>
                                /
                                <p
                                    className={`${
                                        i18n.language === "tr"
                                            ? "cursor-pointer font-bold text-black"
                                            : "cursor-pointer hover:scale-105 duration-200 delay-200 hover:opacity-50"
                                    }`}
                                    onClick={() => changeLanguage("tr")}
                                >
                                    TR
                                </p>
                            </div>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
