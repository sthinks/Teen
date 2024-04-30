import React, { useState } from "react";
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

import { MdKeyboardArrowDown } from "react-icons/md";
function Project() {
    const [category, setCategory] = useState(1);
    const data = [
        {
            title: "Ankara Bilkent Şehir Hastanesi",
            img: ankara,
            cat: 1,
        },
        {
            title: "Mersin Şehir Hastanesi",
            img: mersin,
            cat: 1,
        },

        {
            title: "Antalya Eğitim ve Araştırma Hastanesi",
            img: antalya,
            cat: 2,
        },

        {
            title: "Alanya Eğitim ve Araştırma Hastanesi",
            img: alanya,
            cat: 2,
        },
        {
            title: "Elmalı Hastanesi",
            img: elmalı,
            cat: 2,
        },
        {
            title: "Gazipaşa Hastanesi",
            img: gazipasa,
            cat: 2,
        },
        {
            title: "Alanya Adliyesi",
            img: alanyaadliyesi,
            cat: 2,
        },
        {
            title: "Pamukkale Üniversitesi (NZEB)",
            img: pamukkale,
            cat: 2,
        },
        {
            title: "TED İzmir Koleji",
            img: tedizmir,
            cat: 3,
        },
        {
            title: "TED Kocaeli Koleji",
            img: tedkocaeli,
            cat: 3,
        },
        {
            title: "IC Airport Hotel",
            img: icairport,
            cat: 3,
        },
        {
            title: "IC Santai Family Resort Hotel",
            img: icsantai,
            cat: 3,
        },
        {
            title: "Altunizade DoubleTree Hilton Hotel",
            img: altunizade,
            cat: 3,
        },
        {
            title: "Mai Dimitri Gerota Hospital",
            img: maidimitri,
            cat: 4,
        },
        {
            title: "Shusha Hotel & Conference Center",
            img: shusha,
            cat: 4,
        },
    ];
    return (
        <div className="container mx-auto mt-28">
            <motion.div
                initial={{ opacity: 0, x: -100 }} // Başlangıçta opaklık ve sola doğru kayması
                animate={{ opacity: 1, x: 0 }} // Animasyon sonunda opaklık ve sağa doğru hareket etmesi
                transition={{ duration: 1 }} // Geçiş süresi
            >
                <p className="text-5xl text-[#0c8ecf] font-bold varela-round-bold">
                    Projeler
                </p>
            </motion.div>
            <div className="mt-10">
                <div className="flex gap-2 items-center varela-round-bold text-[#63b449] mt-5">
                    <p className="capitalize varela-round-bold text-[#63b449] text-2xl cursor-pointer">
                        SÜRDÜRÜLEBİLİRLİK VE ENERJİ YÖNETİMİ PROJELERİ{" "}
                    </p>
                    <MdKeyboardArrowDown className="text-3xl" />
                </div>
                <div className="flex flex-wrap justify-start items-start">
                    {data.map(
                        (item, i) =>
                            item.cat === 1 && (
                                <div className="w-1/4 h-full mt-5" key={i}>
                                    {" "}
                                    <img
                                        className="pr-2 w-full h-full object-cover"
                                        src={item.img}
                                        alt={item.title}
                                    />
                                </div>
                            )
                    )}
                </div>
                <div className="flex gap-2 items-center varela-round-bold text-[#63b449] mt-5">
                    <p className="capitalize varela-round-bold text-[#63b449] text-2xl cursor-pointer">
                        ENERJİ VERİMLİLİĞİ PROJELERİ
                    </p>
                    <MdKeyboardArrowDown className="text-3xl" />
                </div>{" "}
                <div className="flex flex-wrap justify-start items-start">
                    {data.map(
                        (item, i) =>
                            item.cat === 2 && (
                                <div className="w-1/4 mt-5" key={i}>
                                    {" "}
                                    <img
                                        className="pr-2 w-full h-full object-cover"
                                        src={item.img}
                                        alt={item.title}
                                    />
                                </div>
                            )
                    )}
                </div>
                <div className="flex gap-2 items-center varela-round-bold text-[#63b449] mt-5">
                    <p className="capitalize varela-round-bold text-[#63b449] text-2xl cursor-pointer">
                        YENİLENEBİLİR ENERJi PROJELERİ
                    </p>
                    <MdKeyboardArrowDown className="text-3xl" />
                </div>
                <div className="flex flex-wrap justify-start items-start">
                    {data.map(
                        (item, i) =>
                            item.cat === 3 && (
                                <div className="w-1/4 mt-5 " key={i}>
                                    {" "}
                                    <img
                                        className="pr-2 w-full h-full object-cover"
                                        src={item.img}
                                        alt={item.title}
                                    />
                                </div>
                            )
                    )}
                </div>
                <div className="flex gap-2 items-center varela-round-bold text-[#63b449] mt-5">
                    <p className="capitalize varela-round-bold text-[#63b449] text-2xl cursor-pointer">
                        ENERJİ VERİMLİLİĞİ VE YENİLENEBİLİR ENERJİ DANIŞMANLIĞI
                    </p>
                    <MdKeyboardArrowDown className="text-3xl" />
                </div>
                <div className="flex flex-wrap justify-start items-start">
                    {data.map(
                        (item, i) =>
                            item.cat === 4 && (
                                <div className="w-1/4 mt-5" key={i}>
                                    {" "}
                                    <img
                                        className="pr-2 w-full h-full object-cover"
                                        src={item.img}
                                        alt={item.title}
                                    />
                                </div>
                            )
                    )}
                </div>
            </div>
        </div>
    );
}

export default Project;
