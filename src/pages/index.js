import React from "react"

import Layout from "../components/layout"
import { Icon, iconType } from "../components/icon"

const IndexPage = () => (
    <Layout>
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
                and <a href="https://www.twinelabs.com/">Twine Labs</a>
                <span role="img" aria-label="thread">
                    🧵
                </span>{" "}
                as a software engineering intern. I'm also a co-host of{" "}
                <a href="http://therelaxationstep.com">The Relaxation Step</a>
                <span role="img" aria-label="microphone">
                    🎙️
                </span>
                .
            </p>
            <p>
                I'm interested in tech and sustainability. I'm also pretty good
                at identifying tree species
                <span role="img" aria-label="tree">
                    🌳
                </span>
                , especially those native to Kentucky.
            </p>
            <div style={{ textAlign: `center`, marginTop: `2em` }}>
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
