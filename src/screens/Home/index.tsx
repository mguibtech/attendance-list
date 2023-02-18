import { Text, TextInput, View, TouchableOpacity } from "react-native";

import { styles } from "./styles";

export function Home() {



  function handleParticipandAdd() {
    console.log("Foi clicado no botão")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Name of particpant"
          placeholderTextColor='#6b6b6b'
          keyboardType="default"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipandAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}