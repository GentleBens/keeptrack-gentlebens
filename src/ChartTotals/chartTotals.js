import React, { useEffect, useState } from 'react'
import { Tab, TabView } from 'react-native-elements';
import { Pressable, Text, StyleSheet, Dimensions } from 'react-native';
import store from '../CounterUsingRedux/index';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { BarChart } from "react-native-chart-kit";
const screenWidth = Dimensions.get("window").width;

export default function ChartTotals() {
  const [index, setIndex] = useState(-1);
  const [chartData, setChartData] = useState([]);
  const [label, setLabel] = useState([]);
  const [value, setValue] = useState([]);
  //const [isFocused, setIsFocused] = useState(false);
  const isFocused = useIsFocused();


  useFocusEffect(React.useCallback(() => {
    store.dispatch({ type: 'server/getHistoricalData' });
  // setIndex(-1);
  }));
  useEffect(() => { setIndex(0) }, [])

  useEffect(() => {
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
  });

  useEffect(() => {
    store.dispatch({ type: 'server/getHistoricalData' });
  });

  const data = {
    labels: label,
    datasets: [
      {
        data: value,
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

  const handleGetDateRange = async () => {
    store.dispatch({ type: 'server/getDataRange', dataRange: { startDate: '01/15/2022', endDate: '03/01/2022' } });
    setChartData(store.getState().counter.weekData);
    console.log("Data from top button", chartData);
    const chartGroup = chartData.map(chart => {
      return chart.group;
    });
    setLabel(chartGroup);

    const chartValue = chartData.map(chart => {
      return chart.value;
    });
    setValue(chartValue);
  }
console.log("labels", label);
console.log("values", value);
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
          onChange={(e) => setIndex(e)}
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
      
      <BarChart
          data={data}
          width={screenWidth}
          height={500}
          fromZero={true}
          showValuesOnTopOfBars={true}
          chartConfig={chartConfig}
          verticalLabelRotation={40}
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