import { styles } from "./styles";
import { View, Text, TouchableOpacity } from "react-native";

type Props = {
  name: string;
  onRemove : () => void
}

export function Particpant({name, onRemove } : Props){
  
  return(
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
      </Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
    </View>
  )
}