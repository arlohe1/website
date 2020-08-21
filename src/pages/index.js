import React from "react"

import Header from "../components/Header"
import Layout from "../components/layout"
import { Icon, iconType } from "../components/icon"

const IndexPage = () => (
    <Layout>
        <Header />
        <div className="content">
            <p>Hi!</p>
            <p>
                I'm a senior in the{" "}
                <a href="https://fisher.wharton.upenn.edu/">M&T Program</a> at
                the University of Pennsylvania where I'm pursuing dual degrees
                in Computer Science and Business Analytics.
            </p>
            <p>
                I've previously worked at{" "}
                <a href="https://www.snap.com">Snap Inc</a>
                <span role="img" aria-label="ghost">
                    👻
                </span>{" "}
                as a software engineering intern. I'm also a co-host of{" "}
                <a href="http://therelaxationstep.com">The Relaxation Step</a>.
            </p>
            <div style={{ textAlign: `center`, marginTop: `1.5em` }}>
                <Icon
                    iconType={iconType.LINKEDIN}
                    iconLink="http://linkedin.com/in/amitlohe"
                />
                <Icon
                    iconType={iconType.GITHUB}
                    iconLink="http://github.com/arlohe1"
                />
                <Icon
                    iconType={iconType.TWITTER}
                    iconLink="http://twitter.com/amit_lohe"
                />
                <Icon
                    iconType={iconType.EMAIL}
                    iconLink="mailto:alohe@seas.upenn.edu"
                />
            </div>
        </div>
    </Layout>
)

export default IndexPage
