import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CounterScreen from './src/CounterUsingRedux/CounterScreen';
import DisplayContacts from './src/DisplayContacts/contacts';
import store from './src/CounterUsingRedux/index';
import { StatusBar, Image } from 'react-native';
import { Provider } from 'react-redux';
//import { SafeAreaProvider } from 'react-native-safe-area-context';


const Stack = createStackNavigator();

export default function App(){
    return (
      <Provider store={store}>
      <StatusBar translucent backgroundColor='transparent' barStyle='light-content'
      />   
           {/* <Image
    style={{width: 50, height: 30}}
    source={require('./src/assets/image/download.png')}/>     */}
    {/* <SafeAreaProvider> */}
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
            name='Home'
            options={{title: 'Gentle Ben\'s People Counter'}}
            component={CounterScreen}
            />
            <Stack.Screen 
            name='Contacts' 
            component={DisplayContacts} 
            options={({ route }) => ({title: 'Contact List'})}
        
          
            />  
          </Stack.Navigator>
        </NavigationContainer>
        {/* </SafeAreaProvider> */}
      </Provider>
    )
}


// Provider = wrapper and responsible for making redux store accessible to the app
// Wrap app by using Provider component and pass store as a prop to make redux store accessible to the app
// CounterScreen component ans a component prop to Stack.Screen