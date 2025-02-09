import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { assets } from "@/assets/assets";


const About = () => {
    useEffect(() => {
        // Ensure we're on the client and the library has loaded.
        if (typeof window !== "undefined" && window.lottieInteractivity) {
            window.lottieInteractivity.create({
                player: "#scrollLottie", // The id for our Lottie element
                mode: "scroll",          // Tie animation progress to scrolling
                actions: [
                    {
                        visibility: [0, 1],
                        type: "seek",
                        frames: [0, 150],    // Adjust frame range to suit your animation
                    },
                ],
            });
        }
    }, []);

    return (
        <>
            {/* Load lottie-interactivity from a CDN */}
            <Script

                src="https://unpkg.com/lottie-interactivity@latest/dist/lottie-interactivity.min.js"
                strategy="afterInteractive"
            />

            <div id="about" className="xl:h-screen xl:gap-8 py-10 flex flex-col items-center">
                <div  className="flex justify-center items-center flex-col">
                    <p  data-aos="fade-right" className="text-lg font-medium text-gray-500">Get to Know More</p>
                    <h2  data-aos="fade-left" className="text-4xl p-2 font-extrabold">About Me</h2>
                </div>
                <div className="flex w-screen flex-col xl:flex-row justify-center items-center gap-8 px-8 lg:px-20 xl:px-36">
                    <Image  data-aos="fade-right"
                        className="w-full h-full mt-3 sm:w-[350px] sm:h-[360px] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                        alt="Sakuja Shamal"
                        src={assets.sakuja_shamal_about_me}
                    />
                    <div className="flex items-center w-full flex-col gap-8 justify-center">
                        <div className="flex items-center w-full flex-col lg:flex-row justify-center gap-8">
                            {/* Lottie animation with scroll interactivity */}
                            <div data-aos="fade-left" className="w-full h-[180px] relative flex items-center justify-center rounded-3xl border border-gray-400">
                                <lottie-player
                                    id="scrollLottie" // Unique id for the interactive Lottie
                                    src="https://lottie.host/de65d944-d5d0-4faa-8c1f-86df3c188679/vyUfMtVwOF.json"
                                    speed="0.3"
                                    loop
                                    autoplay
                                    direction="1"
                                    mode="normal"
                                ></lottie-player>
                            </div>
                            <div data-aos="fade-left" className="w-full h-[180px] rounded-3xl border border-gray-400">
                                <lottie-player
                                    src="https://lottie.host/b878105c-8bd9-4744-82c9-7489be7154cf/u44x2NYlSp.json"
                                    speed="0.5"
                                    loop
                                    autoplay
                                    direction="1"
                                    mode="normal"
                                ></lottie-player>
                            </div>
                        </div>
                        <p data-aos="fade-left" className="px-4 flex justify-center items-center flex-col gap-1 text-sm text-gray-900">
              <span className="text-sm font-normal text-gray-500">
                I completed my primary and secondary education at Bandarawela St. Joseph's College, progressing from Grade 1 through to my Advanced Level examinations in the Physical Science Stream in 2020.
              </span>
                            <span className="text-sm font-normal text-gray-500">
                Building on these results, I secured admission to the University of Jaffna, Sri Lanka, where I am currently pursuing a Bachelor of Science degree with majors in Computer Science and Statistics, along with Pure Mathematics and Electronics as supplementary subjects.
              </span>
                        </p>
                        <div className="w-full">
                            <div className="flex items-center justify-end gap-4 mr-4">
                                <h6 data-aos="fade-left" className="text-xl playfair-display-700 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                                    imagine.&nbsp;believe.
                                </h6>
                                <h6 data-aos="fade-left" className="w-30 cursor-pointer font-black kaushan-script-regular -rotate-12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                                    achieve.
                                </h6>
                            </div>
                            <div className="w-full h-10 md:h-20 flex justify-end items-center">
                                <Link href="#skills" className="w-10 h-10 md:h-14 md:w-14 lg:h-20 lg:w-20">
                                    <lottie-player
                                        src="https://lottie.host/cb014360-1044-4484-bfe0-573c16563ce5/vFmmGpPiPg.json"
                                        speed="1"
                                        loop
                                        autoplay
                                        className="arrow"
                                    ></lottie-player>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
