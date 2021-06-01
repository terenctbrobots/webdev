import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"
import Content from "../components/content"
import Topic from "../components/topic"

const Workshops = () => {
    return(
    <Layout>
        <Header page="workshops"/>
        <Content>
            <div className="m-8">
                <Topic>Information</Topic>
                <p className="text-xl p-2">
                    We are currently in the process of developing workshops for React, Django and Game Development. Watch this space for updates.
                </p >
            </div>
        </Content>
        <Footer />
    </Layout>
    )
}

export default Workshops;