import React from "react"

import  TopNavBar from "../components/TopNavBar"

const Home = () => {
    return (
        <div>
           <div className="bg-green-800 flex justify-end text-white p-2">
                Exciting updates to coffee rewards >>
           </div>
           <TopNavBar />

        </div>
    )
}

export default Home;