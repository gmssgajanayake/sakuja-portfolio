import React from "react";
import Link from "next/link";
import {MdOutlineEmail} from "react-icons/md";
import {FaLinkedinIn} from "react-icons/fa6";
import {FaWhatsapp} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa6";
import {AiOutlineYoutube} from "react-icons/ai";

const Contact = () => {
    return (
        <div id={"contact"} className={" xl:h-screen  xl:gap-8 pt-20 xl:pt-0 flex flex-col items-center justify-between "}>
            <div className={"flex justify-center   items-center h-1/2 flex-col"}>
                <p data-aos="fade-right" className={"text-lg  font-medium text-gray-500"}>Get in Touch</p>
                <h2 data-aos="fade-left" className={"text-4xl p-2 font-extrabold"}>Contact Me</h2>
                <ul  data-aos="zoom-in"
                    className="hidden xl:border-[1px] md:rounded-full border-gray-800 mt-10  flex-col md:flex-row md:flex items-start justify-start md:justify-center md:items-center gap-6 lg:gap-8  px-5 py-5">
                    <li >
                        <div className={"flex items-center justify-center gap-2"}>
                            <div className={"w-10 h-10 flex justify-center items-center bg-gray-800 rounded-full"}>
                                <MdOutlineEmail color={"white"} size={20}/>
                            </div>
                            <Link
                                href={"mailto:contact@sakuja.me"}
                                className="font-Rubik text-lg relative inline-block text-slate-800
                  after:block after:h-[2px] after:w-0 after:bg-slate-800
                  after:transition-all after:duration-300 hover:after:w-full"
                            >
                                contact@sakuja.me
                            </Link>
                        </div>

                    </li>
                    <li >
                        <div className={"flex items-center justify-center gap-2"}>
                            <div className={"w-10 h-10 flex justify-center items-center bg-gray-800 rounded-full"}>
                                <FaLinkedinIn color={"white"} size={20}/>
                            </div>
                            <Link
                                href={"https://www.linkedin.com/in/sakuja-shamal-gajanayake-a15b41347/"}
                                className="font-Rubik text-lg relative inline-block text-slate-800
                  after:block after:h-[2px] after:w-0 after:bg-slate-800
                  after:transition-all after:duration-300 hover:after:w-full"
                            >
                                LinkedIn
                            </Link>
                        </div>
                    </li>
                    <li >
                        <div className={"flex items-center justify-center gap-2"}>
                            <div className={"w-10   h-10 flex justify-center items-center bg-gray-800 rounded-full"}>
                                <FaWhatsapp color={"white"} size={20}/>
                            </div>
                            <Link
                                href={"https://api.whatsapp.com/send/?phone=94717978125"}
                                className="font-Rubik text-lg relative inline-block text-slate-800
                  after:block after:h-[2px] after:w-0 after:bg-slate-800
                  after:transition-all after:duration-300 hover:after:w-full"
                            >
                                WhatsApp
                            </Link>
                        </div>


                    </li>
                    <li >
                        <div className={"flex items-center justify-center gap-2"}>
                            <div className={"w-10 h-10 flex justify-center items-center bg-gray-800 rounded-full"}>
                                <FaInstagram color={"white"} size={20}/>
                            </div>
                            <Link
                                href={"https://www.instagram.com/sakujashamal/"}
                                className="font-Rubik text-lg relative inline-block text-slate-800
                  after:block after:h-[2px] after:w-0 after:bg-slate-800
                  after:transition-all after:duration-300 hover:after:w-full"
                            >
                                Instagram
                            </Link>
                        </div>
                    </li>
                    <li >
                        <div className={"flex items-center justify-center gap-2"}>
                            <div className={"w-10 h-10 flex justify-center items-center bg-gray-800 rounded-full"}>
                                <AiOutlineYoutube color={"white"} size={22}/>
                            </div>
                            <Link
                                href={"https://www.youtube.com/@sakujashamal"}
                                className="font-Rubik text-lg relative inline-block text-slate-800
                  after:block after:h-[2px] after:w-0 after:bg-slate-800
                  after:transition-all after:duration-300 hover:after:w-full"
                            >
                                YouTube
                            </Link>
                        </div>
                    </li>

                </ul>
                <ul
                     className=" xl:border-[1px] md:rounded-full md:hidden border-gray-800 mt-10  flex-col md:flex-row flex items-start justify-start md:justify-center md:items-center gap-6 lg:gap-8  px-5 py-5">
                    <li data-aos="zoom-in-up">
                        <div className={"flex items-center justify-center gap-2"}>
                            <div className={"w-10 h-10 flex justify-center items-center bg-gray-800 rounded-full"}>
                                <MdOutlineEmail color={"white"} size={20}/>
                            </div>
                            <Link
                                href={"mailto:contact@sakuja.me"}
                                className="font-Rubik text-lg relative inline-block text-slate-800
                  after:block after:h-[2px] after:w-0 after:bg-slate-800
                  after:transition-all after:duration-300 hover:after:w-full"
                            >
                                contact@sakuja.me
                            </Link>
                        </div>

                    </li>
                    <li data-aos="zoom-in-up">
                        <div className={"flex items-center justify-center gap-2"}>
                            <div className={"w-10 h-10 flex justify-center items-center bg-gray-800 rounded-full"}>
                                <FaLinkedinIn color={"white"} size={20}/>
                            </div>
                            <Link
                                href={"https://www.linkedin.com/in/sakuja-shamal-gajanayake-a15b41347/"}
                                className="font-Rubik text-lg relative inline-block text-slate-800
                  after:block after:h-[2px] after:w-0 after:bg-slate-800
                  after:transition-all after:duration-300 hover:after:w-full"
                            >
                                LinkedIn
                            </Link>
                        </div>
                    </li>
                    <li data-aos="zoom-in-up">
                        <div className={"flex items-center justify-center gap-2"}>
                            <div className={"w-10   h-10 flex justify-center items-center bg-gray-800 rounded-full"}>
                                <FaWhatsapp color={"white"} size={20}/>
                            </div>
                            <Link
                                href={"https://api.whatsapp.com/send/?phone=94717978125"}
                                className="font-Rubik text-lg relative inline-block text-slate-800
                  after:block after:h-[2px] after:w-0 after:bg-slate-800
                  after:transition-all after:duration-300 hover:after:w-full"
                            >
                                WhatsApp
                            </Link>
                        </div>


                    </li>
                    <li data-aos="zoom-in-up">
                        <div className={"flex items-center justify-center gap-2"}>
                            <div className={"w-10 h-10 flex justify-center items-center bg-gray-800 rounded-full"}>
                                <FaInstagram color={"white"} size={20}/>
                            </div>
                            <Link
                                href={"https://www.instagram.com/sakujashamal/"}
                                className="font-Rubik text-lg relative inline-block text-slate-800
                  after:block after:h-[2px] after:w-0 after:bg-slate-800
                  after:transition-all after:duration-300 hover:after:w-full"
                            >
                                Instagram
                            </Link>
                        </div>
                    </li>
                    <li data-aos="zoom-in-up">
                        <div className={"flex items-center justify-center gap-2"}>
                            <div className={"w-10 h-10 flex justify-center items-center bg-gray-800 rounded-full"}>
                                <AiOutlineYoutube color={"white"} size={22}/>
                            </div>
                            <Link
                                href={"https://www.youtube.com/@sakujashamal"}
                                className="font-Rubik text-lg relative inline-block text-slate-800
                  after:block after:h-[2px] after:w-0 after:bg-slate-800
                  after:transition-all after:duration-300 hover:after:w-full"
                            >
                                YouTube
                            </Link>
                        </div>
                    </li>

                </ul>
            </div>
            <div className={" w-screen"}>

            </div>
            <Link data-aos="zoom-in" href={`#profile`}
                  className={"border-[1px] py-2 px-4 rounded-full transition-all duration-500 border-gray-800 hover:bg-gray-800 hover:text-white tracking-wide hidden xl:block"}>GO
                TO TOP</Link>
            <ul data-aos="zoom-in" className="hidden  xl:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3">
                {['about', 'skills', 'projects', 'achievements', 'contact'].map((item) => (
                    <li key={item}>
                        <Link
                            href={`#${item}`}
                            className="font-Rubik text-lg relative inline-block text-slate-800
                  after:block after:h-[2px] after:w-0 after:bg-slate-800
                  after:transition-all after:duration-300 hover:after:w-full"
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </Link>
                    </li>
                ))}
            </ul>
            <footer className={"mt-8 flex flex-col justify-center items-center p-2 border-t-[1px]  w-screen"}>
                <span className={"tracking-wide text-center text-sm"}>Copyright © 2025 Sakuja Shamal Gajanayake. All Rights Reserved.</span>
            </footer>
        </div>
    );
}

export default Contact;