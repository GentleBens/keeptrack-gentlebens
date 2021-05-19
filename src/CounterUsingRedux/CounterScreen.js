import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Alert, Modal, Pressable } from 'react-native';
import { Button } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import FloatingButton from './FloatingButton';
import { increment, decrement, reset, close} from '../modules/redux/counter';
//import Alert from '../Alerts/alert';

//import FocusAwareStatusBar from '../Focus/focus';
//import DisplayContacts from '../DisplayContacts/contacts';
import superagent from 'superagent';
//import { Socket } from 'socket.io-client';
//import io from 'socket.io-client';
//const serverData = 'https://keeptrack-gentlebens.herokuapp.com/';


const CounterScreen = ({ navigation: { navigate }}) => {
    const { counter } = useSelector(state => state?.counter);
    const dispatch = useDispatch();
    const [counterData, setCounterData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false)
    //dispatch(addAlert('Test alert!', 'success'));

// const host = io.connect('https://keeptrack-gentlebens.herokuapp.com/counter', { transports: ['websocket'] });
// host.on('connection', (data)=> {
//   console.log('communication from server', data);
// })


useEffect(() => {
  getAllData();
}, [])

const getAllData = async () => {
  console.log('inside counterscreen');
  let herokuData = await superagent.get('https://keeptrack-gentlebens.herokuapp.com/counter')
  .then(response => {
    console.log('response from heroku super agent get route', response.body);
    return response.body;
  })
  setCounterData(herokuData)
}

    return (
        <View style={StyleSheet.container}>

 {/* <FocusAwareStatusBar barStyle="light-content" backgroundColor="#6a51ae" /> */}
         <Text style={styles.text}>People Counter: {counter}</Text>
         <SafeAreaView style={styles.buttonsHolder}>
 
           <FloatingButton
                onPress={() => dispatch(decrement())}
                disabled={counter <= 0}
                type='REMOVE'
                btnStyle={counter <= 0 ? styles.disabledRemoveBtn : styles.removeBtn}
           />
            <FloatingButton
                onPress={() => dispatch(increment())}
                type='ADD'
                btnStyle={styles.addBtn}
            /> 
     
         </SafeAreaView>
         <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are you sure you want to reset counter?</Text>
            <Pressable
              style={[styles.buttons, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
              onPressIn={() => dispatch(reset())}
            >
              <Text style={styles.textStyle}>Yes</Text>
            </Pressable>
            <Pressable
            style={[styles.buttons, styles.buttonClose]}
             onPress={() => setModalVisible(!modalVisible)}
              onPressIn={() => dispatch(close())}
            >
              <Text style={ [styles.textStyle, styles.cancelButton]}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.buttons, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Reset Counter</Text>
      </Pressable>
          
  
        <Button
        onPress={() =>
          navigate('Charts', { title: 'Totals'})}
          title="Go to Charts"
          type='outline'
        />  
          <Button 
          title='Total' 
          type='outline'
          onPress={()=> Alert.alert(`Total Count: ${counter}`)}/>
    </View>

    );
};



const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
   
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
  
    },

    buttonsHolder: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        padding: 30,
        justifyContent: 'space-between',
        alignItems: 'center'
      },
    
      addBtn: {
        backgroundColor: '#4CAF50',
        height: 60,
        width: 60,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#e7e7e7',
        justifyContent: 'center',
        alignItems: 'center'
      },
    
      removeBtn: {
        backgroundColor: '#FF5252',
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#e7e7e7',
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center'
      },
    
      disabledRemoveBtn: {
        backgroundColor: 'rgba(255, 82, 82, 0.6)',
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#e7e7e7',
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center'
      },
    
      text: {
        fontSize: 20,
        paddingTop: 30,
        minWidth: 100,
        alignSelf: 'stretch',
        textAlign: 'center',
        textShadowColor: 'gray',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 3
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 35,
    
        //marginHorizontal: 20,
        //alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
      },
        buttons: {
          borderRadius: 5,
          padding: 8,
          elevation: 2
        },
        buttonOpen: {
          backgroundColor: "grey",
          // backgroundColor: "#F194FF",
          
        },
        buttonClose: {
          backgroundColor: "#2196F3",
        },
        textStyle: {
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
          margin: 3,
          padding: 2
        },
        cancelButton: {
          marginTop: 2

        },
        modalText: {
          marginBottom: 25,
          textAlign: "center",
          flexDirection:"row", 
        }
      
    });
    
    export default CounterScreen;

    
    // export default App;

    // // useSelector hook is responsible to fetch specific reducer's state from the store
    //     // fetching counter state from custom counter reducer
    // // useDispatch hook allows for dispatch actions (i.e increment & decrement) to reducers


          //<Image
    //style={{width: 50, height: 30}}
    //source={require('../assets/image/download.png')}/> 

  