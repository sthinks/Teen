import React, { useEffect, useRef, useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

function ContantInfo() {
    return (
        <div className="w-full h-auto bg-slate-100 mt-28 max-lg:px-4">
            <div className="container mx-auto">
                <div className="w-full flex justify-around flex-wrap py-10 max-lg:flex-col max-lg:gap-5">
                    <a href="tel:+903122202400" className="w-2/6 max-lg:w-full">
                        <div className="flex justify-center items-center flex-col gap-4">
                            <div className="w-20 h-20 bg-[#63b449] rounded-full flex justify-center items-center hover:-translate-y-2  duration-300">
                                <FaPhoneAlt className="text-4xl  text-white" />
                            </div>
                            <p className="varela-round-med">
                                0 (312) 220 24 00
                            </p>
                        </div>
                    </a>

                    <a
                        href="mailto:info@TeenTechnic.com"
                        className="w-2/6 max-lg:w-full"
                    >
                        <div className="flex justify-center items-center flex-col gap-4">
                            <div className="w-20 h-20 bg-[#63b449] rounded-full flex justify-center items-center hover:-translate-y-2  duration-300">
                                <IoMail className="text-4xl text-white" />
                            </div>
                            <p className="varela-round-med">
                                info@TeenTechnic.com
                            </p>
                        </div>
                    </a>

                    <div className="flex justify-center items-center flex-col gap-4 w-2/6 max-lg:w-full">
                        <div className="w-20 h-20 bg-[#63b449] rounded-full flex justify-center items-center hover:-translate-y-2  duration-300">
                            <FaMapMarkerAlt className="text-4xl text-white " />
                        </div>
                        <p className="varela-round-med">
                            Üniversiteler Mahallesi 1604. Cadde No. 9 / 1 / 118
                            <br />
                            Çankaya / Ankara
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContantInfo;
