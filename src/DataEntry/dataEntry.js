import React, { useEffect } from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import store from '../CounterUsingRedux/index';

const DataEntry = () => {

  //const URL = 'https://keeptrack-gentlebens.herokuapp.com/counter';
  //const URL = 'http://localhost:3000/counter';

  useEffect(() => {
    getCounterData();
  }, [])

  const getCounterData = async () => {
    //Sends the current count of the client to the SocketServer
    store.dispatch({ type: 'server/syncWithServer', clientCount: store.getState().counter.counter });
  }

  return (
    <>
      <Pressable
        title='Daily'
        style={styles.container}
        onPress={getCounterData}
      >
        <Text style={styles.button}>Sync Data</Text>
      </Pressable>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#e7e7e7',
    padding: 8,
    elevation: 2,
    margin: 40,
    color: "white"
  },

});

export default DataEntry;