import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"

const Products = () => {
    return(
    <Layout>
        <Header page="products"/>
        <div className="pt-8 pb-8 mx-10 border-l-8 border-r-8 border-b-8 border-gray-500 transform -translate-y-24">
            <div className="m-8">
                <h1 className="font-bold text-2xl mb-5 bg-title-texture from-red-500 w-60 pl-2 text-nav">
                    Completed
                </h1>
                <div className="flex">
                    <div>
                        <img src="product_lastcall.png"/>
                    </div>
                    <div className="m-8 w-full text-xl">
                        Joe, recently laid off, receives a mysterious letter from a lawyer representing Uncle "Stinky" Pete. Uncle Pete, recently deceased has left him a bar, the "Last Call". Having childhood dreams of running a bar, Joe jumps at the opportunity, dragging his skeptical girlfriend Amelia along with him.
                    </div>
                </div>
            </div>
            <div className="m-8">
                <h1 className="font-bold text-2xl mb-5 bg-title-texture from-red-500 w-60 pl-2 text-nav">
                    In-Production
                </h1>
                <div className="flex mb-2">
                    <div className="w-72 h-38">
                        <img src="product_warmongrel.jpeg"/>
                    </div>
                    <div className="m-8 w-full text-xl">
                        The Rise of Augments has turned the tide of battle in the system wars. As a Squad Commander for a mecenery Mechanized Company, lead your troops to victory and uncover your forgotten past.
                    </div>
                </div>
                <div className="flex mb-2">
                    <div>
                        <img src="product_hnm.png"/>
                    </div>
                    <div className="m-8 w-full text-xl">
                        Join Calico,Kat and Lee hunting down the most dangerous criminals in the known galaxy. Earn money in this retro top down shooter to upgrade your equipment. 
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </Layout>
    )
}

export default Products;