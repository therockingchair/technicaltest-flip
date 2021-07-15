import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {TransactionDetail, TransactionList} from './screen';

const Stack = createStackNavigator();

export default AppNavigation = () => {
  const routes = [
    {name: 'TransactionList', component: TransactionList},
    {name: 'TransactionDetail', component: TransactionDetail},
  ];

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routes[0].name}>
        {routes.map(route => (
          <Stack.Screen
            key={route.name}
            name={route.name}
            component={route.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
