import React, { useEffect, useState } from 'react'
import { Tab } from 'react-native-elements';
import { Dimensions, StyleSheet} from 'react-native';
import store from '../CounterUsingRedux/index';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { BarChart } from "react-native-chart-kit";
import { useSelector } from 'react-redux';
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

  const chartConfig = {
    backgroundGradientFrom: "#2e8b57",
   backgroundGradientFromOpacity: 0,
   backgroundGradientTo: "#2e8b57",
    backgroundGradientToOpacity: 0,
    //2e8b57",
  //   color: (opacity = 1) => {
  //     return `rgba(189, 177, 125, ${opacity})`;
  //  },
  // dotted vertical lines on chart
   color: (opacity = 1) => {
      return `rgba(255,255,255, ${opacity})`;
   },
    labelColor: () => {
      //return `rgba(0, 0, 0, 0.5)`; // black
      return `rgba(255,255,255)`; // white
   
    },
    //fillShadowGradient: `rgba(1, 122, 205, 1)`,
    fillShadowGradientOpacity: 2,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
    decimalPlaces: 0, // optional, default 2
  };

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
    return (
      <BarChart
    data={data}
    width={screenWidth}
    height={645}
    fromZero={true}
    showValuesOnTopOfBars={true}
    chartConfig={chartConfig}
    verticalLabelRotation={90}
    flatColor={true}
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
           //titleStyle={{ fontSize: 20, color: 'white' }}
           //icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
        />
        <Tab.Item
           title="Week"
          // titleStyle={{fontSize: 16, color: 'white' }}
          //  icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
        />
        <Tab.Item
           title="Month"
          // titleStyle={{ fontSize: 12 }}
          // icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
        />
      </Tab>
        {barChartFunc()}
    </>
  )
}
