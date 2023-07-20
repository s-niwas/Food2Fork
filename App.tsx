
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Home from './src/screens/Home';
import { Provider as PaperProvider } from 'react-native-paper';
import RecipeIngrident from './src/screens/RecipeIngrident';
import Adding from './src/screens/Adding';
import Notification from './src/screens/Notification';
import Profile from './src/screens/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Bookmark from './src/screens/Bookmark';


const Tab = createBottomTabNavigator();
const App: React.FC = () => {
  

  return (
    // <Home/>
    // <RecipeIngrident/>
    <PaperProvider>
   <NavigationContainer>
   <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Tab.Screen name='Bookmark' component={Bookmark} options={{headerShown:false}}/>
      <Tab.Screen name='Adding' component={Adding} options={{headerShown:false}}/>
      <Tab.Screen name='Notification' component={Notification} options={{headerShown:false}}/>
      <Tab.Screen name='Profile' component={Profile} options={{headerShown:false}}/>
    </Tab.Navigator>
   </NavigationContainer>
   </PaperProvider>
  );
}

export default App;
