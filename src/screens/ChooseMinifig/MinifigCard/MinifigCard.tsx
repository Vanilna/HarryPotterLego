import { useCallback } from 'react';
import { Image } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useAtomValue, useSetAtom } from 'jotai';

import { minifigURLAtom } from '@/store/minifigURLAtom';
import { selectedMinifigAtom } from '@/store/selectedMinifigAtom';
import { AppColors } from '@/theme/colors';
import { ChooseMinifigsScreenNavigationProp } from '@/screens/ChooseMinifig/ChooseMinifigScreen';
import { Routes } from '@/navigation/routes';

import { styles } from './styles';

type MinifigCardProps = {
  name: string;
  imgSrc: string;
  seeDetailsUrl: string;
  selectHandler: () => void;
};

export const MinifigCard = ({
  name,
  imgSrc,
  seeDetailsUrl,
  selectHandler,
}: MinifigCardProps) => {
  const { navigate } = useNavigation<ChooseMinifigsScreenNavigationProp>();

  const setMinifigURLAtom = useSetAtom(minifigURLAtom);
  const selectedMinifig = useAtomValue(selectedMinifigAtom);
  const isCurrentMinifigSelected = selectedMinifig?.name === name;

  const seeDetailHandler = useCallback(() => {
    setMinifigURLAtom(seeDetailsUrl);
    navigate(Routes.MinifigDetails);
  }, []);

  return (
    <Card
      onPress={selectHandler}
      mode="contained"
      style={[
        styles.cardContainer,
        isCurrentMinifigSelected ? styles.active : undefined,
      ]}
      contentStyle={styles.cardContent}>
      <Card.Content>
        <Image
          style={styles.image}
          source={{
            uri: imgSrc,
          }}
        />
        <Text variant="titleSmall" style={styles.name}>
          {name}
        </Text>
      </Card.Content>
      <Card.Actions style={styles.actions}>
        <Button
          mode="text"
          textColor={AppColors.accent_1}
          onPress={seeDetailHandler}>
          Show details
        </Button>
      </Card.Actions>
    </Card>
  );
};
