import React, { useRef, useState, useEffect } from 'react';

const Navbar = () => {
    const sideMenuRef = useRef();
    const [showNav, setShowNav] = useState(true);

    // Listen for scroll events to show/hide the navbar.
    useEffect(() => {
        const handleScroll = () => {
            // Show navbar only when at the very top (scrollY === 0)
            if (window.scrollY === 0) {
                setShowNav(true);
            } else {
                setShowNav(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    };

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    };

    return (
        <>
            <nav
                className={`
          w-full fixed px-5 lg:px-8 xl:px-[8%] py-3 flex items-center justify-between z-50
          xl:shadow-gray-100 xl:shadow-xl
          transition-transform duration-500
          ${showNav ? 'translate-y-0' : '-translate-y-full'}
        `}
            >
                <h1
                    className={`
            w-30 mt-8 mb-8 mr-14 cursor-pointer font-black kaushan-script-regular
            -rotate-12 text-3xl xl:text-4xl text-gray-700
          `}
                >
                    Sakuja&nbsp;Shamal
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden xl:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3">
                    <li>
                        <a href="#about" className="font-Rubik text-2xl transition hover:underline">
                            About&nbsp;me
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="font-Rubik text-2xl transition hover:underline">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="font-Rubik text-2xl transition hover:underline">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#achievements" className="font-Rubik text-2xl transition hover:underline">
                            Achievements
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="font-Rubik text-2xl transition hover:underline">
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Mobile Menu Toggle Button */}
                <div className="flex items-center justify-center">
                    <button className="block xl:hidden" onClick={openMenu}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="40px"
                            viewBox="0 -960 960 960"
                            width="40px"
                            fill="#434343"
                        >
                            <path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <ul
                    ref={sideMenuRef}
                    className="flex xl:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-gray-50 transition duration-500"
                >
                    <button className="absolute right-6 top-6" onClick={closeMenu}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="40px"
                            viewBox="0 -960 960 960"
                            width="40px"
                            fill="#434343"
                        >
                            <path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z" />
                        </svg>
                    </button>
                    <li>
                        <a
                            href="#about"
                            className="font-Rubik text-2xl transition hover:underline"
                            onClick={closeMenu}
                        >
                            About&nbsp;me
                        </a>
                    </li>
                    <li>
                        <a
                            href="#skills"
                            className="font-Rubik text-2xl transition hover:underline"
                            onClick={closeMenu}
                        >
                            Skills
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className="font-Rubik text-2xl transition hover:underline"
                            onClick={closeMenu}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#achievements"
                            className="font-Rubik text-2xl transition hover:underline"
                            onClick={closeMenu}
                        >
                            Achievements
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="font-Rubik text-2xl transition hover:underline"
                            onClick={closeMenu}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
