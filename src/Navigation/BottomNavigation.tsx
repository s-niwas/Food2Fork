import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Bookmark from '../screens/Bookmark';
import Adding from '../screens/Adding';
import Notification from '../screens/Notification';
import Profile from '../screens/Profile';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

const TabScreens = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name='Bookmark' component={Bookmark}/>
      <Tab.Screen name='Adding' component={Adding}/>
      <Tab.Screen name='Notification' component={Notification}/>
      <Tab.Screen name='Profile' component={Profile}/>
    </Tab.Navigator>
  );
};

export default TabScreens;
