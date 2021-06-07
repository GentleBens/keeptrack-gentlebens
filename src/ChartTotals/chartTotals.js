import React from 'react';
import { Tab } from 'react-native-elements';
import { Text, Image, View, Pressable, StyleSheet } from 'react-native';
import chart from '../assets/image/chart.png';

export default function ChartTotals() {

    return (
<>
<Pressable
      style={styles.container}
    //onPress={saveCounterData}
      >
        <Text style={styles.button}>Get Totals</Text>
      </Pressable>
    <Tab >
        <Tab.Item value={1} title='Day' />
        <Tab.Item value={2} title='Week' />
        <Tab.Item value={3} title='Month' />

    </Tab>  

   <View style={{paddingTop: 100, paddingLeft: 13, justifyContent:'center'}}>  
        <Image
        source={chart }
        style={{ width: 350, height: 250 }}
        />
 
     </View>   
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
      color: "white"
    },
  
  });