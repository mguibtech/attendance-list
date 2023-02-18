import { styles } from "./styles";
import { View, Text, TouchableOpacity } from "react-native";

type Props = {
  name: string;
}

export function Particpant({name} : Props){
  function handleRemoveParticipant(){

  }
  return(
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleRemoveParticipant}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
    </View>
  )
}