import React, { useEffect } from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import store from '../CounterUsingRedux/index';

const DataEntry = () => {

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
        <Text style={styles.button}>Save Count</Text>
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
    padding: 10,
    elevation: 2,
    margin: 30,
    color: "white"
  },

});

export default DataEntry;