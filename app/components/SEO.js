import Head from 'next/head';

const SEO = ({ title, description, keywords }) => {
    const baseTitle = "Sakuja Shamal | Computer Science Student & Software Developer";
    const fullTitle = title ? `${title} | ${baseTitle}` : baseTitle;

    return (
        <Head>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Sakuja Shamal Gajanayake" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://sakuja.me/" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://sakuja.me/" />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />

            {/* Canonical */}
            <link rel="canonical" href="https://sakuja.me/" />
            <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL} />
        </Head>
    );
};

SEO.defaultProps = {
    title: '',
    description: 'Portfolio of Sakuja Shamal Gajanayake, Computer Science student at University of Jaffna and professional software engineer from Sri Lanka',
    keywords: [
        'Sakuja',
        'Sakuja Shamal',
        'Sakuja Shamal Gajanayake',
        'University of Jaffna',
        'Computer Science Student Sri Lanka',
        'Sri Lanka Software Developer',
        'Full Stack Developer Jaffna',
        'React Developer Sri Lanka',
        'Jaffna University CS Graduate'
    ].join(', ')
};

export default SEO;