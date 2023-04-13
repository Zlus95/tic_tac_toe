import { Text, View, FlatList } from 'react-native';
import { styles } from './styles';
import Button from '../buttons/Button';

export default function Board({board, click}) {
    return (
      <View style={styles.board}>
        <FlatList
        data={board}
        renderItem={({item, index}) => (
            <Button key={index} value={item} click={() => click(index)} />
        )}
        numColumns={3}
        horizontal={false}
        />
      </View>
    );
  }