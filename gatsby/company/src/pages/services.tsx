import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"

const Services = () => {
    return(
    <Layout>
        <Header page="services"/>
            <div className="pt-8 pb-8 mx-10 border-l-8 border-r-8 border-b-8 border-gray-500 transform -translate-y-24">
            <div className="m-8">
                <h1 className="font-bold text-2xl mb-5 bg-title-texture from-red-500 w-60 pl-2 text-nav">
                Full stack
                </h1>
                <div className="flex mb-2">
                    <div className="w-72 h-50">
                        <img src="React-icon.svg"/>
                    </div>
                    <div className="m-8 w-full text-xl">
                        Need a responsive corporate web application developed? Need to integrate to a legacy system?
                        We have extensive experience with React with different UI frameworks (although we prefer Tailwind CSS). We will be able to develop your application with full REST
                        functionality as per your requirements and integrate to your corporate servers.
                    </div>
                </div>
                <div className="flex">
                    <div className="w-72 h-50">
                        <img src="django-logo-negative.svg"/>
                    </div>
                    <div className="m-8 w-full text-xl">
                        With our knowledge of Django, we will be able to deliver a comprehensive solution for all your Python and/or Machine Learning needs. If you prefer to leverage off the 
                        power of Django for its backend capabilities while create a Respossive front end, we can implement a REST API to handle that.
                    </div>
                </div>
                <div className="flex">
                    <div className="w-72 h-50">
                        <img src="backend.svg"/>
                    </div>
                    <div className="m-8 w-full text-xl">
                        From PostgresSQL, MySQL to Redis to custom backend software development for large financial corporations, we have worked on such projects. Our team has worked with company such as IBM and 
                        Accenture where security and high software scalablity is paramount. We are proficient with Python, Unix Systems programming, scripting automated systems and setting/scaling big data systems.
                    </div>
                </div>
            </div>
            <div className="m-8">
                <h1 className="font-bold text-2xl mb-5 bg-title-texture from-red-500 w-60 pl-2 text-nav">
                Game Development 
                </h1>
                <div className="flex mb-2">
                    <div className="w-72 h-50">
                        <img className="bg-white" src="unity.svg"/>
                    </div>
                    <div className="m-8 w-full text-xl">
                        Having used Unity for almost a decade, we have extensive exprience both in developing PC/Mac OS or mobile applications. We have created workshops in the past teaching Unity as well as
                        worked both on commericial products for clients and for our own products. From implementing competitive AI or Gameplay, we understand how to develop and end to end solution.
                    </div>
                </div>    
                <div className="flex mb-2">
                    <div className="w-72 h-50">
                        <img src="Godot_icon.svg"/>
                    </div>
                    <div className="m-8 w-full text-xl">
                    While relative new compared to other Game Engines of this generation, the Godot Engine has shown to be be compelling alternative to commerical Engines. With features rivaling those commericial ones, we will be able to guide you through the development process or help port your game. Check out our workshop and demos when they become available.
                    </div>
                </div>    
            </div>
        </div>
        <Footer />
    </Layout>
    )
}

export default Services;