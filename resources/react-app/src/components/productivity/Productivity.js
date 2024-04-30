import React, { useEffect, useRef, useState } from "react";
import enerjitr from "../../assets/productivity/enerjieng.png";
import enerjieng from "../../assets/productivity/enerjitr.png";
import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";

function Productivity() {
    const [isVisible, setIsVisible] = useState(false);
    const productiviRef = useRef(null);
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

        if (productiviRef.current) {
            observer.observe(productiviRef.current);
        }

        return () => {
            // Komponent kaldırıldığında observer'ı temizle
            observer.disconnect();
        };
    }, []);

    return (
        <div className="container mx-auto mt-28">
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{
                    opacity: isVisible ? 1 : 0,
                    x: isVisible ? 0 : -100,
                }}
                transition={{ duration: 1 }}
            >
                <p className="text-5xl text-[#0c8ecf] font-bold varela-round-bold">
                    {t("enerjiver")}
                </p>
            </motion.div>
            <div
                ref={productiviRef}
                className="w-full flex-col mt-10 flex justify-center items-center"
            >
                <div className="w-full">
                    <p className="varela-round-med text-xl text-gray-700 pt-10 pb-10">
                        {t("enerjivertext")}
                    </p>
                </div>
                <div className="w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }} // Başlangıçta opaklık ve sola doğru kayması
                        animate={{ opacity: 1, x: 0 }} // Animasyon sonunda opaklık ve sağa doğru hareket etmesi
                        transition={{ duration: 1 }} // Geçiş süresi
                    >
                        {i18n.language !== "tr" ? (
                            <img
                                className="w-full"
                                src={enerjitr}
                                alt="Enerji Dönüşüm"
                            />
                        ) : (
                            <img
                                className="w-full"
                                src={enerjieng}
                                alt="Enerji Dönüşüm"
                            />
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Productivity;
