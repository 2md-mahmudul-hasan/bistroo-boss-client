import React, { useState } from 'react';
import Cover from '../menu/cover/Cover';
import orderImg from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useHooks from '../../hooks/useHooks';
import FoodCard from '../../components/food_card/FoodCard';

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const [menu] = useHooks()
  const offered = menu.filter(item => item.category === "offered")
  const salad = menu.filter(item => item.category === "salad")
  const dessert = menu.filter(item => item.category === "dessert")
  const soup = menu.filter(item => item.category === "soup")
  const pizza = menu.filter(item => item.category === "pizza")
  const drinks = menu.filter(item => item.category === "drinks")



  return (
    <div>
      <Cover img={orderImg} coverDetails={"Would you like to try a dish?"} coverTitle={"OUR SHOP"} ></Cover>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>salad</Tab>
          <Tab>offered</Tab>
          <Tab>dessert</Tab>
          <Tab>soup</Tab>
          <Tab>pizza</Tab>
          <Tab>drinks</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-3 gap-4 p-4 m-4">
            {salad.map(item => <FoodCard key={item._id} item={item}></FoodCard>)}
          </div>

        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-3 gap-4 p-4 m-4">
            {offered.map(item => <FoodCard key={item._id} item={item}></FoodCard>)}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-4 p-4 m-4">
            {dessert.map(item => <FoodCard key={item._id} item={item}></FoodCard>)}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-3 gap-4 p-4 m-4">
            {soup.map(item => <FoodCard key={item._id} item={item}></FoodCard>)}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-3 gap-4 p-4 m-4">
            {pizza.map(item => <FoodCard key={item._id} item={item}></FoodCard>)}
          </div>
        </TabPanel>


        <TabPanel>
          <div className="grid grid-cols-3 gap-4 p-4 m-4">
            {drinks.map(item => <FoodCard key={item._id} item={item}></FoodCard>)}
          </div>
        </TabPanel>

      </Tabs>
    </div>
  );
};

export default Order;