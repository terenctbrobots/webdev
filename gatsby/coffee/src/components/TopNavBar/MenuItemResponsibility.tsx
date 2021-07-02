import React from 'react';
import MenuSidePanel from './MenuSidePanel';

import "./TopNavBar.css"

const MenuItemResponsibility = () => {
        return (
            <div className="flex absolute z-20">
                <MenuSidePanel>
                    <div className="menu-item">
                        <div className="menu-item-header">Strengthening Communities</div>
                        <div className="menu-item-description">Earning the Right to Be Part of Your Community</div>
                    </div>
                    <div className="menu-item">
                        <div className="menu-item-header">Leading in Sustainability</div>
                        <div className="menu-item-description">Caring for The Environment is Just as Important as Caring for Our Communities</div>
                    </div>
                    <div className="menu-item">
                        <div className="menu-item-header">Diversity & Inclusion</div>
                        <div className="menu-item-description">Creating a Culture of Belonging. Inclusion and Diversity</div>
                    </div>
                    <div className="menu-item">
                        <div className="menu-item-header">Ethical Sourcing</div>
                        <div className="menu-item-description">Bringing You Unique Sustainably Produced Coffee and Products</div>
                    </div>
                </MenuSidePanel>
                <div>
                    Content goes here
                </div>
            </div>
        );
}


export default MenuItemResponsibility;