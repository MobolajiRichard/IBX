import {Pressable, Text, StyleSheet} from 'react-native';
import {COLORS} from '../constant';

//defining types for the component
type Props = {
  item: {key: string; value: string};
  category: string;
  onPress: () => void;
};

const FilterButtons = ({item, onPress, category}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.filterButtons,
        {
          backgroundColor: category === item.value ? COLORS.primary : 'white',
          borderWidth: category === item.value ? 0 : 1,
        },
      ]}>
      <Text
        style={[
          styles.filterButtonTexts,
          {color: category === item.value ? 'white' : 'black'},
        ]}>
        {item.key}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  filterButtons: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.grey,
    height: 32,
    marginRight: 8,
  },
  filterButtonTexts: {
    fontSize: 12,
    fontFamily: 'Nunito-SemiBold',
    color: 'black',
  },
});

export default FilterButtons;
