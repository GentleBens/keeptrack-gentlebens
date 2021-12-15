import React from 'react';
import { useEffect, useState } from 'react'
import { Tab } from 'react-native-elements';
import { Text, Image, View, Pressable, StyleSheet } from 'react-native';
import { SimpleBarChart } from '@carbon/charts-react';
import '@carbon/charts/styles.css'
import store from '../CounterUsingRedux/index';



export default function ChartTotals() {
  useEffect(() => {
    console.log("Sending out the GetRange");
    store.dispatch({ type: 'server/getDataRange', dataRange: { startDate: '05/28/21', endDate: '05/31/21' } });
  }, []);

  const [chartData, setChartData] = useState([]);

  let chartOptions = {

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
    "width": "400px"
  }


  const handleGetDateRange = async () => {
    console.log("Sending out the GetRange");
    store.dispatch({ type: 'server/getDataRange', dataRange: { startDate: '05/28/21', endDate: '05/31/21' } });

  }
  const retrieveData = () => {
    console.log('ChartData in Totals: ', store.getState().counter.chartData);
    setChartData(store.getState().counter.chartData);
  }


  return (
    <>
      <Pressable
        style={styles.container}
        onPress={handleGetDateRange}
      >
        <Text style={styles.button}>Get Totals</Text>
      </Pressable>
      <Pressable
        style={styles.container}
        onPress={retrieveData}
      >
        <Text style={styles.button}>GET DATA -DEVONLY-</Text>
      </Pressable>
      <Tab >
        <Tab.Item value={1} title='Day' />
        <Tab.Item value={2} title='Week' />
        <Tab.Item value={3} title='Month' />

      </Tab>
      <SimpleBarChart
        data={store.getState().counter.chartData}
        options={chartOptions}
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