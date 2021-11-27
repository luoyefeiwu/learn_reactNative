import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName = '';
            switch (route.name) {
              case 'home':
                iconName = 'home';
                break;
              case 'Wiki':
                iconName = 'home';
                break;
              case 'Settings':
                iconName = 'settings';
                break;
              default:
                iconName = 'rocket';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}>
        <Tab.Screen name="Wiki" options={{tabBarBadge: 3, title: '首页'}}>
          {props => <Wiki {...props} />}
        </Tab.Screen>
        <Tab.Screen
          name="Settings"
          //component={Hotlist}
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
