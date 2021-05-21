import React, { useState, useEffect } from 'react';
import superagent from 'superagent';
import { Pressable, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const DataEntry = () => {
    const { counter } = useSelector(state => state?.counter);
    const dispatch = useDispatch();
    const [counterData, setCounterData] = useState([]);
    

    const URL = 'https://keeptrack-gentlebens.herokuapp.com/counter';


useEffect(() => {
    getCounterData();
  }, [])
  
  const getCounterData = async () => {
    console.log('inside counterscreen');
    await superagent.get(URL)
    .then(response => {
      console.log('response from heroku super agent get route', response.body);
   setCounterData(response.body)
    //   return response.body;
    })
 .catch((err) => {
     console.error(err)
 })
}

// const addCounter = async () => {
//     console.log('item counter')
//    // numberCounter.day = new Date();
//     await superagent.post(URL)
//     .then(response => {
//         console.log('post response', response.body);

//         // let savedCounter = response.body;
//         setCounterData([...counterData])
//     })
//     .catch((err) => {
//         console.error(err)
//     })
// }
// const deleteCounter = async (count)


// return [counterData, getCounterData, addCounter]
  return (
<>
    <Pressable 
    title='Daily'
    onPress={getCounterData}
    >
      <Text>Save Daily Totals</Text>
      </Pressable>

{/* <Pressable 
title='Daily'
onPress={addCounter}
>
  <Text>Add Number</Text>
  </Pressable> */}
  </>
  )

}

export default DataEntry;