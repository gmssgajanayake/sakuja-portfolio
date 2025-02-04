import React from 'react'
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";


import Link from "next/link";
import {assets} from "@/assets/assets";

const Header = () => {
    return (
        <div className={"h-screen xl:flex-row flex flex-col justify-center items-center"}>
            {/*  Image section*/}
            <div className={" flex justify-center xl:justify-end items-center xl:w-3/4 w-screen xl:h-screen xl:pt-10 pt-32"}>
                <Image src={assets.sakuja_shamal} alt={"Sakuja Shamal"}
                       className={"rounded-full w-[240px] h-[220px]  xl:w-[380px] xl:h-[360px] mr-4 p-2 hover:border-dashed hover:border-2 border-slate-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  "}/>
            </div>
            {/* Description*/}
            <div className={" flex xl:justify-start justify-center items-center w-screen xl:h-screen  py-10"}>
                <div className={"xl:ml-4 flex justify-center items-center flex-col gap-4"}>
                    <p className={"font-Rubik font-medium text-gray-600 text-xl"}>Hello I'm</p>
                    <h1 className={"text- kaushan-script-regular text-5xl text-gray-800"}>Sakuja Shamal</h1>
                    <div className={"flex flex-col items-center justify-center"}>
                        <h2 className={"text-xl text-center font-bold text-gray-600"}>Computer Science & Mathematics and Statistic
                            Student</h2>
                        <h2 className={"text-lg font-normal text-gray-500"}>Following Bachelor's Science Degree </h2>
                    </div>
                    <div className={"flex gap-2 items-center justify-center"}>
                        <Image src={assets.uoj_loj} alt={"University of Jaffna Logo"} className={"w-6 h-6"}/>
                        <h3 className={" font-normal  text-gray-500 text-sm"}>Undergraduate at University of Jaffna, Sri
                            Lanka</h3>
                    </div>

                    <div className={"flex items-center justify-center gap-2"}>
                        <button
                            className={"transition delay-150 duration-300 ease-in-out hover:text-white hover:bg-black border-2 border-gray-800 rounded-full px-5 py-3 text-[12px] font-bold"}>
                            Download CV
                        </button>
                        <button
                            className={"text-white bg-black border-2 border-gray-800 rounded-full px-5 py-3 text-[12px] font-bold"}>
                            Contact Info
                        </button>
                    </div>

                    <div className={"flex justify-center items-center gap-4 mt-2"}>

                        <Link href="https://github.com/gmssgajanayake">
                            <FaGithubSquare className="hover:text-gray-700 text-5xl fa-brands fa-linkedin" href="https://www.linkedin.com/in/sakuja-shamal-gajanayake-a15b41347/" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/sakuja-shamal-gajanayake-a15b41347/">
                            <FaLinkedin className="hover:text-gray-700 text-5xl fa-brands fa-linkedin" href="https://www.linkedin.com/in/sakuja-shamal-gajanayake-a15b41347/" />
                        </Link>
                        <Link href="https://api.whatsapp.com/send/?phone=94717978125">
                            <FaWhatsappSquare className="hover:text-gray-700 text-5xl fa-brands fa-square-whatsapp"/>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header
