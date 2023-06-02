import React from 'react';
import MenuItem from '../../shared/menu_item/MenuItem';
import Cover from '../cover/Cover';

const MenuCategory = ({ items, coverDetails, coverTitle, coverImg }) => {

  return (
    <div>
      {coverTitle && <Cover
        className="w-full"
        coverTitle={coverTitle}
        coverDetails={coverDetails} img={coverImg}
      >
      </Cover>}
      <div className="menu my-8 grid grid-cols-2 gap-4">
        {items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)}
      </div>
    </div>
  );
};

export default MenuCategory;