import React from 'react';
import MenuSidePanel from './MenuSidePanel';

import "./TopNavBar.css"

const MenuItemCoffee = () => {
        return (
            <div className="flex absolute z-20">
                <MenuSidePanel>
                    <div className="menu-item">
                        <div className="menu-item-header">Our Coffees</div>
                        <div className="menu-item-description">Learn about our different processes</div>
                    </div>
                    <div className="menu-item">
                        <div className="menu-item-header">How to Brew Great Coffee</div>
                        <div className="menu-item-description">Step-by-step guides on different processes</div>
                    </div>
                    <div className="menu-item">
                        <div className="menu-item-header">Coffee Reserves</div>
                        <div className="menu-item-description">Sharing the small-lot coffee</div>
                    </div>
                    <div className="menu-item">
                        <div className="menu-item-header">Ethical Sourcing</div>
                        <div className="menu-item-description">Producing the highest quality through ethical and responsible practices</div>
                    </div>
                </MenuSidePanel>
                <div>
                    Content goes here
                </div>
            </div>
        );
}


export default MenuItemCoffee;