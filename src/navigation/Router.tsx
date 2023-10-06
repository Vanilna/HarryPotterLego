import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ChooseMinifigScreen } from '@/screens/ChooseMinifig';
import { PersonalDetailsScreen } from '@/screens/PersonalDetails';
import { SummaryScreen } from '@/screens/Summary';
import { MinifigDetailsScreen } from '@/screens/MinifigDetails';

import { Routes } from './routes';

export type MainStackParamList = {
  [key in Routes]: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<MainStackParamList>();

const Router = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName={Routes.ChooseMinifig}
        screenOptions={{ headerShown: false }}>
        <Screen name={Routes.ChooseMinifig} component={ChooseMinifigScreen} />
        <Screen
          name={Routes.MinifigDetails}
          component={MinifigDetailsScreen}
          options={{ headerShown: true }}
        />
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
