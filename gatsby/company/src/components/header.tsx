import React from "react"
import BannerImg from "../images/banner.png"
import ClawImg from "../images/nav_claw.png"


const Header = (props) => {
    return (
    <div>
        <img className="mx-auto" src={BannerImg} alt='banner' />
        <div className="absolute w-full top-28">
            <div className="flex items-center mx-40">
                <img src={ClawImg} alt='claw'/>
                <div className="flex justify-around items-center bg-nav-texture font-nav text-nav h-8 w-full">
                    <div className={props.page === 'home' && 'text-white'}>
                        <a className="flex justify-center items-center" href={props.page === 'home' ? '#' : '/'}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <span className="mt-2">Home</span>
                        </a>    
                    </div>
                    <div className={props.page === 'products' && 'text-white'}>
                        <a className="flex justify-center items-center" href={props.page === 'products' ? '#' : '/products'}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <span className="mt-2">Products</span>
                        </a>
                    </div>
                    <div className={props.page === 'services' && 'text-white'}>
                        <a className="flex justify-center items-center" href={props.page === 'services' ? '#' : '/services'}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>         
                            <span className="mt-1">Services</span>
                        </a>
                    </div>
                    <div className={props.page === 'workshops' && 'text-white'}>
                        <a className="flex justify-center items-center" href={props.page === 'workshops' ? '#' : '/workshops'}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                            </svg>
                            <span className="mt-1">Workshops</span>
                        </a>
                    </div>
                    <div  className={props.page === 'contact' && 'text-white'}>
                        <a className="flex justify-center items-center" href={props.page === 'contact' ? '#' : '/contact'}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="mt-1">Contact</span>
                        </a>
                    </div>
                </div>   
            </div>
        </div>
    </div>
    )
}

export default Header;