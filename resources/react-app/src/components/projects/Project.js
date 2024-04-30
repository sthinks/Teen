import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ankara from "../../assets/project/ankara.png";
import antalya from "../../assets/project/antalya.png";
import tedizmir from "../../assets/project/tedizmir.png";
import maidimitri from "../../assets/project/maidimitri.png";
import { useTranslation } from "react-i18next";

function Project() {
    const [isVisible, setIsVisible] = useState(false);
    const projectRef = useRef(null);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Element görünür hale geldiğinde
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0 } // Elementin yarıdan fazlası göründüğünde
        );

        if (projectRef.current) {
            observer.observe(projectRef.current);
        }

        return () => {
            // Komponent kaldırıldığında observer'ı temizle
            observer.disconnect();
        };
    }, []);

    return (
        <div id="project" className="container mx-auto mt-28 max-lg:px-4">
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{
                    opacity: isVisible ? 1 : 0,
                    x: isVisible ? 0 : -100,
                }}
                transition={{ duration: 1 }}
            >
                <p className="text-5xl text-[#0c8ecf] font-bold varela-round-bold">
                    {t("navproje")}
                </p>
            </motion.div>
            <div
                ref={projectRef}
                className="flex flex-wrap justify-between pt-10"
            >
                <div className="w-2/6 max-lg:w-2/4 max-md:w-full">
                    <div className="px-3 pt-3 ">
                        <p className="bg-blue-400 h-24 text-white varela-round-bold shadow-md rounded-tl-lg rounded-tr-lg p-4 flex justify-center items-center text-center">
                            {t("proje1")}
                        </p>
                    </div>
                    <div className="mx-3 bg-slate-100 shadow-md">
                        <img className="p-4" src={ankara} alt="Ankara" />
                    </div>
                </div>
                <div className="w-2/6 max-lg:w-2/4 max-md:w-full">
                    <div className="px-3 pt-3 ">
                        <p className="bg-blue-400 h-24 text-white varela-round-bold shadow-md rounded-tl-lg rounded-tr-lg p-4 flex justify-center items-center text-center">
                            {t("proje2")}
                        </p>
                    </div>
                    <div className="mx-3 bg-slate-100 shadow-md">
                        <img className="p-4" src={antalya} alt="Ankara " />
                    </div>
                </div>
                <div className="w-2/6 max-lg:w-2/4 max-md:w-full">
                    <div className="px-3 pt-3 ">
                        <p className="bg-blue-400 h-24 text-white varela-round-bold shadow-md rounded-tl-lg rounded-tr-lg p-4 flex justify-center items-center text-center">
                            {t("proje3")}
                        </p>
                    </div>
                    <div className="mx-3 bg-slate-100 shadow-md">
                        <img className="p-4" src={tedizmir} alt="Ankara " />
                    </div>
                </div>
                <div className="w-2/6 max-lg:w-2/4 max-md:w-full">
                    <div className="px-3 pt-3 ">
                        <p className="bg-blue-400 h-24 text-white varela-round-bold shadow-md rounded-tl-lg rounded-tr-lg p-4 flex justify-center items-center text-center">
                            {t("proje4")}
                        </p>
                    </div>
                    <div className="mx-3 bg-slate-100 shadow-md">
                        <img className="p-4" src={maidimitri} alt="Ankara " />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
