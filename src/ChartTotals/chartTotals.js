import React from 'react';
import { useEffect, useState } from 'react'
import { Tab, TabView } from 'react-native-elements';
import { Text, Image, View, Pressable, StyleSheet } from 'react-native';
import { SimpleBarChart } from '@carbon/charts-react';
// import '@carbon/charts/styles.css'
import store from '../CounterUsingRedux/index';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';

export default function ChartTotals() {
  const [index, setIndex] = useState(-1);
  const [dateRange, setDateRange] = useState({});
  const [chartData, setChartData] = useState([]);
  const isFocused = useIsFocused();


  useFocusEffect(React.useCallback(() => {
    store.dispatch({ type: 'server/getHistoricalData' });
    //setIndex(-1);
  }));
  useEffect(() => { setIndex(0) }, [])

  useEffect(() => {
    console.log("Index:", index);
    switch (index) {
      case 0:
        setChartData(store.getState().counter.dayData);
        break;
      case 1:
        setChartData(store.getState().counter.weekData);
        break;
      case 2:
        setChartData(store.getState().counter.monthData);
        break;
    }

    console.log("Sending out the GetRange:", chartData);
    //evalSelection();
  });

  useEffect(() => {
    store.dispatch({ type: 'server/getHistoricalData' });
    // console.log("State:", store.getState().counter);
    // console.log("AllDataStore: ", store.getState().counter.chartDayData, store.getState().counter.chartMonthData, store.getState().counter.chartMonthData);
  });

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
      data={chartData}
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

        // store.dispatch({ type: 'server/getDataRange', dataRange: { startDate: stringDate, endDate: stringDate } });

        // console.log('ChartData in (Day) Totals: ', store.getState().counter.chartData);

        // setDateRange({ startDate: stringDate, endDate: stringDate });
        //setChartData(store.getState().counter.chartData);

        break;
      case 1:
        let endWeek = `${dt.getMonth() + 1}/${dt.getDate() + 7}/${dt.getFullYear()}`;
        console.log("EndWeek", endWeek);

        store.dispatch({ type: 'server/getDataRange', dataRange: { startDate: stringDate, endDate: endWeek } });

        console.log('ChartData in (Week) Totals: ', store.getState().counter.chartData);

        setDateRange({ startDate: stringDate, endDate: endWeek });
        //setChartData(store.getState().counter.chartData);

        break;
      case 2:
        let month = `${dt.getMonth() + 2}/${dt.getDate()}/${dt.getFullYear()}`;
        store.dispatch({ type: 'server/getDataRange', dataRange: { startDate: stringDate, endDate: month } });
        console.log('ChartData in (Month) Totals: ', store.getState().counter.chartData);

        setDateRange({ startDate: stringDate, endDate: month });
        //setChartData(store.getState().counter.chartData);

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
        <TabView.Item>{
          // evalSelection()
        }
        </TabView.Item>
        <TabView.Item></TabView.Item>
        <TabView.Item></TabView.Item>
      </TabView>
      {(isFocused) ? makeSimpleBarChart() : ""}
      {/* {(chartData) ? makeSimpleBarChart() : ""} */}
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