import React, { useEffect, useState } from 'react'
import { Tab } from 'react-native-elements';
import { Text, StyleSheet, Dimensions } from 'react-native';
import store from '../CounterUsingRedux/index';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { BarChart } from "react-native-chart-kit";
const screenWidth = Dimensions.get("window").width;

export default function ChartTotals() {
  const [index, setIndex] = useState(-1);
  const [chartData, setChartData] = useState([]);

  const isFocused = useIsFocused();
  useFocusEffect(React.useCallback(() => {
    store.dispatch({ type: 'server/getHistoricalData' });
  }));

  useEffect(() => { setIndex(0) }, [])

  useEffect(() => {
    dayWeekMonthData(); 
  });

  const dayWeekMonthData = () => {
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
  }

  useEffect(() => {
    store.dispatch({ type: 'server/getHistoricalData' });
  });

  const data = {
    labels: chartData.labels ? chartData.labels : [],
    datasets: [
      {
        data: chartData.countValue ? chartData.countValue : [],
      }
    ]
  };

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

  return (
    <>
      <Tab
          value={index}
          onChange={(e) => {dayWeekMonthData(); 
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
      { (index !== -1) ? 
      <BarChart
          data={data}
          width={screenWidth}
          height={645}
          fromZero={true}
          showValuesOnTopOfBars={true}
          chartConfig={chartConfig}
          verticalLabelRotation={40}
      /> : <Text>""</Text>}
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