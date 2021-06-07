import React from 'react';
import { Tab } from 'react-native-elements';
import { Text, Image, View } from 'react-native';
import chart from '../assets/image/chart.png';

export default function ChartTotals() {

    return (
<>

    <Text>Get Totals</Text>
    <Tab >
        <Tab.Item title='Day' />
        <Tab.Item title='Week' />
        <Tab.Item title='Month' />

    </Tab>  
   <View style={{paddingTop: 90, paddingLeft: 10, justifyContent:'center'}}>  


       
        <Image
        source={chart }
        style={{ width: 350, height: 250 }}
        />
 
     </View>   
</>
    )
}