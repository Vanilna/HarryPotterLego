import { StyleSheet } from 'react-native';

import { AppColors } from '@/theme/colors';

export const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: AppColors.dart_background,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headlineText: {
    color: AppColors.main_text,
  },
});
