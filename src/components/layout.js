import React from "react";

import Footer from "../components/footer";
import Head from "../components/Head";
import Header from "../components/header";

import "./layout.css";

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
        <div style={{ marginBottom: `50%` }}>{children}</div>
        <div
            style={{
                textAlign: `center`,
            }}
        >
            <Footer />
        </div>
    </div>
);

export default Layout;
