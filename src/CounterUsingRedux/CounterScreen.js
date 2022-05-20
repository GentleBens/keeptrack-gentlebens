import React, { useState } from 'react';
import { Text, View, StyleSheet, Alert, Modal, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import FloatingButton from './FloatingButton';
import { increment, decrement, reset, close } from '../modules/redux/counter';
import DataEntry from '../DataEntry/dataEntry';
import Icon from 'react-native-vector-icons/Fontisto';

const CounterScreen = () => {
  const { counter, capacity } = useSelector(state => state?.counter);
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View style={StyleSheet.container}>
      {/* // THIS IS THE COUNTER BUTTONS AND COUNTER HEADER // */}
      <Text style={styles.text}>Total Capacity: {capacity}</Text>
      <Text style={styles.text}>Counter: {counter}</Text>
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

      {/* // THIS IS THE MODAL INFO AND RESET CANCEL BUTTONS // */}

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modal}>
          <View style={[styles.modalView, styles.innerModal]}>
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
              <Text style={[styles.textStyle, styles.cancelButton]}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable
        style={styles.undoHolder}
        onPress={() => setModalVisible(true)}
      >
        <Icon name={'undo'} size={30} color='white'></Icon>
      </Pressable>
      <DataEntry
      />
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  buttonsHolder: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    padding: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  undoHolder: {
    padding: 2,
    color: 'white',
    height: 70,
    width: 70,
    marginLeft: 160,
    marginBottom: 30,
    borderRadius: 35,
    borderWidth: 2.3,
    borderColor: '#e7e7e7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBtn: {
    height: 110,
    width: 110,
    borderRadius: 70,
    borderWidth: 2.5,
    borderColor: '#e7e7e7',
    justifyContent: 'center',
    alignItems: 'center'
  },

  removeBtn: {
    borderRadius: 50,
    borderWidth: 2.5,
    borderColor: '#e7e7e7',
    height: 90,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center'
  },

  disabledRemoveBtn: {
    backgroundColor: 'rgba(220, 220, 220, 0.3)',
    borderRadius: 50,
    borderWidth: 2.5,
    borderColor: '#e7e7e7',
    height: 82,
    width: 82,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    fontSize: 25,
    paddingTop: 40, //controls the people counter paddingTop
  //  minWidth: 100,
   //alignSelf: 'stretch',
    textAlign: 'center',
    color: 'white',
  //   textShadowColor: 'gray',
  //  textShadowOffset: { width: 0, height: 1 },
  //  textShadowRadius: 3,

  },
  modalView: {
    marginTop: 100,
    //backgroundColor: "gray",
   // borderRadius: 10,
   // padding: 5,
    //shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2
    // },
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  innerModal: {
    height: 200,
    padding: 25,
    borderRadius: 10,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
  buttons: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    margin: 4
  },
  buttonOpen: {
    backgroundColor: "white",

  },
  buttonClose: {
    backgroundColor: "#e8d272",
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    margin: 3,
    padding: 2,

  },
  cancelButton: {
    marginTop: 2,

  },
  modalText: {
    marginBottom: 25,
    textAlign: "center",
    fontWeight: "bold",
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



