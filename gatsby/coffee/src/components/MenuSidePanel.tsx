import React from 'react'

const MenuSidePanel = (props) => {
    return (
        <div className="bg-gray-100 w-80 h-80 border-r border-black">
            {props.children}
        </div>
    );
};


export default MenuSidePanel;