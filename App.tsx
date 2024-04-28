import 'react-native-gesture-handler';
import React from 'react'
import { PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './src/Screens/Home'
import Offers from './src/Screens/Offers'
import Buy from './src/Screens/Buy'
import Credit from './src/Screens/Credit'
import SafeLists from './src/Screens/SafeLists'
import AboutUs from './src/Screens/AboutUs';

import FirebaseState from './context/firebase/firebaseState';

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <PaperProvider >
      <FirebaseState>
        <NavigationContainer>
          <Tab.Navigator >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Offer" component={Offers} />
            <Tab.Screen name="Buy" component={Buy} />
            <Tab.Screen name="Credit" component={Credit} />
            <Tab.Screen name="Sure" component={SafeLists} />
            <Tab.Screen name="Us" component={AboutUs} />
          </Tab.Navigator>
        </NavigationContainer>
        </FirebaseState>
    </PaperProvider>
  );
};

export default App