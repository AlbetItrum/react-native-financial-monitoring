import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {counterSelector} from '../../../redux/store/financialSlice';
import {styles} from '../styles/styleChartKit';

// Expense chart component
const Chart = () => {
  const [openChart, setOpenChart] = useState(false);
  const [entireAmount, setEntireAmount] = useState(['0']);
  // Getting app screen width
  const screenWidth = Dimensions.get('window').width;
  // Getting filtered tasks for the current month
  const filterDataTasks = useSelector(state =>
    counterSelector.getFilterTasks(state.counter),
  );

  useEffect(() => {
    // Checking filtered tasks for the amount of added 'Price' for the chart
    const funcEntireAmount = dataTasks => {
      if (dataTasks.length === 0) {
        setEntireAmount([0]);
      } else if (dataTasks.length === 1) {
        const test = [dataTasks[0].Price];
        setEntireAmount([0, test]);
      } else {
        let theEntireAmount = [];
        for (let index = 0; index < dataTasks.length; index++) {
          const element = dataTasks[index];
          theEntireAmount.push(element.Price);
        }
        setEntireAmount(theEntireAmount);
      }
    };
    funcEntireAmount(filterDataTasks);
  }, [filterDataTasks]);

  // Appearance of the chart window
  const openFunction = () => {
    setOpenChart(prev => !prev);
  };
  // Chart style
  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };

  // Getting data into a chart and displaying it with styles
  const data = {
    datasets: [
      {
        data: entireAmount,
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2,
      },
    ],
    legend: ['Expense Chart'],
  };

  return (
    <View>
      <View style={styles.chartContainer}>
        <TouchableOpacity onPress={openFunction}>
          <Text style={styles.buttonActivityChart}>Диаграмма расходов</Text>
        </TouchableOpacity>
      </View>
      {openChart && (
        <LineChart
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
        />
      )}
    </View>
  );
};

export default Chart;
