import React, {Component} from 'react';
import Login from './views/login/View';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import store from './store/';
const Stack = createNativeStackNavigator();
const RouteApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Login"
          component={Login}
          options={({navigation}) => ({headerShown: false})}
        />
        {/* <Stack.Screen
          name="HotList"
          component={HotList}
          options={({navigation}) => ({headerShown: false})}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = props => {
  return (
    <Provider store={store}>
      <RouteApp />
    </Provider>
  );
};

export default App;
