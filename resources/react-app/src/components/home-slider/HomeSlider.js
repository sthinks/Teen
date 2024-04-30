import React from "react";
import sliderImage from "../../assets/home-slider/home-slider.jpg";
function HomeSlider() {
    return (
        <div
            id="home"
            className="relative flex justify-center items-center h-[600px] max-lg:h-[300px] w-full ovalAlt"
        >
            <div className="bg-black opacity-50 absolute top-0 left-0 w-full h-full" />
            <img
                className="object-cover w-full h-full"
                src={sliderImage}
                alt="Teen Technic"
            />
            <div className="absolute z-50">
                <p className="text-7xl max-lg:text-2xl text-white font-semibold tracking-wide flex">
                    <span className="text-[#51b36c] font-bold w-12 max-lg:w-4">
                        T
                    </span>
                    ECHNOLOGY
                </p>
                <p className="text-7xl max-lg:text-2xl text-white font-semibold tracking-wide flex">
                    <span className="text-[#0c8ecf] font-bold  w-12 max-lg:w-4">
                        E
                    </span>
                    NERGY
                </p>
                <p className="text-7xl max-lg:text-2xl text-white font-semibold tracking-wide flex">
                    <span className="text-[#0c8ecf] font-bold  w-12 max-lg:w-4">
                        E
                    </span>
                    NVIRONMENT
                </p>
                <p className="text-7xl max-lg:text-2xl text-white font-semibold tracking-wide flex">
                    <span className="text-[#0c8ecf] font-bold  w-12 max-lg:w-4">
                        N
                    </span>
                    EXUS
                </p>
            </div>
        </div>
    );
}

export default HomeSlider;
