'use client'
import SEO from "@/app/components/SEO";
import Navbar from "@/app/components/Navbar";
import Header from "@/app/components/Header";
import About from "@/app/components/About";
import Skills from "@/app/components/Skills";
import Contact from "@/app/components/Contact";


export default function Home() {
    return (
        <>
            <SEO
                title="Sri Lankan Software Developer & CS Student"
                description="Official portfolio of Sakuja Shamal Gajanayake - Computer Science undergraduate at University of Jaffna."
            />
            <Navbar/>
            <Header/>
            <About/>
            <Skills/>
            <Contact/>
        </>
    );
}
