import React, { useEffect, useRef, useState } from "react";
import { BsSend } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import generalService from "../../service/generalService";

const Contact = () => {
    const validationSchema = Yup.object().shape({
        fullname: Yup.string().required("Ad alanı zorunludur"),
        subject: Yup.string().required("Konu alanı zorunludur"),
        mail: Yup.string()
            .email("Geçerli bir mail adresi giriniz")
            .required("Mail alanı zorunludur"),
        message: Yup.string().required("Mesaj alanı zorunludur"),
        phone: Yup.number(),
    });

    const formik = useFormik({
        initialValues: {
            fullname: "",
            subject: "",
            mail: "",
            message: "",
            phone: "",
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { resetForm }) => {
            const result = await generalService.contactPost(values);
            console.log(result);
            if (result.message === "Success") {
                resetForm();
                notifySucces();
            } else {
                notifyError();
            }
        },
    });

    const notifySucces = () =>
        toast.success("Formunuz Başarıyla Gönderilmiştir.", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    const notifyError = () =>
        toast.error("Form Gönderilirken Hata Oluştu.", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    const [isVisible, setIsVisible] = useState(false);
    const contactRef = useRef(null);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Element görünür hale geldiğinde
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0 } // Elementin yarıdan fazlası göründüğünde
        );

        if (contactRef.current) {
            observer.observe(contactRef.current);
        }

        return () => {
            // Komponent kaldırıldığında observer'ı temizle
            observer.disconnect();
        };
    }, []);
    return (
        <motion.div
            id="contact"
            className="container mx-auto mt-20 max-lg:px-4"
            initial={{ opacity: 0, y: -100 }}
            animate={{
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : -100,
            }}
            transition={{ duration: 1 }}
        >
            <div ref={contactRef} className="flex justify-center w-full mt-5">
                <ToastContainer
                    className="toastContainer z-[9999999]"
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable={false}
                    pauseOnHover
                    theme="light"
                />
                <div className=" bg-white flex flex-col justify-center w-[61rem] max-lg:w-10/12 max-lg:p-12 p-20 max-sm:w-full max-sm:p-4 max-sm:pt-20 max-sm:pb-20 max-sm:ml-2 max-sm:mr-2 shadow-2xl rounded">
                    <div className="flex flex-row justify-between items-center  pb-10">
                        <p className="text-5xl text-[#0c8ecf] font-bold varela-round-bold text-center">
                            {t("bizimle")}
                        </p>
                        <BsSend
                            size={56}
                            fill="black"
                            className="
                        text-gray-600 
                        max-sm:max-h-10
                        
                        "
                        />
                    </div>
                    <div className="flex flex-col justify-between ">
                        <form
                            className="flex flex-col justify-between gap-4"
                            onSubmit={formik.handleSubmit}
                        >
                            <div className="flex flex-row justify-between gap-4">
                                <input
                                    className={`pt-3 pb-3 pl-6 pr-6 w-full  border border-solid border-gray-300 rounded focus:outline-none focus:border-gray-400 focus:ring-0 ${
                                        formik.touched.fullname &&
                                        formik.errors.fullname
                                            ? "border-red-500"
                                            : ""
                                    }`}
                                    id="fullname"
                                    name="fullname"
                                    placeholder={t("ad")}
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.fullname}
                                />
                                <input
                                    className={`pt-3 pb-3 pl-6 pr-6 w-full  border border-solid border-gray-300 rounded focus:outline-none focus:border-gray-400 focus:ring-0 ${
                                        formik.touched.mail &&
                                        formik.errors.mail
                                            ? "border-red-500"
                                            : ""
                                    }`}
                                    id="mail"
                                    name="mail"
                                    placeholder="Mail"
                                    type="mail"
                                    onChange={formik.handleChange}
                                    value={formik.values.mail}
                                />
                            </div>
                            <div className="flex flex-row justify-between gap-4 pt-4">
                                <input
                                    className={`pt-3 pb-3 pl-6 pr-6 w-full  border border-solid border-gray-300 rounded focus:outline-none focus:border-gray-400 focus:ring-0 ${
                                        formik.touched.phone &&
                                        formik.errors.phone
                                            ? "border-red-500"
                                            : ""
                                    }`}
                                    id="phone"
                                    name="phone"
                                    placeholder={t("telefon")}
                                    type="phone"
                                    onChange={formik.handleChange}
                                    value={formik.values.phone}
                                />
                                <input
                                    className={`pt-3 pb-3 pl-6 pr-6 w-full  border border-solid border-gray-300 rounded focus:outline-none focus:border-gray-400 focus:ring-0 ${
                                        formik.touched.subject &&
                                        formik.errors.subject
                                            ? "border-red-500"
                                            : ""
                                    }`}
                                    id="subject"
                                    name="subject"
                                    placeholder={t("konu")}
                                    type="subject"
                                    onChange={formik.handleChange}
                                    value={formik.values.subject}
                                />
                            </div>
                            <div className="flex justify-center gap-4 pt-4">
                                <textarea
                                    className={`pt-3 pb-3 pl-6 pr-6 w-full  border border-solid border-gray-300 rounded focus:outline-none focus:border-gray-400 focus:ring-0 ${
                                        formik.touched.message &&
                                        formik.errors.message
                                            ? "border-red-500"
                                            : ""
                                    }`}
                                    id="message"
                                    name="message"
                                    placeholder={t("mesaj")}
                                    type="message"
                                    onChange={formik.handleChange}
                                    value={formik.values.message}
                                ></textarea>
                            </div>
                            <div className="flex flex-row justify-between pt-7 max-sm:gap-4 ">
                                <button
                                    type="submit"
                                    className="bg-[#0c8ecf] hover:bg-[#307192] font-semibold text-sm text-white  h-12 w-36 max-sm:w-48 rounded-full transition duration-300 transform hover:translate-y-1"
                                >
                                    {t("gonder")}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
