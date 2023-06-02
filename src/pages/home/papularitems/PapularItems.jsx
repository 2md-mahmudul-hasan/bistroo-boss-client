import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/section_title/SectionTitle';
import MenuItem from '../../shared/menu_item/MenuItem';
import useHooks from '../../../hooks/useHooks';

const PapularItems = () => {
  const [menu] = useHooks()
  const papularitems = menu.filter(item => item.category == "popular")

  return (
    <div className='mb-8'>
      <SectionTitle heading={"Papular items"} subheading={"---Order Now---"}></SectionTitle>
      <div className="menu my-8 grid grid-cols-2 gap-4">
        {papularitems.map(item => <MenuItem key={item._id} item={item}></MenuItem>)}
      </div>
      <div className="flex justify-center">    <button className=" hover:bg-blue-400 text-white text-1xl font-bold py-4 px-8 border-b-4 border-blue-700 hover:border-blue-500 rounded uppercase">View full menu</button></div>

    </div>
  );
};

export default PapularItems;