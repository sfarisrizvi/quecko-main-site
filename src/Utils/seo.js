// Shared SEO defaults — import and spread into NextSeo or Head on each page.
// Override any field per-page as needed.

export const defaultSeo = {
    title: 'Quecko — Web3 & Blockchain Agency',
    description:
        'Quecko is a leading Web3 and blockchain development agency building DeFi protocols, NFT platforms, smart contracts, and decentralized applications.',
    openGraph: {
        type: 'website',
        site_name: 'Quecko',
        images: [
            {
                url: 'https://res.cloudinary.com/quecko/image/upload/v1/quecko-og.jpg',
                width: 1200,
                height: 630,
                alt: 'Quecko — Web3 & Blockchain Agency',
            },
        ],
    },
    twitter: {
        handle: '@quecko_web3',
        site: '@quecko_web3',
        cardType: 'summary_large_image',
    },
    additionalMetaTags: [
        { name: 'publisher', content: 'Quecko' },
        { name: 'robots', content: 'index, follow' },
    ],
};

// Helper: build canonical URL on the server. Falls back to '' during SSR to avoid window references.
export function canonicalUrl(path = '') {
    const base = 'https://quecko.com';
    return `${base}${path}`;
}
