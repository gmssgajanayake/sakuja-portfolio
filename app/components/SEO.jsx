import Head from 'next/head';

const SEO = ({title, description, keywords, pageUrl, ogImage}) => {
    const baseTitle = "Sakuja Shamal | Computer Science Student & Software Engineer";
    const fullTitle = title ? `${title} | ${baseTitle}` : baseTitle;
    const canonicalUrl = pageUrl ? `https://sakuja.me${pageUrl}` : 'https://sakuja.me';
    const socialImage = ogImage || 'https://sakuja.me/images/og-default.png';

    return (
        <Head>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle}/>
            <meta name="description" content={description}/>
            <meta name="keywords" content={keywords}/>
            <meta name="author" content="Sakuja Shamal Gajanayake"/>

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website"/>
            <meta property="og:url" content={canonicalUrl}/>
            <meta property="og:title" content={fullTitle}/>
            <meta property="og:description" content={description}/>
            <meta property="og:image" content={socialImage}/>
            <meta property="og:image:width" content="1200"/>
            <meta property="og:image:height" content="630"/>
            <meta property="og:locale" content="en_LK"/>
            <meta property="og:site_name" content="Sakuja Shamal Portfolio"/>

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:site" content="@sakuja_shamal"/>
            <meta name="twitter:creator" content="@sakuja_shamal"/>
            <meta name="twitter:title" content={fullTitle}/>
            <meta name="twitter:description" content={description}/>
            <meta name="twitter:image" content={socialImage}/>

            {/* Canonical */}
            <link rel="canonical" href={canonicalUrl}/>
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
        'Sri Lanka Software Engineer',
        'Full Stack Developer Jaffna',
        'React Developer Sri Lanka',
        'Jaffna University CS Graduate'
    ].join(', '),
    pageUrl: '/',
    ogImage: ''
};

export default SEO;