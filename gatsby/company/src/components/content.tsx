import React from "react"

const Content = (props) => {
    return (
        <div className="pt-8 pb-2 mx-10 border-l-8 border-r-8 border-b-8 border-gray-500 transform -translate-y-24">
            {props.children}
        </div>
    )
}

export default Content;