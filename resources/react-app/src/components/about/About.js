import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import aboutImage from "../../assets/about/about-image.jpg";
import infoaboutimage from "../../assets/about/infoaboutimage.png";
import ReactPlayer from "react-player";
function About({ isMobile }) {
    const controls = useAnimation();

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
                    Hakkımızda
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
                        Daha İyi Bir Gelecek için Sürdürülebilir Çözümler
                    </p>
                    <br />
                    <p className="varela-round-med  text-lg text-gray-700">
                        T-EEN TECHNIC, sürdürülebilirlik odaklı enerji
                        verimliliği projeleriyle paydaşlarına değer katıyor.
                        Yenilikçi çözümlerle yenilenebilir enerji, enerji
                        verimliliği, danışmanlık ve uygulama hizmetleri sunuyor.
                        Akıllı bina teknolojileri ve dijital çözümlerle
                        sürdürülebilir uygulamaların hayata geçirilmesini
                        sağlarken, ayrıca operasyonel verimliliği artırmak için
                        ekipmanları sürdürülebilir alternatiflerle değiştiriyor
                        ve elektrikli araç şarj çözümleri gibi son teknoloji
                        ürünlerini stratejik ortaklıklarla sunuyor.
                    </p>
                    <br />
                    <p className="varela-round-med  text-lg text-gray-700">
                        Kurulduğu günden itibaren 59,000 hane halkının yıllık
                        elektrik tüketim ihtiyaçlarına eşdeğer tasarruf sağlayan
                        T-EEN TECHNIC, gerçekleştirdiği projelerle ve sunduğu
                        çözümlerle Türkiye'nin 2053 yılı net sıfır emisyon
                        hedefine katkıda bulunuyor.
                    </p>
                </div>
            </div>
            <img
                className="w-full h-full mt-10"
                src={infoaboutimage}
                alt="Teen Technic"
            />
        </div>
    );
}

export default About;
