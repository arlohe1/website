import React from "react"
import { Helmet } from "react-helmet"

const Head = () => (
    <Helmet>
        <title>Amit Lohe</title>
        <meta name="title" content="Amit Lohe" />
        <meta name="description" content="Hi! Welcome to my website." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Amit Lohe" />
        <meta property="og:description" content="Hi! Welcome to my website." />
        <meta
            property="og:image"
            content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Amit Lohe" />
        <meta
            property="twitter:description"
            content="Hi! Welcome to my website."
        />
        <meta
            property="twitter:image"
            content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
    </Helmet>
)

export default Head
