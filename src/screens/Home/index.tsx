import { Text, TextInput, View, TouchableOpacity, FlatList, ScrollView, Alert } from "react-native";
import { Particpant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {
  const participants = ['Guib', 'Castor', 'BugBosa', 'Ana', 'Patatiza', 'LeoConha', 'Maria', 'Chefinha', 'Harry Potter', 'Draco']

  function handleParticipandAdd() {
    if(participants.includes("Ana")){
      return Alert.alert("Alerta", "Participante já existe!")
    }
    console.log("Foi clicado no botão")
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text: 'Nao',
        style: 'cancel'
      }
    ])
    console.log(`Foi clicado no botao de remover ${name}`)
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

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Particpant name={item} onRemove={() => handleRemoveParticipant(item)} />
        )}
        showsVerticalScrollIndicator = {false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>Ninguem chegou ao evento ainda? Adicione partipantes a lista</Text>
        )}
      />
      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {
          participants.map(particpant => (
            <Particpant key={particpant} name={particpant} onRemove={() => handleRemoveParticipant("Guib")} />
          ))
        }
      </ScrollView> */}

    </View>
  )
}