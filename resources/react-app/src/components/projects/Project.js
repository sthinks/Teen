import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ankara from "../../assets/project/ankara.png";
import mersin from "../../assets/project/mersin.png";

import alanya from "../../assets/project/alanya.png";
import alanyaadliyesi from "../../assets/project/alanyaadliyesi.png";
import antalya from "../../assets/project/antalya.png";
import gazipasa from "../../assets/project/gazipasa.png";
import pamukkale from "../../assets/project/pamukkale.png";
import elmalı from "../../assets/project/elmalı.png";

import altunizade from "../../assets/project/altunizade.png";
import tedizmir from "../../assets/project/tedizmir.png";
import tedkocaeli from "../../assets/project/tedkocaeli.png";
import icsantai from "../../assets/project/icsantai.png";
import icairport from "../../assets/project/icairport.png";

import shusha from "../../assets/project/shusha.png";
import maidimitri from "../../assets/project/maidimitri.png";

function Project() {
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
        <div
            id="project"
            className="container mx-auto mt-28 max-lg:px-4"
            ref={aboutRef}
        >
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{
                    opacity: isVisible ? 1 : 0,
                    x: isVisible ? 0 : -100,
                }}
                transition={{ duration: 1 }}
            >
                <p className="text-5xl text-[#0c8ecf] font-bold varela-round-bold">
                    Projeler
                </p>
            </motion.div>
            <div className="flex flex-wrap justify-between mt-10">
                <div className="w-2/6 max-lg:w-2/4 max-md:w-full">
                    <div className="px-3 pt-3 ">
                        <p className="bg-blue-400 h-24 text-white varela-round-bold shadow-md rounded-tl-lg rounded-tr-lg p-4 flex justify-center items-center text-center">
                            SÜRDÜRÜLEBİLİRLİK VE ENERJİ YÖNETİMİ PROJELERİ
                        </p>
                    </div>
                    <div className="mx-3 bg-slate-100 shadow-md">
                        <img className="p-4" src={ankara} alt="Ankara" />
                    </div>
                </div>
                <div className="w-2/6 max-lg:w-2/4 max-md:w-full">
                    <div className="px-3 pt-3 ">
                        <p className="bg-blue-400 h-24 text-white varela-round-bold shadow-md rounded-tl-lg rounded-tr-lg p-4 flex justify-center items-center text-center">
                            ENERJİ VERİMLİLİĞİ PROJELERİ
                        </p>
                    </div>
                    <div className="mx-3 bg-slate-100 shadow-md">
                        <img className="p-4" src={antalya} alt="Ankara " />
                    </div>
                </div>
                <div className="w-2/6 max-lg:w-2/4 max-md:w-full">
                    <div className="px-3 pt-3 ">
                        <p className="bg-blue-400 h-24 text-white varela-round-bold shadow-md rounded-tl-lg rounded-tr-lg p-4 flex justify-center items-center text-center">
                            YENİLENEBİLİR ENERJİ PROJELERİ
                        </p>
                    </div>
                    <div className="mx-3 bg-slate-100 shadow-md">
                        <img className="p-4" src={tedizmir} alt="Ankara " />
                    </div>
                </div>
                <div className="w-2/6 max-lg:w-2/4 max-md:w-full">
                    <div className="px-3 pt-3 ">
                        <p className="bg-blue-400 h-24 text-white varela-round-bold shadow-md rounded-tl-lg rounded-tr-lg p-4 flex justify-center items-center text-center">
                            ENERJİ VERİMLİLİĞİ VE YENİLENEBİLİR ENERJİ
                            DANIŞMANLIĞI
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
