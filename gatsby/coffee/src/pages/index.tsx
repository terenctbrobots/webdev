import React from "react"

import  TopNavBar from "components/TopNavBar/TopNavBar"
import Slideshow from "components/Slideshow/Slideshow"

const Home = () => {
    return (
        <div className="w-screen">
           <div className="bg-green-800 flex justify-end text-white p-2">
                Exciting updates to coffee rewards >>
           </div>
           <TopNavBar />
            <Slideshow />    
        </div>
    )
}

export default Home;