import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#131016',
  },
  eventName: {
    fontSize: 18,
    color:'#fff',
    fontWeight: "bold",
    marginTop: 30
  },
  eventDate:{
    fontSize: 14,
    color:'#6b6b6b'
  },
  input:{
    height: 56,
    backgroundColor:'#1f1e25',
    borderRadius: 5,
    color: '#fdfcfe',
    padding: 16,
    fontSize:16,
    flex: 1,
    marginRight: 12
  },
  buttonText:{
    color: '#fff'
  },
  button:{
    width: 56,
    height: 56,
    borderRadius: 6,
    backgroundColor: '#31cf67',
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  form:{
    width: '100%',
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42
  },
  listEmptyText:{
    color: '#fff',
    fontSize: 14,
    textAlign:'center'
  }
})