import React from 'react';
import MenuSidePanel from './MenuSidePanel';

import "./TopNavBar.css"

const MenuItemAbout = () => {
        return (
            <div className="flex absolute">
                <MenuSidePanel>
                    <div className="menu-item">
                        <div className="menu-item-header">Our Company</div>
                        <div className="menu-item-description">It's More Than Just Coffee. It's About The People</div>
                    </div>
                    <div className="menu-item">
                        <div className="menu-item-header">Out Heritage</div>
                        <div className="menu-item-description">Connect With Something Bigger</div>
                    </div>
                    <div className="menu-item">
                        <div className="menu-item-header">Coffee Malaysia</div>
                        <div className="menu-item-description">Making a Difference. Everyday</div>
                    </div>
                    <div className="menu-item">
                        <div className="menu-item-header">Stores</div>
                    </div>
                    <div className="menu-item">
                        <div className="menu-item-header">Customer Service</div>
                        <div className="menu-item-description">Welcome to the Support Center</div>
                    </div>
                </MenuSidePanel>
                <div>
                    Content goes here
                </div>
            </div>
        );
}


export default MenuItemAbout;