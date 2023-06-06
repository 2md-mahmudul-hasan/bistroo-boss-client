
import { Helmet } from 'react-helmet-async';
import Cover from './cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import SectionTitle from '../../components/section_title/SectionTitle';
import useHooks from '../../hooks/useHooks';
import MenuCategory from './menu_category/MenuCategory';
import img from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"
import desertImg from "../../assets/menu/dessert-bg.jpeg"
const Menu = () => {
  const [menu] = useHooks()
  const offered = menu.filter(item => item.category === "offered")
  const salads = menu.filter(item => item.category === "salad")
  const desserts = menu.filter(item => item.category === "dessert")
  const soups = menu.filter(item => item.category === "soup")
  const pizza = menu.filter(item => item.category === "pizza")
  const drinks = menu.filter(item => item.category === "drinks")
  return (
    <div>
      <Helmet>
        <title>menu</title>
      </Helmet>
      <Cover
        className="w-full"
        title="Our menu"
        img={menuImg}
      >
      </Cover>
      <SectionTitle heading="To days Offer" subheading="do not miss"></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory
        items={desserts}
        title="Desserts"
        img={desertImg}
      ></MenuCategory>

      <MenuCategory img={pizzaImg} items={pizza} title="pizza"></MenuCategory>
      <MenuCategory img={saladImg} items={salads} title="salad"></MenuCategory>
      <MenuCategory img={soupImg} items={soups} title="soup"></MenuCategory>
    </div>
  );
};

export default Menu;