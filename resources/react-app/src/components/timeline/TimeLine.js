import React, { useEffect, useRef, useState } from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTranslation } from "react-i18next";

function TimeLine() {
    const [isVisible, setIsVisible] = useState(false);
    const { t, i18n } = useTranslation();

    const timeRef = useRef(null);
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
            { threshold: 0 }
        );
        if (timeRef.current) {
            observer.observe(timeRef.current);
        }
        return () => {
            observer.disconnect();
        };
    }, []);
    return (
        <div className={`container mx-auto mt-10 `} ref={timeRef}>
            <div className="w-full">
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconStyle={{
                            background: "#eb8f30",
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
                            2014
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle bg-[#eb8f30] text-white text-2xl varela-round-bold px-2 py-6 rounded-tl-xl rounded-tr-xl">
                            {t("timeline1")}
                        </h4>
                        <ul className="list-disc pl-5 mt-5">
                            <li>{t("timeline2")}</li>
                        </ul>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconStyle={{
                            background: "#eb8f30",
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
                            2019
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle bg-[#eb8f30] text-white text-2xl varela-round-bold px-2 py-6 rounded-tl-xl rounded-tr-xl">
                            {t("timeline3")}
                        </h4>
                        <ul className="list-disc pl-5 mt-5">
                            <li>{t("timeline4")}</li>
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
                            2021
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle bg-[#eb8f30] text-white text-2xl varela-round-bold px-2 py-6 rounded-tl-xl rounded-tr-xl">
                            {t("timeline5")}
                        </h4>

                        <ol className="list-disc pl-5 mt-5">
                            <li>{t("timeline6")}</li>
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
                        <h4 className="vertical-timeline-element-subtitle bg-gradient-to-r from-[#4787b4] to-[#629d7f] text-white text-2xl varela-round-bold px-2 py-6 rounded-tl-xl rounded-tr-xl">
                            {t("timeline7")}
                        </h4>

                        <ol className="list-disc pl-5 mt-5">
                            <li>{t("timeline8")}</li>
                            <li>{t("timeline9")}</li>
                            <li>{t("timeline10")}</li>
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
                        <h4 className="vertical-timeline-element-subtitle bg-gradient-to-r from-[#4787b4] to-[#629d7f] text-white text-2xl varela-round-bold px-2 py-6 rounded-tl-xl rounded-tr-xl">
                            {t("timeline11")}
                        </h4>

                        <ol className="list-disc pl-5 mt-5">
                            <li>{t("timeline12")}</li>
                            <li>{t("timeline13")}</li>
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
                        <h4 className="vertical-timeline-element-subtitle bg-gradient-to-r from-[#4787b4] to-[#629d7f] text-white text-2xl varela-round-bold px-2 py-6 rounded-tl-xl rounded-tr-xl">
                            {t("timeline14")}
                        </h4>

                        <ol className="list-disc pl-5 mt-5">
                            <li>{t("timeline15")}</li>
                            <li>{t("timeline16")}</li>
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
                        <h4 className="vertical-timeline-element-subtitle bg-gradient-to-r from-[#4787b4] to-[#629d7f] text-white text-2xl varela-round-bold px-2 py-6 rounded-tl-xl rounded-tr-xl">
                            {t("timeline17")}
                        </h4>

                        <ol className="list-disc pl-5 mt-5">
                            <li>{t("timeline18")}</li>
                            <li>{t("timeline19")}</li>
                            <li>{t("timeline20")}</li>
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
                        <h4 className="vertical-timeline-element-subtitle bg-gradient-to-r from-[#4787b4] to-[#629d7f] text-white text-2xl varela-round-bold px-2 py-6 rounded-tl-xl rounded-tr-xl">
                            {t("timeline21")}
                        </h4>

                        <ol className="list-disc pl-5 mt-5">
                            <li>{t("timeline22")}</li>
                            <li>{t("timeline23")}</li>
                            <li>{t("timeline24")}</li>
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
                        <h4 className="vertical-timeline-element-subtitle bg-gradient-to-r from-[#4787b4] to-[#629d7f] text-white text-2xl varela-round-bold px-2 py-6 rounded-tl-xl rounded-tr-xl">
                            {t("timeline25")}
                        </h4>
                        <ol className="list-disc pl-5 mt-5">
                            <li>{t("timeline26")}</li>
                            <li>{t("timeline27")}</li>
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
                        <h4 className="vertical-timeline-element-subtitle bg-gradient-to-r from-[#4787b4] to-[#629d7f] text-white text-2xl varela-round-bold px-2 py-6 rounded-tl-xl rounded-tr-xl">
                            {t("timeline28")}
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
                        <h4 className="vertical-timeline-element-subtitle bg-gradient-to-r from-[#4787b4] to-[#629d7f] text-white text-2xl varela-round-bold px-2 py-6 rounded-tl-xl rounded-tr-xl">
                            {t("timeline29")}
                        </h4>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    );
}

export default TimeLine;
