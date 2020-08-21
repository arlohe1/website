import React from "react"

import Footer from "../components/footer"

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
        <div style={{ height: `95%` }}>{children}</div>
        <div style={{ height: `5%` }}>
            <Footer />
        </div>
    </div>
)

export default Layout

//margin: `3rem auto`,
