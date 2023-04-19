export const metaConfig = {
  title: 'Next.js v13 Guide',
  description: 'Next.js v13 Template made by LEETRUE',
  /* Basic Fields */
  generator: 'Next.js',
  applicationName: 'Next.js v13',
  referrer: 'origin-when-cross-origin', //
  keywords: ['Next.js', 'React', 'JavaScript'],
  creator: 'LEETRUE',
  publisher: 'LEETRUE',
  medtadataBase: new URL('https://yoon.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'ko-KR': '/ko-KR',
    },
  },
  authors: [{ name: 'LEETRUE' }],
  // publisedTile: "",
  /* Overwriting Fields */
  /* OG tags */
  openGraph: {
    type: 'website', // Would be better - DYNAMIC => "Website" | "Post" | "Page" | string
    title: 'dynamic title',
    description: 'dynamic description',
    url: 'dynamic url',
    siteName: 'LEETRUE BLOG',
    locale: 'ko_KR',
    images: [
      {
        url: 'imageURL',
        width: 400,
        height: 250,
        alt: 'images for OG',
        type: 'image/jpeg',
        secureUrl: 'secureUrl',
      }, // DYNAMIC
    ],
    authors: ['LEETRUE'],
  },
  /* ROBOTS */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  /* TWITTER */
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js v13 Template', // MAKE DYNAMIC
    description: 'The React Framework for the Web', // MAKE DYNAMIC
  },
};
