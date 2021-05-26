import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"

const Workshops = () => {
    return(
    <Layout>
        <Header page="workshops"/>
        <div className="pt-8 pb-8 mx-10 border-l-8 border-r-8 border-b-8 border-gray-500 transform -translate-y-24">
            <div className="m-8">
                <h1 className="font-bold text-2xl mb-5 bg-title-texture from-red-500 w-60 pl-2 text-nav">
                Information
                </h1>
                <p className="text-xl p-2">
                    We are currently in the process of developing workshops for React, Django and Game Development. Watch this space for updates.
                </p >
            </div>
        </div>
        <Footer />
    </Layout>
    )
}

export default Workshops;