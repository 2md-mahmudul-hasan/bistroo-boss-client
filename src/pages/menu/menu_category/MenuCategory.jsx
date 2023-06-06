
import MenuItem from '../../shared/menu_item/MenuItem';
import Cover from '../cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, img }) => {

  return (
    <div className='pt-8'>
      {title && <Cover title={title} img={img}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)}
      </div>
      <Link to={`/order/${title}`}> <button className=" text-white text-1xl font-bold py-4 px-8 border-b-4 border-blue-700 hover:border-blue-500 rounded uppercase">Order now </button></Link>
    </div>
  );
};

export default MenuCategory;