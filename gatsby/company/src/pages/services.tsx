import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Content from "../components/content"
import Footer from "../components/footer"
import Topic from "../components/topic"

import ReactImg from "../images/React-icon.svg"
import DjangoImg from "../images/django-logo-negative.svg"
import BackendImg from "../images/backend.svg"

import UnityImg from "../images/unity.svg"
import GodotImg from "../images/Godot_icon.svg"

const Services = () => {
    return(
    <Layout>
        <Header page="services"/>
            <Content>
                <div className="m-8">
                <Topic>Full stack</Topic>
                <div className="lg:flex mb-2">
                    <img className="w-72 h-50" src={ReactImg}/>
                    <div className="lg:m-8 w-full lg:text-xl">
                        Need a responsive corporate web application developed? Need to integrate to a legacy system?
                        We have extensive experience with React with different UI frameworks (although we prefer Tailwind CSS). We will be able to develop your application with full REST
                        functionality as per your requirements and integrate to your corporate servers. Gatsby or Create React App isn't a problem for us.
                    </div>
                </div>
                <div className="lg:flex">
                    <img className="w-72 h-50" src={DjangoImg}/>
                    <div className="lg:m-8 w-full lg:text-xl">
                        With our knowledge of Django, we will be able to deliver a comprehensive solution for all your Python and/or Machine Learning needs. If you prefer to leverage off the 
                        power of Django for its backend capabilities while create a Respossive front end, we can implement a REST API to handle that.
                    </div>
                </div>
                <div className="lg:flex">
                    <img className="w-72 h-50" src={BackendImg}/>
                    <div className="lg:m-8 w-full lg:text-xl">
                        From PostgresSQL, MySQL to Redis to custom backend software development for large financial corporations, we have worked on such projects. Our team has worked with company such as IBM and 
                        Accenture where security and high software scalablity is paramount. We are proficient with Python, Unix Systems programming, scripting automated systems and setting/scaling big data systems.
                    </div>
                </div>
            </div>
            <div className="m-8">
                <Topic>Game Development</Topic> 
                <div className="lg:flex mb-2">
                    <img className="bg-white w-72 h-50" src={UnityImg}/>
                    <div className="lg:m-8 w-full lg:text-xl">
                        Having used Unity for almost a decade, we have extensive exprience both in developing PC/Mac OS or mobile applications. We have created workshops in the past teaching Unity as well as
                        worked both on commericial products for clients and for our own products. From implementing competitive AI or Gameplay, we understand how to develop and end to end solution.
                    </div>
                </div>    
                <div className="lg:flex mb-2">
                    <img className="w-72 h-50" src={GodotImg}/>
                    <div className="lg:m-8 w-full lg:text-xl">
                    While relative new compared to other Game Engines of this generation, the Godot Engine has shown to be be compelling alternative to commerical Engines. With features rivaling those commericial ones, we will be able to guide you through the development process or help port your game. Check out our workshop and demos when they become available.
                    </div>
                </div>    
            </div>
       </Content>
        <Footer />
    </Layout>
    )
}

export default Services;