import React from 'react';
import Login from './views/login/View';
import Home from './views/home/View';
import Scheduling from './views/scheduling/View';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import store from './store/';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {View, Text, Button} from 'react-native-elements';
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
        <Stack.Screen
          name="Home"
          component={Home}
          options={({navigation}) => ({
            headerTitle: () => {
              return <Text style={{color: '#fff', fontSize: 20}}>首页</Text>;
            },
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#4378bc',
            },
          })}
        />
        <Stack.Screen
          name="Scheduling"
          component={Scheduling}
          options={({navigation}) => ({
            headerTitle: () => {
              return (
                <Text style={{color: '#fff', fontSize: 20}}>我的排班</Text>
              );
            },
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#4378bc',
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = props => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <RouteApp />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
