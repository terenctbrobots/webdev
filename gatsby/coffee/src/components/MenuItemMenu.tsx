import React from 'react';
import MenuSidePanel from './MenuSidePanel';

import "./TopNavBar.css"

const MenuItemMenu = () => {
        return (
            <div className="flex">
                <MenuSidePanel>
                    <div className="menu-item">
                        <div className="menu-item-header">Drinks</div>
                        <div className="menu-item-description">Amazing coffee and handcrafted beverages to discover and enjoy</div>
                    </div>
                    <div className="menu-item">
                        <div className="menu-item-header">Food</div>
                        <div className="menu-item-description">Mad with high-quality, simple ingredients. It is real food and it is simply delicious</div>
                    </div>
                    <div className="menu-item">
                        <div className="menu-item-header">Merchandise</div>
                        <div className="menu-item-description">The Perfect Drinkware Designed for Any Season</div>
                    </div>
                </MenuSidePanel>
                <div>
                    Content goes here
                </div>
            </div>
        );
}


export default MenuItemMenu;