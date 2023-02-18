import { StyleSheet, Text, View } from "react-native";


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#131016'
  },
  eventName: {
    fontSize: 18,
    color:'#fff',
    fontWeight: "bold"
  },
  eventDate:{
    fontSize: 14,
    color:'#6b6b6b'
  }
})

