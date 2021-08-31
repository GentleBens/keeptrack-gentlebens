import React, { useState, useEffect } from 'react';
import superagent from 'superagent';
import { Pressable, Text, StyleSheet } from 'react-native';
import store from '../CounterUsingRedux/index';


//TODO: July 6 // Take server here is my total count and send back to client and update client total count view

const DataEntry = props => {
     const [counterData, setCounterData] = useState([]);
    const [serverTotal, setServerTotal] = useState(-1)

    //const URL = 'https://keeptrack-gentlebens.herokuapp.com/counter';
    const URL = 'http://localhost:3000/counter';

useEffect(() => {
    getCounterData();
  }, [])
  
  const getCounterData = async () => {
    console.log('inside counter screen');
    //Sends the current count of the client to the SocketServer
    store.dispatch({type:'server/totalUpdate', obj: store.getState().counter.counter});  
    ///  Reset the current counter here ///    
    await superagent.get(URL)
        .then(response => {
      console.log('response from db', response.body);
   setCounterData(response.body)
    })
    // .then(updateServer())
 .catch((err) => {
     console.error(err)
 })
}
const socketData = async () => {
  console.log('socket data');
  await getCounterData();
}

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