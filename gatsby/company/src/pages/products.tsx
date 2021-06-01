import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"
import Content from "../components/content"

import ProductLastCallImg from "../images/product_lastcall.gif"
import ProductWarmongrelImg from "../images/product_warmongrel.jpeg"
import ProductHnmImg from "../images/product_hnm.png"
import Topic from "../components/topic"

const Products = () => {
    return(
    <Layout>
        <Header page="products"/>
        <Content>        
            <div className="m-8">
                <Topic>Completed</Topic>
                <div className="flex">
                    <div>
                        <img src={ProductLastCallImg} alt='last call product'/>
                    </div>
                    <div className="m-8 w-full text-xl">
                        Joe, recently laid off, receives a mysterious letter from a lawyer representing Uncle "Stinky" Pete. Uncle Pete, recently deceased has left him a bar, the "Last Call". Having childhood dreams of running a bar, Joe jumps at the opportunity, dragging his skeptical girlfriend Amelia along with him.
                    </div>
                </div>
            </div>
            <div className="m-8">
                <Topic>In-Production</Topic>
                <div className="flex mb-2">
                    <div className="w-72 h-38">
                        <img src={ProductWarmongrelImg} alt='warmongrel product'/>
                    </div>
                    <div className="m-8 w-full text-xl">
                        The Rise of Augments has turned the tide of battle in the system wars. As a Squad Commander for a mecenery Mechanized Company, lead your troops to victory and uncover your forgotten past.
                    </div>
                </div>
                <div className="flex mb-2">
                    <div>
                        <img src={ProductHnmImg} alt='honor and money product'/>
                    </div>
                    <div className="m-8 w-full text-xl">
                        Join Calico,Kat and Lee hunting down the most dangerous criminals in the known galaxy. Earn money in this retro top down shooter to upgrade your equipment. 
                    </div>
                </div>
            </div>
        </Content>
        <Footer />
    </Layout>
    )
}

export default Products;