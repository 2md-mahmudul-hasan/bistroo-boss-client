import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/section_title/SectionTitle';
import MenuItem from '../../shared/menu_item/MenuItem';

const PapularItems = () => {
  const [menu, setMenu] = useState([])
  useEffect(() => {
    fetch('menu.json')
      .then(res => res.json())
      .then(data => {
        const popularItems = data.filter(item => item.category === 'popular')
        setMenu(popularItems)
      })
  })
  return (
    <div>
      <SectionTitle heading={"Papular items"} subheading={"---Order Now---"}></SectionTitle>
      <div className="menu my-8 grid grid-cols-2 gap-4">
        {menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)}
      </div>
    </div>
  );
};

export default PapularItems;