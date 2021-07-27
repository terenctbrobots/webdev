import React from "react"
import dayjs from "dayjs";


const News = (props) => {
    return (
        <div className="mb-2 md:flex p-8 w-full h-30 bg-gray-800 text-white rounded-md">
                {props.linkURL === "" ?
                    <img  className="w-40 h-40 overflow-hidden" src={props.image} alt='news image'/> :
                    <a href={props.linkURL} target="_blank">
                        <img  className="w-40 h-40 overflow-hidden" src={props.image} alt='news image'/>
                    </a>
                }
                <div className="m-4">
                    {props.linkURL === "" ?
                        <p className="md:text-xl bold text-nav m-1">{props.title}</p> :
                        <a href={props.linkURL} target="_blank">
                            <p className="md:text-xl bold text-nav m-1">{props.title}</p>
                        </a>
                    }
                    <p className="md:text-lg italic m-1">{dayjs(props.date).format("MMMM D, YYYY")}</p>
                    <div dangerouslySetInnerHTML={ {__html:props.children} } />
                </div>
        </div>
    )
}

export default News;