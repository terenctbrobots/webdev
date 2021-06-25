import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Content from "../components/content"
import Footer from "../components/footer"

import Newsfeed from "../components/newsfeed"

import Topic from "../components/topic"

const Home = () => {
    return(
    <Layout>
        <Header page="home" />
        <Content>
            <div className="m-8">
                <Topic>Information</Topic>
                <p className="md:text-xl p-2">
                Big Bad Robots is Software Development company focused on Full Stack and Game Development. We are experienced in developing enterprise solutions with Full Stack frameworks such as React/Django and backend systems like PostgresSQL/Redis.
                </p>
                <p className="md:text-xl p-2">
                We have developed Games from concept to production. We provide either custom development or with Game Engines such as Unity/Godot on PC/MacOS/Console and Mobile.
                </p >
                <p className="md:text-xl p-2">
                Contact us if you looking for developers with over 20 years experience in Software and Game Development at <a className="text-nav" href="mailto:biz@bigbadrobots.com">biz -at- bigbadrobots.com</a>
                </p>
            </div>
            <div className="m-8">
                <Topic>Latest</Topic>
                <Newsfeed />
            </div>
        </Content>
        <Footer />
    </Layout>
    )
}

export default Home;