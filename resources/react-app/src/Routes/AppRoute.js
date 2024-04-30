import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Header from "../components/header/Header";
import { ParallaxProvider } from "react-scroll-parallax";
import ScrollToTop from "react-scroll-up";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useEffect, useState } from "react";
function AppRoute() {
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
    return (
        <ParallaxProvider>
            <Header />

            <Routes>
                <Route>
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>

            {windowWidth > 768 && (
                <ScrollToTop showUnder={160}>
                    <div className="bg-white border-4 hover:border-2 duration-150 delay-150 border-[#51b26b] w-10 h-10 rounded-full flex justify-center items-center">
                        <MdKeyboardArrowUp className="text-black text-4xl" />
                    </div>
                </ScrollToTop>
            )}
        </ParallaxProvider>
    );
}

export default AppRoute;
