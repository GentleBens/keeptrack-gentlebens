import React from 'react';
import { createStore, combineReducers } from 'redux';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CounterUsingRedux from './CounterUsingRedux';
import counterReducer from '../modules/redux/counter';

const rootReducers = combineReducers({
    counter: counterReducer
});

const store = createStore(rootReducers);

const Stack = createStackNavigator();

export default () => {
    return (
        <Provider store={store}>
            <StatusBar translucent backgroundColor='transparent' barStyle='light-content' />
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                    name='CounterUsingRedux'
                    component={CounterUsingRedux}
                    options={{
                        title: 'Gentle Ben\'s Keeping Track',
                        headerTitleAlign: 'center',
                        headerTintColor: 'white',
                        headerStyle: {
                            backgroundColor: '#3f51b5',
                            fontFamily: 'Roboto'
                        } 
                    }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

// createStore & combinedReducers = redux packages
// createStore makes Redux store and takes in a list of parameters (i.e reducer)
// combineReducers = combined multiple reducers into one
// Provider = wrapper and responsible for making redux store accessible to the app
// createStore function creates the store and passes reducer variable as a param
// Wrap app by using Provider component and pass store as a prop to make redux store accessible to the app
// CounterUsing Redux component ans a component prop to Stack.Screen