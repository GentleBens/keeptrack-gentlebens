import React, { useState, useEffect } from 'react';
import superagent from 'superagent';
import { Pressable, Text, StyleSheet } from 'react-native';
import store from '../CounterUsingRedux/index';
import { useDispatch } from 'react-redux';



//TODO: July 6 // Take server here is my total count and send back to client and update client total count view

const DataEntry = props => {

  const dispatch = useDispatch();


  useEffect(() => {
    getCounterData();
  }, [])

  const getCounterData = async () => {
    console.log('getCounterData (counter.counter)', store.getState().counter.counter);
    //Sends the current count of the client to the SocketServer

    store.dispatch({ type: 'server/syncWithServer', clientCount: store.getState().counter.counter });

  }
  const socketData = async () => {
    console.log('socket data');
    await getCounterData();
  }
  //#region 
  // const addCounter = async () => {
  //   console.log('item counter')
  // //numberCounter.day = new Date();
  //   await superagent.post(URL)
  //   //console.log('post url', URL);
  //     .then(response => {
  //         console.log('post response', response.body);
  //  let savedCounter = response.body;
  //     setCounterData(savedCounter)
  //      })
  //      .catch((err) => {
  //          console.error(err)
  //      })
  //  }
  //#endregion
  return (
    <>
      <Pressable
        title='Daily'
        style={styles.container}
        onPress={getCounterData}
      >
        <Text style={styles.button}>Sync Data</Text>
      </Pressable>

      <Pressable
        title='Socket'
        style={styles.container}
        onPress={socketData}
      >
        <Text style={styles.button}>Socket Data</Text>
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
    margin: 4,
    //backgroundColor: "transparent",
    color: "pink"
  },

});

export default DataEntry;