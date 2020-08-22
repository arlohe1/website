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

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Amit Lohe" />
        <meta
            property="twitter:description"
            content="Hi! Welcome to my website."
        />
    </Helmet>
)

export default Head
