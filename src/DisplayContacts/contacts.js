//import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View, Button, FlatList, Linking } from 'react-native';
import * as Contacts from 'expo-contacts';
//import FocusAwareStatusBar from '../Focus/focus';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DisplayContacts({navigation, route}) {
  const [contacts, setContacts] = useState([]);
  const [permissions, setPermissions] = useState(false);
  //const [filterContacts, setFilterContacts] = useState({});
  //const [memory, setMemory] = useState([]);

  const call = (contact) => {
    // call the contact
    console.log({ contact })
    let phoneNumber = contact.phoneNumbers[0].number.replace(/[\(\)\-\s+]/g, ''); // [\ <-- = escape character] || brackets = match characters anything or. '' replace with nothing 
    console.log({ phoneNumber });
    let link = `tel:${phoneNumber}`;
    Linking.canOpenURL(link)
      .then(supported => Linking.openURL(link))
      .catch(console.error);
  }

  const showContacts = async () => {
    // get all my phone contacts
    const contactList = await Contacts.getContactsAsync();
    setContacts(contactList.data.sort(
      (a, b) => {
      if (a && a.givenName && b && b.givenName)
      a.givenName.toLowerCase() > b.givenName.toLowerCase()

    })
    
    )}


// const searchContacts = async (value) => {
//   const filterThrough = filterContacts.filter(contact => {
//     let lowerCaseContacts = (
//       contact.firstName + ' ' + contact.lastName ).toLowerCase();
//       let searchTermLowercase = value.toLowerCase();
//       return lowerCaseContacts.indexOf(searchTermLowercase) > -1;
  
//   });
// setFilterContacts(filterThrough.data);
// }  

  const getPermissions = async () => {
    // const { status } = await Permissions.askAsync(Permissions.CONTACTS);
    const { status } = await Contacts.requestPermissionsAsync();
    console.log({ status });
    if (status === 'granted') {
      setPermissions(true);
    } else { setPermissions(false) }

  };

  useEffect(() => {
    getPermissions();
  }, [])



  return (
    <> 
    
    <SafeAreaView style={{ backgroundColor: '#ecf0f1' }}/>
     <View style={StyleSheet.container}>
   {/* <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />      */}
    {/* <TextInput 
  placeholder='Search By Name'
  placeholderTextColor='#dddddd'
  style={{
    backgroundColor: '#2f363c',
    // height: 50,
    // fontSize: 36,
    // padding: 10,
    // color: 'white',
    // borderBottomWidth: 0.5,
    // borderBottomColor: '#7d90a0'
  }}
  onChangeText={value => searchContacts(value)}
  /> */} 
  
   <Button title='Go Back' onPress={() => navigation.goBack()}/>

    <TextInput
          onChangeText={showContacts}
          placeholder="Search"
          style={styles.searchBar}
        />

<Button
            style={styles.button}
             onPress={showContacts}
            title="Display Contacts"
          ></Button> 

        <FlatList
            data={contacts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Button title={item.name} onPress={() => call(item)} />}
        ></FlatList>
 
      </View >
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop:30,
  },
  phones: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  contact_details: {
    textAlign: 'center',
    color: 'red',
    margin: 10,
  },
  searchBar: {
    backgroundColor: '#f0eded',
    paddingHorizontal: 30,
    paddingVertical: Platform.OS === 'android' ? undefined : 15,
  },
});