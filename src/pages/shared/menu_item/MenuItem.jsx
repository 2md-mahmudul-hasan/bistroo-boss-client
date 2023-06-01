import React from 'react';

const MenuItem = ({ item }) => {
  const { _id, name, category, price, image, recipe } = item;
  return (
    <div className='flex gap-3 space-x-4'>
      <img style={{ width: '70px', borderRadius: "0px 100px 100px 100px" }} src={image} alt='image' />
      <div className="">
        <h3>{name}-----------</h3>
        <p>{recipe}</p>
      </div>
      <p>{price}</p>
    </div>
  );
};

export default MenuItem;