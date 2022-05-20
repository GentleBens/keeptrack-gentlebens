import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CounterScreen from './src/CounterUsingRedux/CounterScreen';
import store from './src/CounterUsingRedux/index';
import { StatusBar, Image, View, StyleSheet} from 'react-native';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ChartTotals from './src/ChartTotals/chartTotals';
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import Icon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tabs = AnimatedTabBarNavigator();
function App() {
   return (
  <Provider store={store}>
  <SafeAreaProvider>
  <NavigationContainer>
    <StatusBar translucent backgroundColor='transparent'/> 
    <View style={{backgroundColor: '#f2f2f7', paddingTop: 50, paddingBottom: 5, flexDirection:'row', justifyContent:'center'}}>
    <Image
        style={{ width: 65, height: 50 }}
        source={require('./src/assets/image/gblogo.jpg')}
      />
      </View>
      <View style={styles.container}>
          <Tabs.Navigator
           tabBarOptions={{
            activeBackgroundColor: "transparent",
            activeTintColor: "black",
            inactiveTintColor: "white",
          }}
          appearance={{
            tabBarBackground: "#f2f2f7",

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
                    color={focused ? color : "black"}
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
                    color={focused ? color : "black"}
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
     backgroundColor: "#4692c2"
      
    },
  });

export default App;