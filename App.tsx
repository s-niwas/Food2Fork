import {NavigationContainer} from '@react-navigation/native';
import React, { useState } from 'react';
import {Provider as PaperProvider, Text} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import SearchItems from './src/screens/searchitems';
import BottomTabNavigator from './src/Navigation/BottomTabNavigation';
import {View, TouchableOpacity, Image} from 'react-native';
import {StatusBar} from 'react-native';
import RecipeIngrident from './src/screens/RecipeIngrident';
import {Svg, Path} from 'react-native-svg';
import CustomMenu from './src/screens/CustomMenu';

const Stack = createStackNavigator();

const CustomHeaderTitle = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 80,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontFamily: 'Poppins',
          fontWeight: 'bold',
          fontSize: 18,
          lineHeight: 27,
          color: '#181818',
        }}>
        Search recipes
      </Text>
    </View>
  );
};

const CustomMenuOptions = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuPress = () => {
    setMenuVisible(true);
  };

  const handleMenuClose = () => {
    setMenuVisible(false);
  };

   return (
    <View style={{alignItems: 'center', paddingRight: 30}}>
      <TouchableOpacity onPress={handleMenuPress}>
        <Svg width={20} height={40} viewBox="0 0 41.915 41.916">
          <Path
            fill="#000000"
            d="M11.214,20.956c0,3.091-2.509,5.589-5.607,5.589C2.51,26.544,0,24.046,0,20.956c0-3.082,2.511-5.585,5.607-5.585C8.705,15.371,11.214,17.874,11.214,20.956z"
          />
          <Path
            fill="#000000"
            d="M26.564,20.956c0,3.091-2.509,5.589-5.606,5.589c-3.097,0-5.607-2.498-5.607-5.589c0-3.082,2.511-5.585,5.607-5.585C24.056,15.371,26.564,17.874,26.564,20.956z"
          />
          <Path
            fill="#000000"
            d="M41.915,20.956c0,3.091-2.509,5.589-5.607,5.589c-3.097,0-5.606-2.498-5.606-5.589c0-3.082,2.511-5.585,5.606-5.585C39.406,15.371,41.915,17.874,41.915,20.956z"
          />
        </Svg>
        <View >
      {menuVisible && <CustomMenu visible={menuVisible} onClose={handleMenuClose} />}
      </View>
      </TouchableOpacity>
      
    </View>
  );
};

const App: React.FC = () => {
  return (
    <PaperProvider>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="BottomTabs"
            component={BottomTabNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="RecipeIngrident"
            component={RecipeIngrident}
            options={{
              headerRight: () => <CustomMenuOptions />,
              headerTitle: () => <></>,
            }}
          />
          <Stack.Screen
            name="searchitem"
            component={SearchItems}
            options={{headerTitle: () => <CustomHeaderTitle />}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
