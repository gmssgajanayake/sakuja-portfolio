'use client'
import SEO from "@/app/components/SEO";
import Navbar from "@/app/components/Navbar";
import Header from "@/app/components/Header";

export default function Home() {
    return (
        <>
            <SEO
                title="Sri Lankan Software Developer & CS Student"
                description="Official portfolio of Sakuja Shamal Gajanayake - Computer Science undergraduate at University of Jaffna."
            />
            <Navbar/>
            <Header/>
        </>
    );
}
