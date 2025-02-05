import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
    const [showNav, setShowNav] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const menuButtonRef = useRef(null);
    // Initialize with 0 instead of accessing window immediately
    const prevScrollPos = useRef(0);

    // Set the correct initial value once on the client
    useEffect(() => {
        prevScrollPos.current = window.pageYOffset;
    }, []);

    // Handle navbar show/hide based on scroll direction
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            if (currentScrollPos < prevScrollPos.current) {
                // Scrolling up – show the navbar
                setShowNav(true);
            } else if (currentScrollPos > prevScrollPos.current) {
                // Scrolling down – hide the navbar
                setShowNav(false);
            }
            // Update the previous scroll position
            prevScrollPos.current = currentScrollPos;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    }, [isMenuOpen]);

    // Close menu on click outside or Escape key press
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                isMenuOpen &&
                menuRef.current &&
                !menuRef.current.contains(e.target) &&
                menuButtonRef.current &&
                !menuButtonRef.current.contains(e.target)
            ) {
                setIsMenuOpen(false);
            }
        };

        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isMenuOpen]);

    return (
        <>
            <nav
                className={`
          backdrop-blur-md w-full fixed px-5 lg:px-8 xl:px-[8%] py-2 flex items-center justify-between z-50
          xl:shadow-xl
          transition-transform duration-500
          ${showNav ? 'translate-y-0' : '-translate-y-full'}
        `}
            >
                {/* Logo */}
                <p className="w-30 mt-8 mb-8 mr-14 cursor-pointer font-black kaushan-script-regular -rotate-12 text-3xl xl:text-4xl text-gray-700">
                    Sakuja&nbsp;Shamal
                </p>

                {/* Desktop Menu */}
                <ul className="hidden xl:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3">
                    {['about', 'skills', 'projects', 'achievements', 'contact'].map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item}`}
                                className="font-Rubik text-xl relative inline-block text-slate-800
                  after:block after:h-[2px] after:w-0 after:bg-slate-800
                  after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    ref={menuButtonRef}
                    className="xl:hidden p-2"
                    onClick={() => setIsMenuOpen(true)}
                    aria-label="Open menu"
                    aria-expanded={isMenuOpen}
                >
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

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div className="fixed inset-0 bg-black/50 z-40" aria-hidden="true" />
                )}

                {/* Mobile Menu */}
                <div
                    ref={menuRef}
                    className={`
            fixed top-0 right-0 h-screen w-64 bg-gray-50 z-50
            transform transition-transform duration-500
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
                >
                    <div className="p-6 flex justify-end">
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="p-2"
                            aria-label="Close menu"
                        >
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
                    </div>
                    <ul className="flex flex-col gap-6 px-6">
                        {['about', 'skills', 'projects', 'achievements', 'contact'].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item}`}
                                    className="font-Rubik text-2xl hover:underline"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
