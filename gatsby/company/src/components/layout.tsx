import React from "react"

import SEO from "../components/seo"

const Layout = (props) => {
    return (
        <main className="text-white bg-black">
            <SEO />
            {props.children}
        </main>
    )
}

export default Layout;