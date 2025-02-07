import React from "react";
import {assets} from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const About = () => {
    return (
        <div id={"about"} className={"h-screen xl:gap-8 py-10 flex flex-col items-center "}>
            <div className={"flex justify-center items-center flex-col"}>
                <p className={"text-lg  font-medium text-gray-500"}>Get to Know More</p>
                <h2 className={"text-4xl p-2 font-extrabold"}>About Me</h2>
            </div>
            <div
                className={"flex w-screen flex-col xl:flex-row  justify-center items-center gap-8 px-8 lg:px-20  xl:px-36"}>
                <Image
                    className={" w-[400px] h-[410px] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"}
                    alt={"Sakuja Shamal"}
                    src={assets.sakuja_shamal_about_me}></Image>
                <div className={"flex items-center w-full flex-col gap-8  justify-center"}>
                    <div className={"flex items-center w-full flex-col lg:flex-row justify-center gap-8 "}>
                        <div
                            className={"w-full h-[180px]  flex items-center justify-center rounded-3xl border-[0.5px] border-solid border-gray-400"}>

                            <lottie-player
                                src="https://lottie.host/de65d944-d5d0-4faa-8c1f-86df3c188679/vyUfMtVwOF.json"
                                speed="0.3" loop="" autoplay="" direction="1" mode="normal">
                            </lottie-player>

                        </div>
                        <div className={"w-full h-[180px] rounded-3xl border-[0.5px] border-solid border-gray-400"}>

                            <lottie-player
                                src="https://lottie.host/b878105c-8bd9-4744-82c9-7489be7154cf/u44x2NYlSp.json"
                                speed="0.5" loop="" autoplay="" direction="1" mode="normal"></lottie-player>

                        </div>
                    </div>
                    <p className={'px-4 flex justify-center items-center flex-col gap-1 text-sm text-gray-500'}>
                        <span>
                            I completed my primary and secondary education at Bandarawela St. Joseph's College, progressing from Grade 1 through to my Advanced Level examinations in the Physical Science Stream in 2020.

                        </span>
                        <span>
                             Building on these results, I secured admission to the University of Jaffna, where I am currently pursuing a Bachelor of Science degree with majors in Computer Science (3 years) and Statistics (3 years), along with Pure Mathematics (2 years) and Electronics (1 year) as supplementary subjects. Driven by a keen interest in the theoretical and practical applications of my disciplines,
                            I am dedicated to strengthening my expertise in software development, data analysis, and mathematical modeling.
                        </span>

                    </p>
                    <div className={"flex justify-end gap-4 w-full"}>
                        <h6 className={"text-5xl playfair-display-700 "}>
                            imagine. believe.
                        </h6>
                        <h6 className={"w-30   cursor-pointer font-black kaushan-script-regular -rotate-12 text-6xl "}>
                            achieve.
                        </h6>

                    </div>
                    <div className={"w-full h-20 flex justify-end items-center  "}>
                        <Link href={`#profile`} className={" w-21 h-21"}>
                            <lottie-player
                                src="https://lottie.host/cb014360-1044-4484-bfe0-573c16563ce5/vFmmGpPiPg.json"
                                speed="1" loop=""
                                autoplay="" className="arrow"
                                onclick="location.href='./#skills'"></lottie-player>
                        </Link>
                    </div>


                </div>

            </div>
        </div>
    );
}

export default About;