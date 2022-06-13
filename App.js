import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

export default function App() {

  const [numero, setNumero] = useState(0);
  const [botao, setBotao] = useState('VAI');
  const [ultimo, setUltimo] = useState(null);
  const [timer, setTimer] = useState(null);

  const vai = () => {

    if (timer != null) {
      //Aqui vai parar o timer
      clearInterval(timer);
      setTimer(null);
      setBotao('VAI');

    } else {

      //Comeca girar o timer
      setTimer(setInterval(() => {
        setNumero(prevState => prevState + 0.1);
      }, 100));

      setBotao('PARAR');
    }

  }

  const limpar = () => {
    if (timer != null) {
      //Aqui vai parar o timer
      clearInterval(timer);
      setTimer(null);
    }

    setUltimo(numero);
    setNumero(0);
    setBotao('VAI');

  }

  return (
    <View style={styles.container}>

      <Image
        source={require('./assets/cronometro.png')}
        style={styles.cronometro}
      />

      <Text style={styles.timer}> {numero.toFixed(1)} </Text>

      <View style={styles.btnArea}>

        <TouchableOpacity style={styles.btn} onPress={() => vai()}>
          <Text style={styles.btnTexto}> {botao} </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => limpar()}>
          <Text style={styles.btnTexto}>LIMPAR</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.areaUltima}>
        <Text style={styles.textoCorrida}>
          {ultimo > 0 ? 'Ultimo tempo: ' + ultimo.toFixed(2) + 's' : ''}
        </Text>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  timer: {
    marginTop: -160,
    color: '#FFF',
    fontSize: 50,
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    marginTop: 40,
    borderRadius: 9
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  areaUltima: {
    marginTop: 40,
  },
  textoCorrida: {
    fontSize: 25,
    fontStyle: 'italic',
    color: '#FFF'
  }
});
