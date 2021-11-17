import React, {Component} from 'react';
import Home from './view/home/View';
import HotList from './view/hotlist/View';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={({navigation}) => ({headerShown: false})}
          />
          <Stack.Screen name="HotList" component={HotList} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
