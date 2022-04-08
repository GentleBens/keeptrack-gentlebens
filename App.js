import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CounterScreen from './src/CounterUsingRedux/CounterScreen';
import store from './src/CounterUsingRedux/index';
import { AppRegistry, StatusBar, Image, View, StyleSheet} from 'react-native';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ChartTotals from './src/ChartTotals/chartTotals';
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import Icon from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tabs = AnimatedTabBarNavigator();
function App() {
   return (
  <Provider store={store}>
  <SafeAreaProvider>
  <NavigationContainer>
    <StatusBar translucent backgroundColor='transparent' barStyle='light-content'/>  
    <View style={{backgroundColor: 'black', paddingTop: 40, flexDirection:'row', justifyContent:'center'}}>
    <Image
        style={{ width: 60, height: 55 }}
        source={require('./src/assets/image/download.png')}
      />
      </View>
      <View style={styles.container}>
      <LinearGradient
       Background Linear Gradient
        colors={['rgba(0,0,0,1)', 'transparent']}
        style={styles.background}
      />
          <Tabs.Navigator
           tabBarOptions={{
             activeBackgroundColor: "transparent",
            activeTintColor: "white",
            inactiveTintColor: "#222222",
          }}
          appearance={{
            tabBarBackground: '#778899',

          }}
          >
         
          <Tabs.Screen 
          name="Counter" 
          component={CounterScreen} 
          options={{
            tabBarIcon: ({ focused, color, size }) => (
                <MaterialCommunityIcons
                    name="counter"
                    size={size ? size : 24}
                    color={focused ? color : "#222222"}
                    focused={focused}          
                />
                 )
              }}       
            />

          <Tabs.Screen 
          name="Totals" 
          component={ChartTotals} 
          options={{
            tabBarIcon: ({ focused, color, size }) => (
                <Icon
                    name="pie-chart"
                    size={size ? size : 24}
                    color={focused ? color : "#222222"}
                    focused={focused}
                />
                 )
              }}  
          />
          </Tabs.Navigator> 
          </View>
        </NavigationContainer>
     </SafeAreaProvider>
</Provider>
    )
  }  


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#778899'
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 300, 
    },
    text: {
      backgroundColor: 'transparent',
      fontSize: 15,
      color: 'white',
    },
  });

export default App;