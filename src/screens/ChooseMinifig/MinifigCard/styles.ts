import { StyleSheet } from 'react-native';

import { AppColors } from '@/theme/colors';

export const styles = StyleSheet.create({
  cardContainer: {
    width: 300,
    margin: 16,
    alignSelf: 'center',
  },
  active: {
    borderColor: AppColors.accent_1,
    borderWidth: 3,
  },
  cardContent: {
    height: 450,
    padding: 30,
    backgroundColor: AppColors.light_background,
    justifyContent: 'space-between',
  },
  image: {
    width: 120,
    height: 180,
    alignSelf: 'center',
  },
  name: {
    textAlign: 'center',
  },
  actions: {
    alignItems: 'center',
  },
});
