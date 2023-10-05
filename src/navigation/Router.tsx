import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Routes } from './routes';
import { ChooseMinifigScreen } from '../screens/ChooseMinifig';
import { PersonalDetailsScreen } from '../screens/PersonalDetails';
import { SummaryScreen } from '../screens/Summary';

const { Navigator, Screen } = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName={Routes.ChooseMinifig}
        screenOptions={{ headerShown: false }}>
        <Screen name={Routes.ChooseMinifig} component={ChooseMinifigScreen} />
        <Screen
          name={Routes.PersonalDetails}
          component={PersonalDetailsScreen}
        />
        <Screen name={Routes.Summary} component={SummaryScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Router;
