import React from "react"

const Product = (props) => {
    return (
        <div className="lg:flex mb-2">
            <img className="w-72 h-38" src={props.image} alt={props.alt}/>
            <div className="lg:m-8 w-full lg:text-xl">
                {props.children}
            </div>
        </div>
    );
};


export default Product;