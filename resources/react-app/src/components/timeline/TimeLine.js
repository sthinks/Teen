import React, { useEffect, useRef, useState } from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function TimeLine() {
    const [isVisible, setIsVisible] = useState(false);
    const aboutRef = useRef(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );
        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }
        return () => {
            observer.disconnect();
        };
    }, []);
    return (
        <div className={`container mx-auto mt-10 `} ref={aboutRef}>
            <div className="w-full">
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconStyle={{
                            background: "#eb8f3a",
                            color: "#fff",
                        }}
                        icon={
                            <p
                                style={{
                                    transform: "rotate(-180deg)",
                                    writingMode: "vertical-rl",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100%",
                                    height: "100%",
                                }}
                            >
                                Technic
                            </p>
                        }
                    >
                        <h3 className="vertical-timeline-element-title text-gray-700 font-bold text-2xl px-2">
                            2021
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle bg-[#7fc9d2] text-white text-2xl varela-round-bold px-2 py-6 rounded-tl-xl rounded-tr-xl">
                            ENTEGRE TESİS YÖNETİMİ
                        </h4>
                        <ul className="list-disc pl-5 mt-5">
                            <li>
                                Ankara Bilkent Şehir Hastanesi Mersin Şehir
                                Hastanesi
                            </li>
                        </ul>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconStyle={{
                            background: "#eb8f3a",
                            color: "#fff",
                        }}
                        icon={
                            <p
                                style={{
                                    transform: "rotate(-180deg)",
                                    writingMode: "vertical-rl",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100%",
                                    height: "100%",
                                }}
                            >
                                CCN
                            </p>
                        }
                    >
                        <h3 className="vertical-timeline-element-title text-gray-700 font-bold text-2xl px-2">
                            2022
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle bg-[#7fc9d2] text-white text-2xl varela-round-bold px-2 py-6 rounded-tl-xl rounded-tr-xl">
                            YENİLENEBİLİR ENERJİ PROJELERİ
                        </h4>
                        <ul className="list-disc pl-5 mt-5">
                            <li>TED İzmir Koleji</li>
                            <li>TED Kocaeli Koleji</li>
                            <li>IC Hotels Antalya</li>
                        </ul>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconStyle={{
                            background: "#1b477a",
                            color: "#fff",
                        }}
                        icon={
                            <p
                                style={{
                                    transform: "rotate(-180deg)",
                                    writingMode: "vertical-rl",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100%",
                                    height: "100%",
                                }}
                            >
                                T-EEN TECHNIC
                            </p>
                        }
                    >
                        <h3 className="vertical-timeline-element-title text-gray-700 font-bold text-2xl px-2">
                            2023
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle bg-[#7fc9d2] text-white text-2xl varela-round-bold px-2 py-6 rounded-tl-xl rounded-tr-xl">
                            KAMU BİNALARINDA ENERJİ VERİMLİLİĞİ PROJESİ -
                            ANTALYA
                        </h4>

                        <ol className="list-disc pl-5 mt-5">
                            <li>Antalya Eğitim ve Araştırma Hastanesi</li>
                            <li>Elmalı Hastanesi</li>
                            <li> Alanya Eğitim ve Araştırma Hastanesi</li>
                        </ol>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconStyle={{
                            background: "#1b477a",
                            color: "#fff",
                        }}
                        icon={
                            <p
                                style={{
                                    transform: "rotate(-180deg)",
                                    writingMode: "vertical-rl",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100%",
                                    height: "100%",
                                }}
                            >
                                T-EEN TECHNIC
                            </p>
                        }
                    >
                        <h3 className="vertical-timeline-element-title text-gray-700 font-bold text-2xl px-2">
                            2023
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle bg-[#7fc9d2] text-white text-2xl varela-round-bold px-2 py-6 rounded-tl-xl rounded-tr-xl">
                            KAMU BİNALARINDA ENERJİ VERİMLİLİĞİ PROJESİ -
                            DENİZLİ
                        </h4>

                        <ol className="list-disc pl-5 mt-5">
                            <li>Pamukkale Üniversitesi (nZEB)</li>
                            <li>19 Bina</li>
                        </ol>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        iconStyle={{
                            background: "#1b477a",
                            color: "#fff",
                        }}
                        icon={
                            <p
                                style={{
                                    transform: "rotate(-180deg)",
                                    writingMode: "vertical-rl",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100%",
                                    height: "100%",
                                }}
                            >
                                T-EEN TECHNIC
                            </p>
                        }
                    >
                        <h3 className="vertical-timeline-element-title text-gray-700 font-bold text-2xl px-2">
                            2024
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle bg-[#7fc9d2] text-white text-2xl varela-round-bold px-2 py-6 rounded-tl-xl rounded-tr-xl">
                            KAMU BİNALARINDA ENERJİ VERİMLİLİĞİ PROJESİ - ALANYA
                        </h4>

                        <ol className="list-disc pl-5 mt-5">
                            <li>Alanya Adliyesi</li>
                            <li>Gazipaşa Hastanesi</li>
                        </ol>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        iconStyle={{
                            background: "#1b477a",
                            color: "#fff",
                        }}
                        icon={
                            <p
                                style={{
                                    transform: "rotate(-180deg)",
                                    writingMode: "vertical-rl",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100%",
                                    height: "100%",
                                }}
                            >
                                T-EEN TECHNIC
                            </p>
                        }
                    >
                        <h4 className="vertical-timeline-element-subtitle bg-[#7fc9d2] text-white text-2xl varela-round-bold px-2 py-6 rounded-tl-xl rounded-tr-xl">
                            KAMU BİNALARINDA ENERJİ VERİMLİLİĞİ PROJESİ -
                            SAKARYA, BURSA, KARABÜK
                        </h4>

                        <ol className="list-disc pl-5 mt-5">
                            <li>
                                Sakarya Eğitim ve Araştırma Hastanesi Korucuk
                                Kampüsü
                            </li>
                            <li>
                                Bursa Atatürk Mesleki ve Teknik Anadolu Lisesi
                                Karabük Valiliği
                            </li>
                        </ol>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        iconStyle={{
                            background: "#1b477a",
                            color: "#fff",
                        }}
                        icon={
                            <p
                                style={{
                                    transform: "rotate(-180deg)",
                                    writingMode: "vertical-rl",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100%",
                                    height: "100%",
                                }}
                            >
                                T-EEN TECHNIC
                            </p>
                        }
                    >
                        <h4 className="vertical-timeline-element-subtitle bg-[#7fc9d2] text-white text-2xl varela-round-bold px-2 py-6 rounded-tl-xl rounded-tr-xl">
                            ELEKTRİKLİ ARAÇ ŞARJ İSTASYON YATIRIMLARI
                        </h4>

                        <ol className="list-disc pl-5 mt-5">
                            <li>Ankara Bilkent Şehir Hastanesi</li>
                            <li>IC Otelleri Antalya</li>
                            <li>T.C. Sağlık Bakanlığı</li>
                        </ol>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        iconStyle={{
                            background: "#1b477a",
                            color: "#fff",
                        }}
                        icon={
                            <p
                                style={{
                                    transform: "rotate(-180deg)",
                                    writingMode: "vertical-rl",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100%",
                                    height: "100%",
                                }}
                            >
                                T-EEN TECHNIC
                            </p>
                        }
                    >
                        <h4 className="vertical-timeline-element-subtitle bg-[#7fc9d2] text-white text-2xl varela-round-bold px-2 py-6 rounded-tl-xl rounded-tr-xl">
                            ENERJİ VERİMLİLİĞİ KAMU BİNALARI PROJELERİ
                        </h4>

                        <ol className="list-disc pl-5 mt-5">
                            <li>Türkiye Projeleri</li>
                            <li>Avrupa Projeleri</li>
                        </ol>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        iconStyle={{
                            background: "#1b477a",
                            color: "#fff",
                        }}
                        icon={
                            <p
                                style={{
                                    transform: "rotate(-180deg)",
                                    writingMode: "vertical-rl",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100%",
                                    height: "100%",
                                }}
                            >
                                T-EEN TECHNIC
                            </p>
                        }
                    >
                        <h4 className="vertical-timeline-element-subtitle bg-[#7fc9d2] text-white text-2xl varela-round-bold px-2 py-6 rounded-tl-xl rounded-tr-xl">
                            KENTSEL VE ENERJİ VERİMLİLİĞİ İÇİN BÜTÜNSEL ÇÖZÜMLER
                        </h4>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        iconStyle={{
                            background: "#1b477a",
                            color: "#fff",
                        }}
                        icon={
                            <p
                                style={{
                                    transform: "rotate(-180deg)",
                                    writingMode: "vertical-rl",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100%",
                                    height: "100%",
                                }}
                            >
                                T-EEN TECHNIC
                            </p>
                        }
                    >
                        <h4 className="vertical-timeline-element-subtitle bg-[#7fc9d2] text-white text-2xl varela-round-bold px-2 py-6 rounded-tl-xl rounded-tr-xl">
                            YENİLENEBİLİR ENERJİ UYGULAMALARI İÇİN TEKNOLOJİK
                            ÇÖZÜMLER
                        </h4>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    );
}

export default TimeLine;
