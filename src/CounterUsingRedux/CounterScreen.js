import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import FloatingButton from './FloatingButton';
import { increment, decrement } from '../modules/redux/counter';
//import FocusAwareStatusBar from '../Focus/focus';
//import DisplayContacts from '../DisplayContacts/contacts';

const CounterScreen = ({ navigation: { navigate }}) => {
    const { counter } = useSelector(state => state?.counter);
    const dispatch = useDispatch();

    return (
        <View style={StyleSheet.container}>
 <Button
        onPress={() =>
          navigate('Contacts', { title: 'Contact List'})}
          title="Go to Contact List"
        
      />  
 {/* <FocusAwareStatusBar barStyle="light-content" backgroundColor="#6a51ae" /> */}
         <Text style={styles.text}>People Counter: {counter}</Text>

         
         <SafeAreaView style={styles.buttonsHolder}>
 
           <FloatingButton
                // style={styles.buttonsHolder}
                onPress={() => dispatch(decrement())}
                disabled={counter <= 0}
                type='REMOVE'
                btnStyle={counter <= 0 ? styles.disabledRemoveBtn : styles.removeBtn}
           />
            <FloatingButton
                // style={styles.buttonsHolder}
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
        padding: 30,
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
        fontSize: 20,
        paddingTop: 30,
        minWidth: 100,
        alignSelf: 'stretch',
        textAlign: 'center',
        textShadowColor: 'gray',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 3
      },
      
    });
    
    export default CounterScreen;

    
    // export default App;

    // // useSelector hook is responsible to fetch specific reducer's state from the store
    //     // fetching counter state from custom counter reducer
    // // useDispatch hook allows for dispatch actions (i.e increment & decrement) to reducers
