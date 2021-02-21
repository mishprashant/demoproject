import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { HomeScreen, SettingScreen, ProfileScreen } from "../modules/home/screens";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Home = createStackNavigator({ HomeScreen: HomeScreen });
const Setting = createStackNavigator({ SettingScreen: SettingScreen });
const Profile = createStackNavigator({ ProfileScreen: ProfileScreen});

const MainTabStack = createBottomTabNavigator({
  Home: {
    screen: Home,
  },
  Profile: Profile,
  Settings: Setting
});

const AppStack = createStackNavigator({
  Home: {
    screen: MainTabStack,
    navigationOptions: { headerShown: false }
  },
})


const mainStack = createStackNavigator({
  App: AppStack,
}, {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
    
  },
  
})

export default createAppContainer(mainStack);


