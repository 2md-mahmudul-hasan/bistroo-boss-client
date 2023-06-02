
import { Helmet } from 'react-helmet-async';
import Cover from './cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import SectionTitle from '../../components/section_title/SectionTitle';
import useHooks from '../../hooks/useHooks';
import MenuCategory from './menu_category/MenuCategory';
import img from '../../assets/menu/dessert-bg.jpeg'
const Menu = () => {
  const [menu] = useHooks()
  const offered = menu.filter(item => item.category === "offered")
  const salads = menu.filter(item => item.category === "salads")
  const desserts = menu.filter(item => item.category === "dessert")
  const soups = menu.filter(item => item.category === "soups")
  const pizza = menu.filter(item => item.category === "pizza")
  return (
    <div>
      <Helmet>
        <title>menu</title>
      </Helmet>
      <Cover
        className="w-full"
        coverTitle={"Our menu"}
        coverDetails={"There is basically no "} img={menuImg}
      >
      </Cover>
      <SectionTitle heading="To days Offer" subheading="do not miss"></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory
        items={desserts}
        coverTitle={"Desserts"}
        coverDetails={" Take your desserts"}
        coverImg={img}
      ></MenuCategory>


    </div>
  );
};

export default Menu;