import React, { useEffect, useState } from "react";
import HomeSlider from "../../components/home-slider/HomeSlider";
import About from "../../components/about/About";
import { useParallax } from "react-scroll-parallax";
import Solutions from "../../components/solutions/Solutions";
import SolutionsPartner from "../../components/solutions-partner/SolutionsPartner";
import Productivity from "../../components/productivity/Productivity";
import Project from "../../components/projects/Project";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import ContantInfo from "../../components/contact/ContantInfo";
import TimeLine from "../../components/timeline/TimeLine";
import Schema from "../../components/schema/Schema";

function Home() {
    const { ref } = useParallax({ speed: 0 });
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Örnek olarak 768 pikseli mobil olarak kabul ediyoruz
        };

        // Sayfa boyutu değiştiğinde yeniden boyutlandırma işlevini çağırın
        window.addEventListener("resize", handleResize);

        // Component kaldırıldığında event listener'ı temizleyin
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div ref={ref} className="flex flex-col justify-center">
            <HomeSlider />

            <About isMobile={isMobile} />
            <TimeLine isMobile={isMobile} />
            <SolutionsPartner isMobile={isMobile} />
            <Solutions isMobile={isMobile} />
            <Productivity />
            <Project isMobile={isMobile} />
            <Contact isMobile={isMobile} />
            <ContantInfo isMobile={isMobile} />

            <Footer />
        </div>
    );
}

export default Home;
