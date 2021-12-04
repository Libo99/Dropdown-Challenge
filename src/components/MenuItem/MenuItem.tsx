import React from 'react'
import { MenuItem as Item } from '../../types/Data';

interface MenuItemProps {
    menuItem: Item;
}

const MenuItem = (({menuItem}) => {
    return (
        <div>
            {menuItem.name}
        </div>
    )
}) as React.FC<MenuItemProps>

export default MenuItem
