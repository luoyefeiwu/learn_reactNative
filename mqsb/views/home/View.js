import React, {Component} from 'react';
// import {View, Image, KeyboardAvoidingView} from 'react-native';
import {Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Work from './work';

const Tab = createBottomTabNavigator();
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName = '';
            switch (route.name) {
              case 'work':
                iconName = 'home';
                break;
              case 'manage':
                iconName = 'id-card-o';
                break;
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#07C160',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}>
        <Tab.Screen name="work" options={{title: '工作面板'}}>
          {props => <Work />}
        </Tab.Screen>
        <Tab.Screen name="manage" options={{title: '违规管理'}}>
          {props => <Text>2</Text>}
        </Tab.Screen>
      </Tab.Navigator>
    );
  }
}
