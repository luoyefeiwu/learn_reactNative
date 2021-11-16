import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Image, Text, View} from 'react-native';

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings</Text>
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default class Home extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   selectedTab: 'home',
    // };
  }
  render() {
    const homeImg = require('@/resource/images/home.png');
    const likeImg = require('@/resource/images/like.png');
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              if (route.name === 'Home') {
                return (
                  <Image source={homeImg} style={{width: 20, height: 20}} />
                );
              } else if (route.name === 'Settings') {
                return (
                  <Image source={likeImg} style={{width: 20, height: 20}} />
                );
              }
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
            // headerStyle: {height: 0},
          })}>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{tabBarBadge: 3, title: '首页'}}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarBadge: 4,
              title: '设置',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
