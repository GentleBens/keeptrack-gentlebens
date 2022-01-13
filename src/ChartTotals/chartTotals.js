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
    store.dispatch({ type: 'server/getDataRange', dataRange: { startDate: '05/28/21', endDate: '1/12/22' } });
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

  const makeSimpleBarChart = () => {
    return <SimpleBarChart
      data={store.getState().counter.chartData}
      options={chartOptions}
    />
  }
  const handleGetDateRange = async () => {
    console.log("Sending out the GetRange From Button");
    store.dispatch({ type: 'server/getDataRange', dataRange: { startDate: '05/28/21', endDate: '1/12/22' } });
  }
  const retrieveData = () => {
    console.log('ChartData in Totals: ', store.getState().counter.chartData);
    setChartData(store.getState().counter.chartData);
  }
  const retrieveDayData = () => {
    console.log("retrieveDayData");
    dt = new Date();
    stringDate = `${dt.getMonth()}/${dt.getDate()}/${dt.getFullYear()}`;
    store.dispatch({ type: 'server/getDataRange', dataRange: { startDate: stringDate, endDate: stringDate } });

    console.log('ChartData in (Day) Totals: ', store.getState().counter.chartData);
    setChartData(store.getState().counter.chartData);
  }

  const evalSelection = (e) => {
    dt = new Date();
    stringDate = `${dt.getMonth()}/${dt.getDate()}/${dt.getFullYear()}`;
    console.log(e.value);
    switch (e.value) {
      case 1:
        store.dispatch({ type: 'server/getDataRange', dataRange: { startDate: stringDate, endDate: stringDate } });
        console.log('ChartData in (Day) Totals: ', store.getState().counter.chartData);
        break;
    }
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
      <Tab onchange={(e) => evalSelection(e)}>
        <Tab.Item value={1} title='Day'>{retrieveDayData}</Tab.Item>
        <Tab.Item value={2} title='Week' />
        <Tab.Item value={3} title='Month' />

      </Tab>
      {makeSimpleBarChart()}
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