import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();

const Home = createStackNavigator();
const Offers = createStackNavigator();
const Buy = createStackNavigator();
const Credit = createStackNavigator();
const Sure = createStackNavigator();
const AboutUs = createStackNavigator ();