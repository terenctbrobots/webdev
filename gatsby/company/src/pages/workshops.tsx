import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"
import Content from "../components/content"

const Workshops = () => {
    return(
    <Layout>
        <Header page="workshops"/>
        <Content>
            <div className="m-8">
                <h1 className="font-bold text-2xl mb-5 bg-title-texture from-red-500 w-60 pl-2 text-nav">
                Information
                </h1>
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