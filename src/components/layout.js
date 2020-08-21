import React from "react"

import Footer from "../components/footer"
import Head from "../components/head"
import Header from "../components/header"

import "./layout.css"

const Layout = ({ children }) => (
    <div
        style={{
            margin: `0rem auto`,
            height: "100%",
            maxWidth: `600px`,
            fontSize: `1.2em`,
            fontFamily: `trebuchet ms,Verdana,verdana ref,segoe ui,Candara,lucida grande,lucida sans unicode,lucida sans,Tahoma,sans-serif`,
        }}
    >
        <Head />
        <Header />
        <div>{children}</div>
        <div
            style={{
                position: `absolute`,
                width: `100%`,
                left: `0`,
                bottom: `0`,
            }}
        >
            <Footer />
        </div>
    </div>
)

export default Layout

//margin: `3rem auto`,
