import React from "react"
import BannerImg from "../images/banner.png"
import ClawImg from "../images/nav_claw.png"


const Header = (props) => {
    const pages:string[] = ['home','products','services','workshops','contact'];
    const index:number = pages.indexOf(props.page);

    const prev = index === 0 ? null : index == 1 ? "/" : "/" + pages[index-1];
    const next = index === pages.length - 1 ? null: "/" + pages[index+1];
    const pageTitle = {
        'home' : 'Home',
        'products' : 'Products',
        'services' : 'Services',
        'workshops' : 'Workshops',
        'contact' : 'Contact'
    }


    return (
    <div>
        <img className="mx-auto" src={BannerImg} alt='banner' />
        <div className="absolute w-full top-17 md:hidden">
            <div className="flex justify-between bg-nav-texture">
                <a className={prev === null ? "invisible" : "text-nav"} href={prev}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                </svg>
                </a> 
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className={props.page === "home" ? "h-6 w-6" : "hidden"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" className={props.page === "products" ? "h-6 w-6" : "hidden"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" className={props.page === "services" ? "h-6 w-6" : "hidden"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>         

                    <svg xmlns="http://www.w3.org/2000/svg" className={props.page === "workshops" ? "h-6 w-6" : "hidden"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" className={props.page === "contact" ? "h-6 w-6" : "hidden"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>

                    <span className="text-white mt-2 text-xs">{pageTitle[props.page]}</span>
                </div> 
                <a className={next === null ? "invisible" : "text-nav"} href={next}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>      
                </a> 
            </div>
        </div>
        <div className="absolute w-full top-28 hidden md:block">
            <div className="flex items-center mx-40">
                <img src={ClawImg} alt='claw'/>
                <div className="flex justify-around bg-nav-texture font-nav text-nav h-8 w-full">
                    <div className={props.page === 'home' && 'text-white'}>
                        <a className="flex justify-center mt-2" href={props.page === 'index' ? '#' : '/'}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 lg:h-6 lg:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <span className="text-xs lg:text-base">Home</span>
                        </a>    
                    </div>
                    <div className={props.page === 'products' && 'text-white'}>
                        <a className="flex justify-center mt-2" href={props.page === 'products' ? '#' : '/products'}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 lg:h-6 lg:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <span className="text-xs lg:text-base">Products</span>
                        </a>
                    </div>
                    <div className={props.page === 'services' && 'text-white'}>
                        <a className="flex justify-center mt-2" href={props.page === 'services' ? '#' : '/services'}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 lg:h-6 lg:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>         
                            <span className="text-xs lg:text-base">Services</span>
                        </a>
                    </div>
                    <div className={props.page === 'workshops' && 'text-white'}>
                        <a className="flex justify-center mt-2" href={props.page === 'workshops' ? '#' : '/workshops'}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 lg:h-6 lg:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                            </svg>
                            <span className="text-xs lg:text-base">Workshops</span>
                        </a>
                    </div>
                    <div  className={props.page === 'contact' && 'text-white'}>
                        <a className="flex justify-center mt-2" href={props.page === 'contact' ? '#' : '/contact'}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 lg:h-6 lg:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="text-xs lg:text-base">Contact</span>
                        </a>
                    </div>
                </div>   
            </div>
        </div>
    </div>
    )
}

export default Header;