import React from 'react';
import { Tab } from 'react-native-elements';
//import chart1 from '../assets/image/chart1.jpeg';
//import chart2 from '../assets/image/chart2.png';
import { Text, Image, View } from 'react-native';

//import chart3 from '../assets/image/chart3.jpeg';
import chart4 from '../assets/image/chart4.png';
//import chart5 from '../assets/image/chart5.png';

export default function ChartTotals() {

    return (
<>

<Tab >
        {/* <Tab.Item title='Hours' /> */}
        <Tab.Item title='Daily' />
        <Tab.Item title='Weekly' />
        <Tab.Item title='Monthly' />
        {/* <Tab.Item title='Yearly' /> */}

           </Tab>  
   <View style={{paddingTop: 90, paddingLeft: 10, justifyContent:'center'}}>  



          {/* <Text>Charts</Text>            */}
        {/* <Image
        source={chart1 }
        style={{ width: 300, height: 200 }}
        />
        <Image
        source={chart2 }
        style={{ width: 300, height: 200 }}
        /> */}
        {/* <Image
        source={chart3 }
        style={{ width: 400, height: 200 }}
        /> */}
        <Image
        source={chart4 }
        style={{ width: 350, height: 250 }}
        />
        {/* <Image
        source={chart5 }
        style={{ width: 400, height: 200 }}
        /> */}
     </View>   
</>
    )
}

