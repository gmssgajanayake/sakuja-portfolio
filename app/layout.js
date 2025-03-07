import { Rubik, Italianno, Roboto } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import "aos/dist/aos.css";
import Head from "next/head";

const rubik = Rubik({
    subsets: ["latin"],
    weight: ["300", "400", "500"],
});

const italianno = Italianno({
    subsets: ["latin"],
    weight: ["400"],
});

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "700"],
});

export const metadata = {
    title: 'Sakuja Shamal Gajanayake',
    description:
        'Portfolio of Sakuja Shamal Gajanayake | BSc in Computer Science, Statistics & Maths student at University of Jaffna. Explore projects, academic work, and achievements.',
    keywords: [
        'Sakuja Shamal Gajanayake',
        'Sakuja Shamal',
        'Sakuja',
        'Portfolio',
        'Computer Science',
        'Statistics',
        'Pure Maths',
        'University of Jaffna',
        'Sri Lanka Software Developer'
    ],
    openGraph: {
        title: 'Sakuja Shamal Gajanayake',
        siteName: 'Sakuja Shamal Gajanayake',
        description:
            'Explore the portfolio of Sakuja Shamal Gajanayake, showcasing projects and academic achievements.',
        url: 'https://sakuja.me',
        locale: 'en_US',
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Sakuja Shamal Gajanayake',
        description:
            'Explore the portfolio of Sakuja Shamal Gajanayake, an undergraduate student at the University of Jaffna.'
    },
    alternates: {
        canonical: 'https://sakuja.me'
    },
    additionalMetaTags: [
        {
            httpEquiv: 'Content-Security-Policy',
            content:
                "script-src 'self' https://www.googletagmanager.com https://unpkg.com"
        }
    ]
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={"scroll-smooth"}>
        <Head>
            <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <meta property="og:site_name" content="Sakuja Shamal Gajanayake" />
            <meta property="og:title" content="Sakuja Shamal Gajanayake" />
            <meta name="application-name" content="Sakuja Shamal Gajanayake" />
        </Head>
        <body className={`${italianno.className} ${rubik.className} ${roboto.className} antialiased`}>
        <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></Script>

        {/* Google Analytics Script - REPLACE GA_MEASUREMENT_ID WITH YOUR ACTUAL ID */}
        <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=G-KGTYLYFKFV`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
            {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'GA_MEASUREMENT_ID', {
                            page_path: window.location.pathname,
                        });
                    `}
        </Script>

        {/* Structured Data */}
        <Script id="structured-data" type="application/ld+json" strategy="afterInteractive">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Sakuja Shamal Gajanayake",
                "image": "https://sakuja.me/sakuja_shamal.jpg", // Replace with actual photo URL
                "url": "https://sakuja.me",
                "alumniOf": {
                    "@type": "CollegeOrUniversity",
                    "name": "University of Jaffna"
                },
                "knowsAbout": ["Computer Science", "Statistics", "Pure Maths"]
            })}
        </Script>

        <Script
            src="https://kit.fontawesome.com/f597464952.js"
            crossOrigin="anonymous"
        />

        <div>
            {children}
        </div>
        </body>
        </html>
    );
}