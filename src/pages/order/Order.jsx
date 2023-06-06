
import Cover from '../menu/cover/Cover';
import orderImg from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useHooks from '../../hooks/useHooks';
import FoodCard from '../../components/food_card/FoodCard';
import { useState } from 'react';
import OrderTab from './OrderTab';

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const [menu] = useHooks()
  const salad = menu.filter(item => item.category === "salad")
  const pizza = menu.filter(item => item.category === "pizza")
  const soup = menu.filter(item => item.category === "soup")
  const dessert = menu.filter(item => item.category === "dessert")
  const drinks = menu.filter(item => item.category === "drinks")



  return (
    <div>
      <Cover img={orderImg} title="OUR SHOP" ></Cover>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drink</Tab>
        </TabList>

        <TabPanel>

          <OrderTab items={salad}></OrderTab>
        </TabPanel>

        <TabPanel>
      
            <OrderTab items={pizza}></OrderTab>

        </TabPanel>
        <TabPanel>
      

            <OrderTab items={soup}></OrderTab>
     
        </TabPanel>

        <TabPanel>
    

            <OrderTab items={dessert}></OrderTab>
         
        </TabPanel>

        <TabPanel>
    

            <OrderTab items={drinks}></OrderTab>
   
        </TabPanel>

      </Tabs>
    </div>
  );
};

export default Order;