import React from "react";
import enerjidön from "../../assets/productivity/enerjidön.png";
import { motion } from "framer-motion";

function Productivity() {
    return (
        <div className="container mx-auto mt-28">
            <motion.div
                initial={{ opacity: 0, x: 100 }} // Başlangıçta opaklık ve sağa doğru kayması
                animate={{ opacity: 1, x: 0 }} // Animasyon sonunda opaklık ve sola doğru hareket etmesi
                transition={{ duration: 1 }} // Geçiş süresi
            >
                <div className="w-full flex justify-end">
                    <p className="text-5xl text-[#0c8ecf] font-bold varela-round-bold">
                        Enerji Verimliliği Yönetim Döngüsü
                    </p>
                </div>
            </motion.div>
            <div className="w-full mt-10 flex justify-center items-center">
                <div className="w-2/4">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }} // Başlangıçta opaklık ve sola doğru kayması
                        animate={{ opacity: 1, x: 0 }} // Animasyon sonunda opaklık ve sağa doğru hareket etmesi
                        transition={{ duration: 1 }} // Geçiş süresi
                    >
                        <img
                            className="w-3/4"
                            src={enerjidön}
                            alt="Enerji Dönüşüm"
                        />
                    </motion.div>
                </div>
                <div className="w-2/4">
                    <p className="varela-round-med text-xl text-gray-700 pt-10 pl-10 pb-10">
                        Enerji verimliliği proje süreçlerimizi sürdürülebilirlik
                        alanında 5 adımlı bir döngüyü baz alarak yürütüyoruz.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Productivity;
