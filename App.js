import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CounterScreen from './src/CounterUsingRedux/CounterScreen';
//import DisplayContacts from './src/DisplayContacts/contacts';
import store from './src/CounterUsingRedux/index';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Socket } from 'socket.io-client';
import ChartTotals from './src/ChartTotals/chartTotals';

const Stack = createStackNavigator();

function App() {

   return (
      <Provider store={store}>
      <StatusBar translucent backgroundColor='transparent' barStyle='light-content'
      />   
 
    <SafeAreaProvider>
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
            name='Home'
            options={{title: 'Gentle Ben\'s People Counter'}}
            component={CounterScreen}
            />
         
            <Stack.Screen 
            name='Charts' 
            component={ChartTotals} 
            options={({ route }) => ({title: 'Charts'})}
            />  
  
  
          </Stack.Navigator>
      

        </NavigationContainer>

        </SafeAreaProvider>

  
</Provider>

    )
  }  
export default App;


// Provider = wrapper and responsible for making redux store accessible to the app
// Wrap app by using Provider component and pass store as a prop to make redux store accessible to the app
// CounterScreen component ans a component prop to Stack.Screen

//Timestamp Socket.io
//import React, {Component} from 'react';
//import { subscribeToTimer } from './src/api';

// class App extends Component {
//   // constructor(props) {
//   //   super(props);
  
//   //   subscribeToTimer((err, timestamp) => {
//   //     this.setState({
//   //       timestamp
//   //     });
//   //   });
//   // }
  
//   // state = {
//   //   timestamp: 'no timestamp yet'
//   // };
  
  
//   render(){
//     return (
//        {/* <Text>'This is the value of the timer timestamp:' {this.state.timestamp} </Text> */}
//     )
//     export default App;


        