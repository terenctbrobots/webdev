import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"
import Content from "../components/content"

const Contact = () => {
    return(
    <Layout>
        <Header page="contact"/>
        <Content>
            <div className="m-8">
                <h1 className="font-bold text-2xl mb-5 bg-title-texture from-red-500 w-60 pl-2 text-nav">
                Details
                </h1>
                <p className="text-xl p-2">
                    If you like our ideas, our products or would simply like to just know more about us please feel free to contact us. We are open to discussion on any potential projects and new business opportunities.
                </p>
                <div className="text-center text-2xl">
                    <p className="text-nav text-3xl">Big Bad Robots Sdn Bhd</p>
                    <p>No.5 Jalan SS 1/36</p>
                    <p>47300 Petaling Jaya</p>
                    <p>Selangor, Malaysia</p>
                </div>
                <p>For more information feel free to contact us at: <a className="text-nav" href="mailto:biz@bigbadrobots.com">biz -at- bigbadrobotscom</a> </p>
            </div>
            </Content>
    <Footer />
    </Layout>
    )
}

export default Contact;