import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Content from "../components/content"
import Footer from "../components/footer"

import WebsiteImg from "../images/update_website.jpg"
import GatsbyImg from "../images/Gatsby-Logo.svg"

const Home = () => {
    return(
    <Layout>
        <Header page="home" />
        <Content>
            <div className="m-8">
                <h1 className="font-bold text-2xl mb-5 bg-title-texture from-red-500 w-60 pl-2 text-nav">
                Information
                </h1>
                <p className="text-xl p-2">
                Big Bad Robots is software development company focused on Full-stack and Game development. We have experience with frameworks such as React, Django and backend database systems like PostgresSQL.
                We have developed Games from concept to production. We provide either custom development or with Game Engines such as Unity/Godot on PC/MacOS/Console and Mobile.
                </p >
                <p className="text-xl p-2">
                Contact us if you looking for developers with over 20 years experience in Software and Game Development at biz -at- bigbadrobots.com
                </p>
            </div>
            <div className="m-8">
                <h1 className="font-bold text-2xl mb-5 bg-title-texture from-red-500 w-60 pl-2 text-nav">
                Latest Updates
                </h1>
                <div className="mb-2 flex p-8 w-full h-30 bg-gray-600 text-white rounded-md">
                    <div>
                        <img  className="w-40 h-40 overflow-hidden" src={GatsbyImg} alt='gatsby logo'/>
                    </div>
                    <div className="m-4">
                        <p className="text-xl bold text-nav m-1">Website updated!</p>
                        <p className="text-lg italic m-1">27 May 2021</p>
                        <p className="m1">
                        We updated our website to use the power of Gatsby!
                        </p>
                    </div>
                </div>
                <div className="mb-2 flex p-8 w-full h-30 bg-gray-600 text-white rounded-md">
                    <div>
                        <img  className="w-40 h-40 overflow-hidden" src={WebsiteImg} alt='website screenshot'/>
                    </div>
                    <div className="m-4">
                        <p className="text-xl bold text-nav m-1">New Website!</p>
                        <p className="text-lg italic m-1">12 May 2021</p>
                        <p className="m1">
                        We launch a new website that feels a bit retro but moves us forward with new products, services and workshops. Styled using Tailwind CSS no less!
                        </p>
                    </div>
                </div>
            </div>
        </Content>
        <Footer />
    </Layout>
    )
}

export default Home;