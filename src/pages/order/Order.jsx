import React, { useState } from 'react';
import Cover from '../menu/cover/Cover';
import orderImg from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
      <Cover img={orderImg} coverDetails={"Would you like to try a dish?"} coverTitle={"OUR SHOP"} ></Cover>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Fizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drink</Tab>
        </TabList>

        <TabPanel>
          <h2>Salad</h2>
        </TabPanel>

        <TabPanel>
          <h2>Fizza</h2>
        </TabPanel>
        <TabPanel>
          <h2>Soup</h2>
        </TabPanel>

        <TabPanel>
          <h2>Dessert</h2>
        </TabPanel>
        <TabPanel>
          <h2>Drink</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;