import React from "react"

const Layout = (props) => {
    return (
        <main className="text-white bg-black">
            {props.children}
        </main>
    )
}

export default Layout;