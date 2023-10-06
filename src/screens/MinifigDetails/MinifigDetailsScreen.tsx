import { useAtomValue } from 'jotai';
import WebView from 'react-native-webview';
import { useNavigation } from '@react-navigation/core';

import { minifigURLAtom } from '@/store/minifigURLAtom';

export const MinifigDetailsScreen = () => {
  const { goBack } = useNavigation();
  const minifigURL = useAtomValue(minifigURLAtom);

  if (!minifigURL) {
    goBack();
    return;
  }

  return <WebView source={{ uri: minifigURL }} />;
};
