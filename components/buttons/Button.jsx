import {  Text, View , TouchableOpacity} from 'react-native';
import { styles } from './styles';

export default function Button({click, value}) {
    return (
    <TouchableOpacity style={styles.button} onPress={click} >
     <Text style={styles.textButton}>{value}</Text>
 </TouchableOpacity>
    );
  }