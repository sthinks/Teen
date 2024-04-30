import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import rslogo from "../../assets/solutions-partner/rslogo.png";
import wiseralogo from "../../assets/solutions-partner/wiseralogo.png";
import { useTranslation } from "react-i18next";

function SolutionsPartner() {
    const [isVisible, setIsVisible] = useState(false);
    const solpartRef = useRef(null);
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

        if (solpartRef.current) {
            observer.observe(solpartRef.current);
        }

        return () => {
            // Komponent kaldırıldığında observer'ı temizle
            observer.disconnect();
        };
    }, []);

    return (
        <div
            className="container mx-auto mt-28 max-lg:px-4"
            id="solutionspartner"
            ref={solpartRef}
        >
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{
                    opacity: isVisible ? 1 : 0,
                    x: isVisible ? 0 : -100,
                }}
                transition={{ duration: 1 }}
            >
                <div className="w-full flex justify-start">
                    <p className="text-5xl text-[#0c8ecf] font-bold varela-round-bold">
                        {t("navsolutionpartner")}
                    </p>
                </div>
            </motion.div>

            <div className="flex w-full gap-10 mt-20  justify-around items max-lg:flex-col">
                <div className="w-2/6 max-lg:w-full flex flex-col justify-start bg-white p-5 shadow-2xl rounded">
                    <div className="w-full flex justify-center">
                        <img
                            className="w-36 mb-4"
                            src={wiseralogo}
                            alt="Rs Şarj Logo"
                        />
                    </div>
                    <div className="mt-2">
                        <p className="varela-round-med text-lg text-gray-700">
                            {t("solpart1")}
                        </p>
                    </div>
                </div>
                <div className="w-2/6 max-lg:w-full flex flex-col justify-start bg-white p-5 shadow-2xl rounded">
                    <div className="w-full flex justify-center">
                        <img
                            className="w-36 mb-4"
                            src={rslogo}
                            alt="Rs Şarj Logo"
                        />
                    </div>
                    <div className="mt-2">
                        <p className="varela-round-med text-lg text-gray-700">
                            {t("solpart2")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SolutionsPartner;
