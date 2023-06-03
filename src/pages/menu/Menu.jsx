
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
const Menu = () => {
  const [menu] = useHooks()
  const offered = menu.filter(item => item.category === "offered")
  const salads = menu.filter(item => item.category === "salad")
  const desserts = menu.filter(item => item.category === "dessert")
  const soups = menu.filter(item => item.category === "soup")
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

      <MenuCategory coverImg={pizzaImg} items={pizza} coverTitle={"Pizza"}
        coverDetails={" Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
      <MenuCategory coverImg={saladImg} items={salads} coverTitle={"salads"}
        coverDetails={" Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer to a type specimen book."}></MenuCategory>
      <MenuCategory coverImg={soupImg} items={soups} coverTitle={"soupImg"}
        coverDetails={" Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer to a type specimen book."}></MenuCategory>


    </div>
  );
};

export default Menu;