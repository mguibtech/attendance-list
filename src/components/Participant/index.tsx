import { styles } from "./styles";
import { View, Text, TouchableOpacity } from "react-native";

export function Particpant(){
  function handleRemoveParticipant(){

  }
  return(
    <View style={styles.container}>
      <Text style={styles.name}>
        Marcos Guibson
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleRemoveParticipant}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
    </View>
  )
}