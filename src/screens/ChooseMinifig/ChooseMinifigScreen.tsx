import { useGetMinifigs } from '@/networking/queries/useGetMinifigs';
import { FlatList, SafeAreaView } from 'react-native';
import { ActivityIndicator, Button, Card, Text } from 'react-native-paper';

import { styles } from './styles';
import { AppColors } from '@/theme/colors';
import React from 'react';
import { MinifigCard } from '@/screens/ChooseMinifig/MinifigCard';

export const ChooseMinifigScreen = () => {
  const { minifigs, isLoading } = useGetMinifigs();

  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text variant="headlineMedium" style={styles.headlineText}>
        CHOOSE YOUR MINIFIG
      </Text>
      {isLoading ? (
        <ActivityIndicator
          animating={true}
          color={AppColors.accent_1}
          size={120}
        />
      ) : (
        <FlatList
          horizontal
          data={minifigs}
          renderItem={({ item }) => (
            <MinifigCard
              name={item.name}
              imgSrc={item.set_img_url}
              seeDetailsUrl={item.set_url}
              selectHandler={() => {}}
            />
          )}
          keyExtractor={(minifig) => minifig.name}
        />
      )}
      <Button
        mode="contained"
        onPress={() => console.log('Pressed')}
        buttonColor={AppColors.accent_2}>
        CHOOSE FIGURE
      </Button>
    </SafeAreaView>
  );
};
