import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import bitki from "../../assets/solutions/bitki.png";
import car from "../../assets/solutions/car.png";
import energy from "../../assets/solutions/enerjy.png";
import iso from "../../assets/solutions/iso.png";
import proje from "../../assets/solutions/proje.png";
import rev from "../../assets/solutions/rev.png";
import stat from "../../assets/solutions/stat.png";
import uplogo from "../../assets/solutions/uplogo.png";
import Slider from "react-slick";
function Solutions() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 2,
        autoplay: true,
        autoplaySpeed: 1500,
        arrow: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    arrow: false,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    arrow: false,
                    dots: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrow: false,
                    dots: false,
                },
            },
        ],
    };
    const data = [
        {
            title: "Enerjy Etüd",
            img: rev,
        },
        {
            title: "Enerji Verimliliği ve Yenilenebilir Enerji Danışmanlığı",
            img: stat,
        },

        {
            title: "Proje Uygulama",
            img: proje,
        },
        {
            title: "Verimlilik Artırıcı Proje (VAP) Danışmanlığı",
            img: uplogo,
        },
        {
            title: "Sürdürülebilirlik ve Enerji Yönetimi",
            img: bitki,
        },
        {
            title: "Enerji İzleme Yönetimi",
            img: energy,
        },
        {
            title: "ISO - 50001",
            img: iso,
        },
        {
            title: "Elektrikli Şarj Çözümleri",
            img: car,
        },
    ];
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
            id="solutions"
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
                    Çözümler
                </p>
            </motion.div>

            <Slider className="mt-10" {...settings}>
                {data.map((item, i) => (
                    <div className="p-2 w-48 h-48 gap-6" key={i}>
                        <div className="w-full h-full border border-[#51b26b] flex justify-center items-center flex-col rounded-2xl">
                            <img
                                className="object-cover"
                                alt={item.title}
                                src={item.img}
                            />
                            <p className="text-center varela-round-med text-lg">
                                {item.title}
                            </p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Solutions;
