import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"

const Contact = () => {
    return(
    <Layout>
        <Header page="contact"/>
        <Footer />
        <div className="pt-8 pb-8 mx-10 border-l-8 border-r-8 border-b-8 border-gray-500 transform -translate-y-24">
        <div className="m-8">
            <h1 className="font-bold text-2xl mb-5 bg-title-texture from-red-500 w-60 pl-2 text-nav">
            Details
            </h1>
            <p className="text-xl p-2">
                If you like our ideas, our products or would simply like to just know more about us please feel free to contact us. We are open to discussion on any potential projects and new business opportunities related to games.
            </p>
            <div className="text-center text-2xl">
                <p className="text-nav text-3xl">Big Bad Robots Sdn Bhd</p>
                <p>No.5 Jalan SS 1/36</p>
                <p>47300 Petaling Jaya</p>
                <p>Selangor, Malaysia</p>
            </div>
            <p>For more information feel free to contact us at: <a className="text-nav" href="mailto:biz@bigbadrobots.com">biz -at- bigbadrobotscom</a> </p>
        </div>
    </div>

    </Layout>
    )
}

export default Contact;