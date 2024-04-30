import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { FaXTwitter } from "react-icons/fa6";
function Footer() {
    const date = new Date();
    const { t, i18n } = useTranslation();

    return (
        <div className="w-full h-20 bg-[#51b26b] mt-20 max-lg:px-3 max-lg:gap-2 flex justify-between items-center px-10 text-white">
            <p>
                © {date.getFullYear()} {t("footer")}
            </p>
            <div className="flex gap-4 text-2xl">
                <a
                    href="https://www.linkedin.com/company/t-een-technic"
                    target="blank"
                >
                    <BsLinkedin />
                </a>
                <a href="https://www.instagram.com/teentechnic/" target="blank">
                    <FaInstagram />
                </a>
                <a href="https://www.youtube.com/@TeenTechnic" target="blank">
                    <FaYoutube />
                </a>
                <a href="https://twitter.com/TeenTechnic" target="blank">
                    <FaXTwitter />
                </a>
            </div>
        </div>
    );
}

export default Footer;
