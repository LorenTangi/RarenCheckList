import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router'; 
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage }>
        <Image 
        source={require('../assets/fotinha.jpg')}
         style={styles.logo}
         />
      </View>
      <View style ={styles.content}>
        <Text style={styles.title}>Raren Check List!
        </Text>
        <Text style={styles.text}>
          Monte a sua check lista e não esqueça mais 
          dos seus compromissos do dia-a-dia!!
        </Text>
        <Link style={styles.button} href= {"/home"}>
          <Text style={styles.buttonText}>Acessar</Text>
        </Link>
      </View>
      <StatusBar style="light" backgroundColor='#000'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#afb3f7',
  },
  containerImage: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:
  {
    width: 230,
    height: 230,
    borderRadius: 115,
    resizeMode: 'cover',
  },
  content: {
  flex:1,
  backgroundColor: "#27233a",
  borderTopLeftRadius: 25,
  borderTopRightRadius: 25,
  paddingHorizontal: '5%',
},
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 28,
    marginBottom: 20,
    textAlign: "center",
    color: '#fff4e4',
},
text: {
  fontSize: 16,
  color: '#fff4e4',
},
button: {
  position: 'absolute',
  backgroundColor: '#afb3f7',
  bottom: '15%',
  alignSelf: 'center',
  borderRadius: 50,
  paddingVertical: 15,
  width: '60%',
  textAlign: 'center',
},
buttonText: {
  fontSize: 22,
  color: '#fff4e4',
  fontWeight: 'bold',
}
});