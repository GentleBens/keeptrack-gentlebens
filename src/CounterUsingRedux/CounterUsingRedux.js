import React, {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import FloatingButton from './FloatingButton';
import { increment, decrement } from '../modules/redux/counter';
// import * as Font from 'expo-font';
// import {AppLoading} from 'expo';


// const fetchFonts = () => {
//   return Font.loadAsync({
//       'headsome-modif.regular': require('../assets/fonts/headsome-modif.regular.ttf')
//   });
// };

const CounterUsingRedux = () => {
    // const [dataLoaded, setDataLoaded] = useState(false);
    // if(!dataLoaded) {
    //   return (
    //     <AppLoading
    //     startAsync={fetchFonts}
    //     onFinish={() => setDataLoaded(true)}
    //     />
    //   );
    // };

    const { counter } = useSelector(state => state?.counter);
    const dispatch = useDispatch();

    return (
        <View style={StyleSheet.container}>
        <View />
         <Text style={styles.text}>People Counter: {counter}</Text>
         <SafeAreaView style={styles.buttonsHolder}>
           <FloatingButton
                onPress={() => dispatch(decrement())}
                disabled={counter <= 0}
                type='REMOVE'
                btnStyle={counter <= 0 ? styles.disabledRemoveBtn : styles.removeBtn}
           />

            <FloatingButton
                onPress={() => dispatch(increment())}
                type='ADD'
                btnStyle={styles.addBtn}
            />
      </SafeAreaView>
    </View>

    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between'
 
    },

    buttonsHolder: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        padding: 25,
        justifyContent: 'space-between',
        alignItems: 'center'
      },
    
      addBtn: {
        backgroundColor: '#4CAF50',
        height: 60,
        width: 60,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#e7e7e7',
        justifyContent: 'center',
        alignItems: 'center'
      },
    
      removeBtn: {
        backgroundColor: '#FF5252',
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#e7e7e7',
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center'
      },
    
      disabledRemoveBtn: {
        backgroundColor: 'rgba(255, 82, 82, 0.6)',
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#e7e7e7',
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center'
      },
    
      text: {
        fontSize: 25,
        fontFamily: 'Roboto',
        minWidth: 100,
        alignSelf: 'stretch',
        textAlign: 'center',
        textShadowColor: 'gray',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 3
      }
    });
    
    export default CounterUsingRedux;


    // useSelector hook is responsible to fetch specific reducer's state from the store
        // fetching counter state from custom counter reducer
    // useDispatch hook allows for dispatch actions (i.e increment & decrement) to reducers
