import React, { useState } from "react"

import "./TopNavBar.css"

import LogoImg from "images/coffee-logo.jpg";

import MenuItemCoffee from "./MenuItemCoffee"
import MenuItemMenu from "./MenuItemMenu"
import MenuItemResponsibility from "./MenuItemResponsibility";
import MenuItemAbout from "./MenuItemAbout";

export enum MenuItemType {
    None,
    Coffee,
    Menu,
    Rewards,
    Responsibility,
    Career,
    About,
}


const TopNavBar = () => {
    let [menuItem, setMenuItem] = useState(MenuItemType.None)

    function handleCoffeeMenuItem() { 
        menuItem !== MenuItemType.Coffee ? setMenuItem(MenuItemType.Coffee) : setMenuItem(MenuItemType.None)
    }

    function handleMenuMenuItem() {
        menuItem !== MenuItemType.Menu ? setMenuItem(MenuItemType.Menu) : setMenuItem(MenuItemType.None)
    }

    function handleMenuResponsibility() {
        menuItem !== MenuItemType.Responsibility ? setMenuItem(MenuItemType.Responsibility) : setMenuItem(MenuItemType.None)
    }

    function handleMenuAbout() {
        menuItem !== MenuItemType.About ? setMenuItem(MenuItemType.About) : setMenuItem(MenuItemType.None)
    }


    return (
    <div className="relative">
        <div className="flex justify-between bg-gray-100 pl-4 pr-4">
            <div className="flex items-center">
                <img className="m-2 h-14 rounded-md" src={LogoImg} alt="coffee-logo" />
                <button className="nav-bar-item" onClick={ () => handleCoffeeMenuItem() }>COFFEE</button>
                <button className="nav-bar-item" onClick={ () => handleMenuMenuItem() }>MENU</button>
                <div className="nav-bar-item">REWARDS</div>
                <button className="nav-bar-item" onClick={ () => handleMenuResponsibility() }>RESPONSIBILITY</button>
                <div className="nav-bar-item">CAREER CENTER</div>
                <button className="nav-bar-item" onClick={ () => handleMenuAbout() }>ABOUT US</button>
                </div>
            <div className="flex items-center">
                <div className="nav-bar-item">FIND A STORE</div>
                <div className="nav-bar-item">SIGN IN</div>
            </div>
        </div>
        {menuItem === MenuItemType.Coffee && <MenuItemCoffee />}
        {menuItem === MenuItemType.Menu && <MenuItemMenu />}
        {menuItem === MenuItemType.Responsibility && <MenuItemResponsibility />}
        {menuItem === MenuItemType.About && <MenuItemAbout />}
    </div>
    )
}

export default TopNavBar;