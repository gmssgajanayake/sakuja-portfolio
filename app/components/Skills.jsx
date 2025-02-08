import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { assets, items } from "@/assets/assets";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";

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
        <div id="skills" className="w-screen xl:h-screen gap-4 xl:gap-8 py-10 flex flex-col items-center">
            <div className="flex flex-col justify-center items-center">
                <p className="text-lg font-medium text-gray-500">Explore My</p>
                <h2 className="text-4xl p-2 font-extrabold">Tech Skills</h2>
            </div>

            <div className="flex flex-col w-screen justify-center items-center gap-2 px-8 lg:px-20 xl:px-36">
                {/* Filter Buttons */}
                <div className="flex gap-4">
                    {filters.map((filter, idx) => (
                        <button
                            key={`filters-${idx}`}
                            onClick={() => handleFilterButtonClick(filter)}
                            className={`bg-gray-100 border-[1px] font-normal text-[12px] px-4 py-1 rounded-full border-gray-700 ${
                                selectedFilter === filter ? "active" : ""
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Triangular Grid of Items */}
                <div className="flex flex-col gap-4 p-4">
                    {groupedItems.map((rowItems, rowIndex) => (
                        <div key={`row-${rowIndex}`} className="flex justify-center gap-4">
                            {rowItems.map((item, idx) => (
                                <div key={`item-${idx}`} className="w-24 h-28 gap-2 flex flex-col justify-center items-center">
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
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex items-start justify-center gap-14">
                <div className="flex flex-col text-gray-800 items-center justify-center gap-1">
                    <p className="font-bold text-4xl">20+</p>
                    <p>Projects</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                    <p className="font-bold text-gray-800 text-4xl">500+</p>
                    <p className="text-center">
                        Git Contributions <br />
                        in Last Year
                    </p>
                </div>
            </div>
            <div>
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
