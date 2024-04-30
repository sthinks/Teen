import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import infoaboutimage from "../../assets/about/infoaboutimage.png";
import engbanner from "../../assets/about/engbanner.png";
import trbanner from "../../assets/about/trbanner.png";

import ReactPlayer from "react-player";
import { useTranslation } from "react-i18next";

function About() {
    const controls = useAnimation();
    const { t, i18n } = useTranslation();

    useEffect(() => {
        controls.start({ opacity: 1, x: 0 });
    }, [controls]);
    const [isVisible, setIsVisible] = useState(false);
    const aboutRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Element görünür hale geldiğinde
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 } // Elementin yarıdan fazlası göründüğünde
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            // Komponent kaldırıldığında observer'ı temizle
            observer.disconnect();
        };
    }, []);

    return (
        <div id="about" className="container mx-auto mt-28 max-lg:px-4">
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{
                    opacity: isVisible ? 1 : 0,
                    x: isVisible ? 0 : -100,
                }}
                transition={{ duration: 1 }}
            >
                <p className="text-5xl text-[#0c8ecf] font-bold varela-round-bold">
                    {t("navsolutionabout")}
                </p>
            </motion.div>
            <div
                className="flex justify-between items-start mt-5 max-lg:flex-col"
                ref={aboutRef}
            >
                <div className="w-[47%] max-lg:w-full h-[300px] max-md:h-auto flex justify-start items-center">
                    {/* <img
                            className="w-[95%] h-3/4 rounded-tl-3xl rounded-br-3xl"
                            src={aboutImage}
                            alt="Teen Technic"
                        /> */}

                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=ZZcKiQqQrh4"
                        width="100%"
                        height="100%"
                        controls={true}
                    />
                </div>

                <div className="w-2/4 max-lg:w-full max-lg:mt-10">
                    <p className="varela-round-bold text-2xl text-gray-700 pb-4">
                        {t("abouttitle")}
                    </p>
                    <br />
                    <p className="varela-round-med  text-lg text-gray-700">
                        {t("aboutcontent1")}
                    </p>
                </div>
            </div>
            {i18n.language === "tr" ? (
                <img
                    className="w-full h-full mt-10"
                    src={trbanner}
                    alt="Teen Technic"
                />
            ) : (
                <img
                    className="w-full h-full mt-10"
                    src={engbanner}
                    alt="Teen Technic"
                />
            )}
        </div>
    );
}

export default About;
