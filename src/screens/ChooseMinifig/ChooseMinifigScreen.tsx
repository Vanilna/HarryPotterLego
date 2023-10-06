import { useCallback } from 'react';
import { FlatList, ListRenderItem, SafeAreaView } from 'react-native';
import { useSetAtom } from 'jotai';
import { ActivityIndicator, Button, Text } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/core';

import { useGetMinifigs } from '@/networking/queries/useGetMinifigs';
import { MainStackParamList } from '@/navigation/Router';
import { Routes } from '@/navigation/routes';
import { AppColors } from '@/theme/colors';
import { MinifigCard } from '@/screens/ChooseMinifig/MinifigCard';
import { selectedMinifigAtom } from '@/store/selectedMinifigAtom';
import { Minifig } from '@/types/minifigs';

import { styles } from './styles';

export type ChooseMinifigsScreenNavigationProp =
  NativeStackNavigationProp<MainStackParamList>;

export const ChooseMinifigScreen = () => {
  const { navigate } = useNavigation<ChooseMinifigsScreenNavigationProp>();

  const { minifigs, isLoading } = useGetMinifigs();
  const setSelectedMinifig = useSetAtom(selectedMinifigAtom);

  const renderItems: ListRenderItem<Minifig> = useCallback(
    ({ item }) => (
      <MinifigCard
        name={item.name}
        imgSrc={item.set_img_url}
        seeDetailsUrl={item.set_url}
        selectHandler={() => setSelectedMinifig(item)}
      />
    ),
    [],
  );

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
          renderItem={renderItems}
          keyExtractor={(minifig) => minifig.name}
        />
      )}
      <Button
        mode="contained"
        onPress={() => navigate(Routes.PersonalDetails)}
        buttonColor={AppColors.accent_2}>
        CHOOSE FIGURE
      </Button>
    </SafeAreaView>
  );
};
