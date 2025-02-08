import React from 'react'
import Image from "next/image";
import { RiGithubFill } from "react-icons/ri";
import { TiSocialLinkedin } from "react-icons/ti";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";


import Link from "next/link";
import {assets} from "@/assets/assets";

const Header = () => {
    return (
        <div id={"profile"} className={" xl:h-screen xl:pt-40 xl:flex-row flex flex-col justify-center items-center"}>
            {/*  Image section*/}
            <div
                className={" flex justify-center xl:justify-end items-center xl:w-3/4 w-screen xl:h-screen xl:pt-10 pt-36"}>
                <Image src={assets.sakuja_shamal} alt={"Sakuja Shamal Gajanayake"}
                       className={"  rounded-full w-[240px] h-[240px]  xl:w-[360px] xl:h-[360px] p-2 hover:border-dashed hover:border-2 border-slate-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  "}/>
            </div>
            {/* Description*/}
            <div className={" flex xl:justify-start justify-center items-center w-screen xl:h-screen  py-10 px-4"}>
                <div className={"xl:ml-4 flex justify-center items-center flex-col gap-4"}>
                    <p className={"text-center font-Rubik font-medium text-gray-600 text-xl"}>Hello I'm</p>
                    <h1 className={"text-center text- kaushan-script-regular text-5xl text-gray-800"}>Sakuja Shamal</h1>
                    <div className={"flex flex-col items-center justify-center"}>
                        <h2 className={"text-xl text-center font-bold text-gray-600"}>Computer Science &
                            Mathematics and Statistic
                            Student</h2>
                        <h2 className={"text-center text-lg font-normal text-gray-500"}>Following Bachelor's Science
                            Degree </h2>
                    </div>
                    <div>

                        <div className={"flex gap-2 items-center justify-center"}>
                            <Image src={assets.uoj_loj} alt={"University of Jaffna - Logo"} className={"w-6 h-6"}/>
                            <h3 className={"text-center font-normal  text-gray-500 text-sm"}>Undergraduate at University
                                of Jaffna, Sri&nbsp;Lanka</h3>
                        </div>
                        <div className={"flex gap-2 items-center justify-center"}>
                            <Image src={assets.ijse_loj} alt={"IJSE | Institute of Software Engineering - Logo"}
                                   className={"w-6 h-6"}/>
                            <h3 className={"text-center font-normal  text-gray-500 text-sm"}>Completed the CMJD program
                                at IJSE</h3>
                        </div>


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


                    <div className=" bg-white w-full h-auto py-8 flex items-center justify-center gap-2 flex-wrap">
                        <Link href={"https://github.com/gmssgajanayake"}
                              className="p-3 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
                            <RiGithubFill className={"text-2xl"}/>
                        </Link>
                        <Link href={"https://www.linkedin.com/in/sakuja-shamal-gajanayake-a15b41347/"}
                              className="p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
                            <TiSocialLinkedin className={"text-3xl"}/>
                        </Link>
                        <Link href={"https://x.com/sakuja_shamal"}
                              className="p-4 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
                            <BsTwitterX className={"text-1xl"}/>
                        </Link>

                        <Link href={"https://api.whatsapp.com/send/?phone=94717978125"}
                              className="p-3 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
                            <FaWhatsapp className={"text-2xl"}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
