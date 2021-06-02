import React from "react"

const News = (props) => {
    return (
        <div className="mb-2 md:flex p-8 w-full h-30 bg-gray-800 text-white rounded-md">
            <img  className="w-40 h-40 overflow-hidden" src={props.image} alt='news image'/>
                <div className="m-4">
                    <p className="md:text-xl bold text-nav m-1">{props.title}</p>
                    <p className="md:text-lg italic m-1">{props.date}</p>
                    <p className="m1">
                    {props.children}
                    </p>
                </div>

        </div>
    )
}

export default News;