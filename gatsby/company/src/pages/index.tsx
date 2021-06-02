import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Content from "../components/content"
import Footer from "../components/footer"

import News from "../components/news"

import WebsiteImg from "../images/update_website.jpg"
import GatsbyImg from "../images/Gatsby-Logo.svg"
import TailwindImg from "../images/tailwindcss-icon.svg"
import Topic from "../components/topic"

const Home = () => {
    return(
    <Layout>
        <Header page="home" />
        <Content>
            <div className="m-8">
                <Topic>Information</Topic>
                <p className="md:text-xl p-2">
                Big Bad Robots is software development company focused on Full-stack and Game development. We have experience with frameworks such as React, Django and backend database systems like PostgresSQL.
                We have developed Games from concept to production. We provide either custom development or with Game Engines such as Unity/Godot on PC/MacOS/Console and Mobile.
                </p >
                <p className="md:text-xl p-2">
                Contact us if you looking for developers with over 20 years experience in Software and Game Development at biz -at- bigbadrobots.com
                </p>
            </div>
            <div className="m-8">
                <Topic>Latest</Topic>
                <News image={TailwindImg} title="Website updated for mobile" date="1 June 2021">
                We use the power of Tailwind CSS to make our site compatible with mobile and tablets.
                </News>
                <News image ={GatsbyImg} title="Website updated!" date="27 May 2021">
                We updated our website to use the power of Gatsby!
                </News>
                <News image={WebsiteImg} title="New Website!" date="12 May 2021">
                We launch a new website that feels a bit retro but moves us forward with new products, services and workshops. Styled using Tailwind CSS no less!
                </News>
            </div>
        </Content>
        <Footer />
    </Layout>
    )
}

export default Home;