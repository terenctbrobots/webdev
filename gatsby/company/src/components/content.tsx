import React from "react"

const Content = (props) => {
    return (
        <div className="pt-2 pb-2 mx-10 border-8 border-gray-500">
            {props.children}
        </div>
    )
}

export default Content;