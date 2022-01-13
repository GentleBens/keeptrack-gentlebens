import React from 'react';
import { useEffect, useState } from 'react'
import { Tab, TabView } from 'react-native-elements';
import { Text, Image, View, Pressable, StyleSheet } from 'react-native';
import { SimpleBarChart } from '@carbon/charts-react';
import '@carbon/charts/styles.css'
import store from '../CounterUsingRedux/index';



export default function ChartTotals() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    console.log("Sending out the GetRange");
    store.dispatch({ type: 'server/getDataRange', dataRange: { startDate: '05/28/21', endDate: '1/12/22' } });
  }, []);



  //const [chartData, setChartData] = useState([]);

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

  const evalSelection = () => {
    console.log('Index: ', index);
    let dt = new Date();
    let stringDate = `${dt.getMonth() + 1}/${dt.getDate()}/${dt.getFullYear()}`;

    switch (index) {
      case 0:
        store.dispatch({ type: 'server/getDataRange', dataRange: { startDate: stringDate, endDate: stringDate } });
        console.log('ChartData in (Day) Totals: ', store.getState().counter.chartData);

        break;
      case 1:
        let endWeek = `${dt.getMonth() + 1}/${dt.getDate() + 7}/${dt.getFullYear()}`;
        console.log("EndWeek", endWeek);
        store.dispatch({ type: 'server/getDataRange', dataRange: { startDate: stringDate, endDate: endWeek } });
        console.log('ChartData in (Week) Totals: ', store.getState().counter.chartData);

        break;
      case 2:
        let month = `${dt.getMonth() + 2}/${dt.getDate()}/${dt.getFullYear()}`;
        store.dispatch({ type: 'server/getDataRange', dataRange: { startDate: stringDate, endDate: month } });
        console.log('ChartData in (Month) Totals: ', store.getState().counter.chartData);
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
      <Tab
        value={index}
        onChange={setIndex}
      >
        <Tab.Item title='Day' />
        <Tab.Item title='Week' />
        <Tab.Item title='Month' />
      </Tab>




      <TabView value={index} onChange={setIndex}>
        <TabView.Item>{evalSelection()}
        </TabView.Item>
        <TabView.Item><h1>Hi</h1></TabView.Item>
        <TabView.Item><h1>Arroof!</h1></TabView.Item>
      </TabView>
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