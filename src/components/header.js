import React from "react"
import { Link } from "gatsby"

const Header = () => (
    <header style={{ paddingTop: `3rem`, marginBottom: `1.5rem` }}>
        <Link to="/">
            <h3 style={{ display: `inline` }}>Amit Lohe</h3>
        </Link>
    </header>
)

export default Header
