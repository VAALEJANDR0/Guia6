import React, { useState } from "react";
import { View,StyleSheet,Image,Text,ScrollView,Modal,Button, TouchableHighlight} from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
    const [modalVisbleplaya, setModalVisibleplaya] = useState(false);

  return (
    <>
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
    <ScrollView>
  
      <Modal transparent={true} animationType="slide" visible={modalVisbleplaya} onRequestClose={() => {
                  alert("Modal has been closed.");
                }} >

          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Ir a la playa</Text>
              <Text>El Salvador cuenta con hermosas playas a nivel Centroamerica</Text>
              <Button title="Cerrar" onPress={()=>{setModalVisibleplaya(!modalVisbleplaya)}} />
            </View>
          </View>
      </Modal>

      <View style={{flexDirection:'row'}}>
        <Image style={styles.banner} source={require('./src/img/bg.jpg')} />
      </View>
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Que hacer en El Salvador</Text>
      
      <ScrollView horizontal>
        <View>
          <TouchableHighlight onPress={()=>{setModalVisibleplaya(!modalVisbleplaya)}}>
          <Image style={styles.ciudad} source={require('./src/img/actividad1.jpg')} />
          </TouchableHighlight>
        </View>
        <View>
          <Image style={styles.ciudad} source={require('./src/img/actividad2.jpg')} />
        </View>
        <View>
          <Image style={styles.ciudad} source={require('./src/img/actividad3.jpg')} />
        </View>
        <View>
          <Image style={styles.ciudad} source={require('./src/img/actividad4.jpg')} />
        </View>
        <View>
          <Image style={styles.ciudad} source={require('./src/img/actividad5.jpg')} />
        </View>
      </ScrollView>

      <Text style={styles.titulo}>Platillos Salvadorenios</Text>
      <View>
        <View>
          <Image style={styles.mejores} source={require('./src/img/mejores1.jpg')} />
        </View>
        <View>
          <Image style={styles.mejores} source={require('./src/img/mejores2.jpg')} />
        </View>
        <View>
          <Image style={styles.mejores} source={require('./src/img/mejores3.jpg')} />
        </View>
      </View>

      <Text style={styles.titulo}>Rutas Turisticas</Text>

      <View style={styles.listado}>
        <View style={styles.listaItem}>
          <Image style={styles.mejores} source={require('./src/img/ruta1.jpg')} />
        </View>
        <View style={styles.listaItem}>
          <Image style={styles.mejores} source={require('./src/img/ruta2.jpg')} />
        </View>
        <View style={styles.listaItem}>
          <Image style={styles.mejores} source={require('./src/img/ruta3.jpg')} />
        </View>
        <View style={styles.listaItem}>
          <Image style={styles.mejores} source={require('./src/img/ruta4.jpg')} />
        </View>
      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
    </SafeAreaProvider>
    </>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1
  },
  titulo:{
    fontWeight:'bold',
    fontSize:24,
    marginVertical:20
  },
  contenedor:{
    marginHorizontal:10
  },
  ciudad:{
    width:250,
    height:300,
    marginRight:10
  },
  mejores:{
    width:'100%',
    height:200,
    marginVertical:5
  },
  listaItem:{
    flexBasis:'49%'
  },
  listado:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between'
  },
  vistaModal:{
    backgroundColor:'#000000aa',
    flex:1
  },
  Modal:{
    backgroundColor:'#fff',
    margin:50,
    padding:40,
    borderRadius:10,
    flex:1
  },
  subtitulo:{
    fontWeight:'bold',
    fontSize:14,
    textAlign:'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;