import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import CounterScreen from './src/CounterUsingRedux/CounterScreen';
//import DisplayContacts from './src/DisplayContacts/contacts';
import store from './src/CounterUsingRedux/index';
import { StatusBar, Image, View } from 'react-native';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//import { Socket } from 'socket.io-client';
import ChartTotals from './src/ChartTotals/chartTotals';
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import Icon from 'react-native-vector-icons/Feather';
// import DataEntry from './src/DataEntry/dataEntry';
import { socket_init } from './src/CounterUsingRedux/CounterScreen';



const Tabs = AnimatedTabBarNavigator();



function App() {

  //socket_init(); 
   return (

      <Provider store={store}>
  <SafeAreaProvider>
  <NavigationContainer >

         <StatusBar translucent backgroundColor='transparent' barStyle='light-content'/>  
  
    <View style={{backgroundColor: 'black', paddingTop: 40, flexDirection:'row', justifyContent:'center'}}>
    <Image
        style={{ width: 80, height: 65 }}
        source={require('./src/assets/image/download.png')}
      />
      </View>

 
        
          <Tabs.Navigator
           tabBarOptions={{
            activeTintColor: "#2F7C6E",
            inactiveTintColor: "#222222"
          }}
          >
          <Tabs.Screen 
          name="Home" 
          component={CounterScreen} 
          options={{
            tabBarIcon: ({ focused, color, size }) => (
                <Icon
                    name="home"
                    size={size ? size : 24}
                    color={focused ? color : "#222222"}
                    focused={focused}
                    color={color}              
                />
                 )
              }}       
/>
          <Tabs.Screen 
          name="Charts" 
          component={ChartTotals} 
          options={{
            tabBarIcon: ({ focused, color, size }) => (
                <Icon
                    name="pie-chart"
                    size={size ? size : 24}
                    color={focused ? color : "#222222"}
                    focused={focused}
                    color={color}
                />
                 )
              }}  
          />
          </Tabs.Navigator>
        </NavigationContainer>
     </SafeAreaProvider>
</Provider>

    )
  }  
export default App;



        