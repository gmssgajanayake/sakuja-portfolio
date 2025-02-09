import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { assets, items } from "@/assets/assets";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";


const CountDown = ({ start, end, duration }) => {
    const [current, setCurrent] = useState(start);

    useEffect(() => {
        // Determine the direction of the count:
        // Use 1 for counting up, -1 for counting down.
        const direction = start < end ? 1 : -1;
        const totalSteps = Math.abs(end - start);
        if (totalSteps === 0) return; // Nothing to animate

        // Calculate the interval time based on total steps
        const intervalTime = duration / totalSteps;

        const interval = setInterval(() => {
            setCurrent(prev => {
                // Check if we've reached or passed the target value
                if ((direction > 0 && prev >= end) || (direction < 0 && prev <= end)) {
                    clearInterval(interval);
                    return end;
                }
                return prev + direction;
            });
        }, intervalTime);

        // Cleanup the interval if the component unmounts or props change
        return () => clearInterval(interval);
    }, [start, end, duration]);

    return <span>{current}</span>;
};



const Stats = () => {
    return (
        <div style={styles.statsContainer}>
            <div style={styles.statBox}>
                <h2 style={styles.number}>
                    <CountDown start={0} end={20} duration={4000} />

                </h2>
                <p style={styles.label}>Seconds Left</p>
            </div>
            <div style={styles.statBox}>
                <h2 style={styles.number}>
                    <CountDown start={50} end={0} duration={2000} />
                </h2>
                <p style={styles.label}>Items Remaining</p>
            </div>
        </div>
    );
};


const Skills = () => {
    // Available filters.
    const filters = ["Languages", "Web Development", "DevOps"];

    // State for the selected filter; default is "Languages".
    const [selectedFilter, setSelectedFilter] = useState("Languages");

    // State to control the maximum items in the first row based on display size.
    // Mobile: max 3, Medium: max 4, Larger: max 5.
    const [maxItems, setMaxItems] = useState(5);

    // Update maxItems based on window size.
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setMaxItems(3);
            } else if (width < 1024) {
                setMaxItems(4);
            } else {
                setMaxItems(5);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Filter items based on the selected filter.
    const filteredItems = useMemo(() => {
        return items.filter(item => item.category === selectedFilter);
    }, [selectedFilter]);

    // Group items into rows so that the last rows form a triangular pattern.
    // If there are extra items beyond the triangle capacity, they are
    // grouped in full (or partial) rows using maxItems.
    const groupedItems = useMemo(() => {
        const totalItems = filteredItems.length;
        // Calculate triangle capacity = maxItems + (maxItems-1) + ... + 1
        const triangleCapacity = (maxItems * (maxItems + 1)) / 2;

        // If we have less than (or exactly) triangleCapacity items,
        // group them in triangular rows.
        if (totalItems <= triangleCapacity) {
            const groups = [];
            let startIndex = 0;
            let rowSize = maxItems;
            while (startIndex < totalItems && rowSize > 0) {
                groups.push(filteredItems.slice(startIndex, startIndex + rowSize));
                startIndex += rowSize;
                rowSize--;
            }
            return groups;
        } else {
            // There are extra items.
            // Calculate how many extra items we have beyond the triangle capacity.
            const extraItems = totalItems - triangleCapacity;
            // Determine how many full rows of maxItems we can have from these extras.
            const fullExtraRows = Math.floor(extraItems / maxItems);
            // And check if there is a remainder for a partial extra row.
            const extraRemainder = extraItems % maxItems;

            const groups = [];
            let currentIndex = 0;

            // First, add full extra rows (each with maxItems items).
            for (let i = 0; i < fullExtraRows; i++) {
                groups.push(filteredItems.slice(currentIndex, currentIndex + maxItems));
                currentIndex += maxItems;
            }

            // If there’s a partial row, add it.
            if (extraRemainder > 0) {
                groups.push(filteredItems.slice(currentIndex, currentIndex + extraRemainder));
                currentIndex += extraRemainder;
            }

            // Now, the remaining items (which should be equal to the triangle capacity)
            // will be grouped in the triangular pattern.
            let remainingItems = filteredItems.slice(currentIndex);
            let rowSize = maxItems;
            while (remainingItems.length > 0 && rowSize > 0) {
                // If there aren’t enough items to fill the expected row size,
                // we simply add the remaining items as the final row.
                if (remainingItems.length >= rowSize) {
                    groups.push(remainingItems.slice(0, rowSize));
                    remainingItems = remainingItems.slice(rowSize);
                } else {
                    groups.push(remainingItems);
                    remainingItems = [];
                }
                rowSize--;
            }
            return groups;
        }
    }, [filteredItems, maxItems]);

    // Handle filter button clicks.
    const handleFilterButtonClick = (filter) => {
        setSelectedFilter(filter);
    };

    return (
        <div id="skills" className="w-screen  gap-4 xl:gap-8 py-10 flex flex-col items-center">
            <div data-aos="zoom-in"  className="flex flex-col justify-center items-center">
                <p data-aos="fade-right" className="text-lg font-medium text-gray-500">Explore My</p>
                <h2 data-aos="fade-left" className="text-4xl p-2 font-extrabold">Tech Skills</h2>
            </div>

            <div className="flex flex-col w-screen justify-center items-center gap-2 px-8 lg:px-20 xl:px-36">
                {/* Filter Buttons */}
                <div className="flex gap-4">
                    {filters.map((filter, idx) => (
                        <button
                            key={`filters-${idx}`}
                            onClick={() => handleFilterButtonClick(filter)}
                            className={`
      bg-gray-100 border border-gray-700 font-normal text-[12px] 
      px-4 py-1 rounded-full transition-colors duration-300
      ${selectedFilter === filter ? "bg-gray-800 text-white" : "hover:bg-gray-200"}
    `}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="flex flex-col gap-4 p-4">
                    <AnimatePresence exitBeforeEnter>
                        {groupedItems.map((rowItems, rowIndex) => (
                            <motion.div
                                key={`row-${rowIndex}`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="flex justify-center gap-4"
                            >
                                {rowItems.map((item, idx) => (
                                    <div data-aos="zoom-in-up" key={`item-${idx}`} className="w-24 h-28 gap-2 flex flex-col justify-center items-center">
                                        <div
                                            className={`w-20 h-20 flex flex-col items-center justify-center shadow-md 
                ${item.name === "Bash" ? "bg-black text-white" : "bg-white"} 
                rounded-2xl`}
                                            style={
                                                item.name === "Bash"
                                                    ? { clipPath: "polygon(50% 0, 0 100%, 100% 100%)" }
                                                    : {}
                                            }
                                        >
                                            <Image src={item.image} alt={item.name} width={48} height={48} />
                                        </div>
                                        <p className="text-black text-sm">{item.name}</p>
                                    </div>
                                ))}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            <div className="flex items-start justify-center gap-14">
                <div data-aos="fade-right" className="flex flex-col text-gray-800 items-center justify-center gap-1">
                    <p className="font-bold text-4xl">
                        <CountDown start={0} end={20} duration={5000} />+</p>
                    <p>Projects</p>
                </div>
                <div data-aos="fade-left" className="flex flex-col items-center justify-center gap-1">
                    <p className="font-bold text-gray-800 text-4xl"><CountDown start={0} end={500} duration={5000} />+</p>
                    <p className="text-center">
                        Git Contributions <br />
                        in Last Year
                    </p>
                </div>
            </div>
            <div data-aos="flip-left">
                <Link
                    className="transition-all duration-300 flex justify-center items-center gap-2 py-2 px-4 border-[1px] border-gray-800 rounded-full hover:bg-gray-200"
                    href="https://github.com/gmssgajanayake"
                >
                    <FiGithub size="20" /> Explore more on GitHub
                </Link>
            </div>
            <div className="w-full px-8 lg:px-20 xl:px-36">
                <div className="w-full h-10 md:h-20 flex justify-end items-center">
                    <Link href="#contact" className="w-10 h-10 md:h-14 md:w-14 lg:h-20 lg:w-24 xl:mb-20">
                        <lottie-player
                            src="https://lottie.host/cb014360-1044-4484-bfe0-573c16563ce5/vFmmGpPiPg.json"
                            speed="1"
                            loop
                            autoplay
                            className="arrow"
                            onClick={() => (location.href = "./#skills")}
                        ></lottie-player>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Skills;
