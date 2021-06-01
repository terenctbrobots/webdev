import React from "react"

const Topic = ({children}) => {
    return (
        <h1 className="font-bold text-xl lg:text-2xl mb-5 bg-title-texture from-red-500 w-50 lg:w-60 pl-2 text-nav">
            {children}
        </h1>

    )
}

export default Topic;