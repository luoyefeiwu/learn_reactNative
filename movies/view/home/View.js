import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import Wiki from '../wiki/View';
import Hotlist from '../hot/View';
import Map from '../map/View';

const Tab = createBottomTabNavigator();

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
    };
  }
  render() {
    const homeImg = require('../../resource/images/home.png');
    const likeImg = require('../../resource/images/like.png');
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            if (route.name === 'Wiki') {
              return <Image source={homeImg} style={{width: 20, height: 20}} />;
            } else if (route.name === 'Settings') {
              return <Image source={likeImg} style={{width: 20, height: 20}} />;
            }
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          //headerStyle: {height: 0},
        })}>
        <Tab.Screen name="Wiki" options={{tabBarBadge: 3, title: '首页'}}>
          {props => <Wiki {...props} />}
        </Tab.Screen>
        <Tab.Screen
          name="Settings"
          // component={Hotlist}
          options={{
            tabBarBadge: 4,
            title: '设置',
          }}>
          {props => <Hotlist {...props} />}
        </Tab.Screen>
        <Tab.Screen
          name="map"
          options={{
            tabBarBadge: 2,
            title: '附近美食',
          }}>
          {props => <Map {...props} />}
        </Tab.Screen>
      </Tab.Navigator>
    );
  }
}
