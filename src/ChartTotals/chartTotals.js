import React from 'react';
import { Tab } from 'react-native-elements';
import { Text, Image, View, Pressable, StyleSheet } from 'react-native';
import chart from '../assets/image/chart.png';
import { SimpleBarChart } from '@carbon/charts-react';
import '@carbon/charts/styles.css'
import store from '../CounterUsingRedux/index';



export default function ChartTotals() {
  let sampleData = {
    data: [
      {
        "group": "12/12/2021",
        "value": 10
      },
      {
        "group": "12/13/2021",
        "value": 12
      },
      {
        "group": "12/14/2021",
        "value": 20
      }
    ],
    options: {
      "title": "Attendance",
      "axes": {
        "left": {
          "mapsTo": "value"

        },
        "bottom": {
          "mapsTo": "group",
          "scaleType": "labels"
        }
      },
      "height": "400px",
      "width": "200px"
    }
  }
  //store.dispatch({ type: 'server/getDataRange', clientCount: store.getState().counter.counter });



  return (
    <>
      <Pressable
        style={styles.container}
      // onPress={getData}
      >
        <Text style={styles.button}>Get Totals</Text>
      </Pressable>
      <Tab >
        <Tab.Item value={1} title='Day' />
        <Tab.Item value={2} title='Week' />
        <Tab.Item value={3} title='Month' />

      </Tab>
      <SimpleBarChart
        data={sampleData.data}
        options={sampleData.options}
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#e7e7e7',
    padding: 10,
    elevation: 2,
    margin: 4,
    backgroundColor: "transparent",
    color: "white"
  },

});