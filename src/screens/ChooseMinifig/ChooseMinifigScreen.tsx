import { useGetMinifigs } from '@/networking/queries/useGetMinifigs';
import { Text, SafeAreaView } from 'react-native';

export const ChooseMinifigScreen = () => {
  const { minifigs, isLoading } = useGetMinifigs();
  return (
    <SafeAreaView>
      {isLoading ? (
        <Text>ChooseMinifigScreen</Text>
      ) : (
        minifigs?.map((fig) => <Text key={fig.name}>{fig.name}</Text>)
      )}
    </SafeAreaView>
  );
};
