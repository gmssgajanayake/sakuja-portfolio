import {Rubik, Italianno, Roboto} from "next/font/google";
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
    description: 'Portfolio of Sakuja Shamal | BSc in Computer Science, Statistics & Maths student at University of Jaffna. Explore projects, academic work, and achievements.',
    keywords: [
        "Sakuja",
        "Sakuja Shamal",
        "Sakuja Shamal Gajanayake",
        "Portfolio",
        "Computer Science",
        "Statistics",
        "Pure Maths",
        "University of Jaffna",
        "Sakuja Gajanayake",
        'Sri Lanka Software Developer'
    ],
    openGraph: {
        title: "Sakuja Shamal",
        description:
            "Explore the portfolio of Sakuja Shamal, showcasing projects and academic achievements.",
        url: "https://sakuja.me",
        siteName: "Sakuja Shamal",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Sakuja Shamal Gajanayake",
        description:
            "Explore the portfolio of Sakuja Shamal, an undergraduate student at the University of Jaffna.",
    },
    alternates: {
        canonical: "https://sakuja.me",
    },
    additionalMetaTags: [
        {
            httpEquiv: 'Content-Security-Policy',
            content:
                "script-src 'self' 'unsafe-inline' https://www.google-analytics.com https://unpkg.com"
        }
    ]
};

export default function RootLayout({children}) {
    return (
        <html lang="en" className={"scroll-smooth"}>
        <head>
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            <title>Sakuja Shamal</title>
            <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
            <meta property="og:site_name" content="Sakuja Shamal" />
            <meta property="og:title" content="Sakuja Shamal" />
        </head>
        <body
            className={`${italianno.className} ${rubik.className} ${roboto.className} antialiased `}
        >
        <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></Script>
        {/* Google Analytics Script */}
        <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
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

        {/* Inject JSON-LD using the Script component */}
        <Script id="structured-data" type="application/ld+json" strategy="afterInteractive">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "image": "https://sakuja.me/favicon.ico", // Consider using a personal headshot or a proper image
                "name": "Sakuja Shamal",
                "url": "https://sakuja.me",
                "alumniOf": {
                    "@type": "CollegeOrUniversity",
                    "name": "University of Jaffna"
                },
                "knowsAbout": ["Computer Science", "Statistics", "Pure Maths"]
            })}
        </Script>


        <Script src="https://kit.fontawesome.com/f597464952.js" crossOrigin="anonymous"></Script>
        <div>
            {children}
        </div>
        </body>
        </html>
    );
}
