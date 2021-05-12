import React from 'react';
import CounterUsingRedux from './src/CounterUsingRedux';


const App = () => 

   <CounterUsingRedux />   


export default App;





// import React from "react";
// import { ImageBackground, StyleSheet, Text, View } from "react-native";

// const image = { uri: "https://reactjs.org/logo-og.png" };

// const App = () => (
//     <>
//     <CounterUsingRedux />
//   <View style={styles.container}>
//     <ImageBackground source={image} style={styles.image}>
//       <Text style={styles.text}>Inside</Text>
//     </ImageBackground>
//   </View>
//   </>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column"
//   },
//   image: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "center"
//   },
//   text: {
//     color: "white",
//     fontSize: 42,
//     fontWeight: "bold",
//     textAlign: "center",
//     backgroundColor: "#000000a0"
//   }
// });

// export default App;

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