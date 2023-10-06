import { AppColors } from '@/theme/colors';
import { Linking, Pressable, Image } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';

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
}: MinifigCardProps) => (
  <Card
    onPress={() => console.log('select')}
    mode="contained"
    style={styles.cardContainer}
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
        onPress={() => Linking.openURL(seeDetailsUrl)}>
        Show details
      </Button>
    </Card.Actions>
  </Card>
);
