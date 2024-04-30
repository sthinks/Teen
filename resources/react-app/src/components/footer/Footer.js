import React from "react";
import whiteLogo from "../../assets/logo/whiteteen.png";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function Footer() {
    const date = new Date();
    return (
        <div className="w-full h-20 bg-[#51b26b] mt-20 max-lg:px-3 max-lg:gap-2 flex justify-between items-center px-10 text-white">
            <p>© {date.getFullYear()} Teen Technic. Her Hakkı Saklıdır.</p>
            <div className="flex gap-4 text-2xl">
                <a
                    href="https://www.linkedin.com/company/teentechnic"
                    target="blank"
                >
                    <BsLinkedin />
                </a>
                <a href="https://www.instagram.com/teentechnic/" target="blank">
                    <FaInstagram />
                </a>
                <a href="https://www.youtube.com/@teentechnic" target="blank">
                    <FaYoutube />
                </a>
            </div>
        </div>
    );
}

export default Footer;
