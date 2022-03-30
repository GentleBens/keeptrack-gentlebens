import React, { useEffect, useMemo, useState } from 'react'
import { Tab } from 'react-native-elements';
import { Text, StyleSheet, Dimensions } from 'react-native';
import store from '../CounterUsingRedux/index';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { BarChart } from "react-native-chart-kit";
import { useSelector, useDispatch } from 'react-redux';
const screenWidth = Dimensions.get("window").width;

export default function ChartTotals() {
  const [index, setIndex] = useState(-1);
  const [chartData, setChartData] = useState([]);
  const isFocused = useIsFocused();
  const {  capacity } = useSelector(state => state?.counter);

  useFocusEffect(React.useCallback(() => {
    capacity;
  }));

  useEffect(() => {
    const getDataAsync = async () => {
      await store.dispatch({ type: 'server/getHistoricalData' });
    }
    if (isFocused) {
          setIndex(0);
          getDataAsync();
          setChartData(store.getState().counter.dayData);

    } else {
      setChartData([]);
    }
    console.log("focus?", isFocused)
    console.log("index?", index)
  }, [isFocused]);

  // useEffect(() => {
  //   dayWeekMonthData(); 
  // });

  // const dayWeekMonthData = () => {
  //     switch (index) {
  //       case 0:
  //         setChartData(store.getState().counter.dayData);
  //         break;
  //       case 1:
  //         setChartData(store.getState().counter.weekData);
  //         break;
  //       case 2:
  //         setChartData(store.getState().counter.monthData);
  //         break;
  //         default:
  //           setChartData(store.getState().counter.dayData);
  //     }
  // }

  // useEffect(() => {
  //   store.dispatch({ type: 'server/getHistoricalData' });
  // });

  // const data = {
  //   labels: chartData.labels ? chartData.labels : [],
  //   datasets: [
  //     {
  //       data: chartData.countValue ? chartData.countValue : [],
  //     }
  //   ]
  // };

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => {
      return `rgba(26, 255, 146, ${opacity})`;
    },
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  //console.log("chartData -----", chartData)

  const barChartFunc = () => {
    let chart = null;
    switch (index) {
      case 0:
        chart = store.getState().counter.dayData;
        break;
      case 1:
        chart = store.getState().counter.weekData;
        break;
      case 2:
        chart = store.getState().counter.monthData;
        break;
        default:
          chart = store.getState().counter.dayData;
    }
    const data = {
      labels: chart.labels ? chart.labels : [],
      datasets: [
        {
          data: chart.countValue ? chart.countValue : [],
        }
      ]
    };
    console.log("bar chart function", barChartFunc);
    return (
      <BarChart
    data={data}
    width={screenWidth}
    height={645}
    fromZero={true}
    showValuesOnTopOfBars={true}
    chartConfig={chartConfig}
    verticalLabelRotation={40}
/> 
)}

  return (
    <>
      <Tab
          value={index}
          onChange={(e) => { 
            setIndex(e)}}
          indicatorStyle={{
          backgroundColor: 'white',
          height: 3,
        }}
        variant="primary"
      >
        <Tab.Item
          title="Day"
          // titleStyle={{ fontSize: 12 }}
          // icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
        />
        <Tab.Item
          title="Month"
          // titleStyle={{ fontSize: 12 }}
          // icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
        />
        <Tab.Item
          title="Year"
          // titleStyle={{ fontSize: 12 }}
          // icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
        />
      </Tab>
        {barChartFunc()}

        {/* { (index !== -1) ? 
      <BarChart
          data={data}
          width={screenWidth}
          height={645}
          fromZero={true}
          showValuesOnTopOfBars={true}
          chartConfig={chartConfig}
          verticalLabelRotation={40}
      /> : <Text>""</Text>} */}
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
    margin: 10,
    backgroundColor: "transparent",
    color: "white"
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
  },
  tab: {
    backgroundColor: 'transparent'
  }
});