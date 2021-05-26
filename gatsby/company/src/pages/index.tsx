import React from "react"
import Layout from "../components/layout"

const Home = () => {
    return(
    <Layout>
        <div className="my-5">
            <div className="object-center">
                <img className="mx-auto" src='banner.png' alt='banner' />
            </div>
            <div className="mx-10 border-t-8 border-l-8 border-r-8 border-gray-500 h-8 transform translate-y-3">

            </div> 
            <div className="flex items-center mx-40 transform -translate-y-12 z-50">
                <div>
                    <img src="nav_claw.png" />
                </div>
                <div className="flex justify-around items-center bg-nav-texture font-nav text-nav h-8 w-full">
                    <div className="text-white">
                        <a className="flex justify-center items-center" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <span className="mt-2">Home</span>
                        </a>    
                    </div>
                    <div>
                        <a className="flex justify-center items-center"href="products.html">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <span className="mt-2">Products</span>
                        </a>
                    </div>
                    <div>
                        <a className="flex justify-center items-center"href="services.html">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>         
                            <span className="mt-1">Services</span>
                        </a>
                    </div>
                    <div>
                        <a className="flex justify-center items-center"href="workshops.html">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                            </svg>
                            <span className="mt-1">Workshops</span>
                        </a>
                    </div>
                    <div>
                        <a className="flex justify-center items-center"href="contact.html">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="mt-1">Contact</span>
                        </a>
                    </div>
                </div>   
            </div>
        </div>
        <div className="pt-8 pb-8 mx-10 border-l-8 border-r-8 border-b-8 border-gray-500 transform -translate-y-24">
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
                        <img  class="w-40 h-40 overflow-hidden" src="update_website.jpg" />
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

        </div>
        <div className="text-center italic">
            All images, text are copyright to Big Bad Robots Sdn Bhd unless otherwise mentioned.
        </div>
    </Layout>
    )
}

export default Home;