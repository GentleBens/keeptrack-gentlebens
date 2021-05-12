import React from 'react';
import CounterUsingRedux from './src/CounterUsingRedux';
//import * as Font from 'expo-font';

const App = () => 
   <CounterUsingRedux />   
export default App;

//import CounterUsingRedux from './src/CounterUsingRedux';
// import React, { useState } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import * as Font from 'expo-font';
// import { AppLoading } from 'expo';

// const fetchFonts = () => {
//   return Font.loadAsync({
//     headsome: require('./src/assets/fonts/headsome-modif.ttf')
//   });
// };

// export default function App() {
//     // <CounterUsingRedux />  
//   const [dataLoaded, setDataLoaded] = useState(false);

//   if (!dataLoaded) {
//     return (
//       <AppLoading
//         startAsync={fetchFonts}
//         onFinish={() => setDataLoaded(true)}
//       />
//     );
//   }


   
//   return (
//       <>
  
//     <View style={styles.container}>
//       <Text style={{ fontFamily: 'headsome' }}>
//         Open up App.js to start working on your app!
//       </Text>
//     </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// });