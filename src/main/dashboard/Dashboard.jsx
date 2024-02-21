import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import { BarChart, PieChart } from 'react-native-chart-kit';
export default function Dashboard() {
  const dataa = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    datasets: [
      {
        data: [2000, 4000, 8000, 8000, 9578, 4300, 12000, 10000, 5677, 7888, 7788, 9083]
      }
    ]
  };
  const piedata = [
    {
      name: "Clothes",
      spend: 21500,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Food",
      spend: 2800,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "gym",
      spend: 2800,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "deit",
      spend: 8538,
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "services",
      spend: 11920,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ];
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false
  };
  const barConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 0.5) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 0.5,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
    decimalPlaces: 0,

  }
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: 'black' }}>
        <ScrollView>
          <View style={[mystyle.box, { gap: 10, height: 100, paddingBottom: 1 }]}>
            <Text style={[mystyle.text, { fontSize: 25 }]}>Financial Analysis</Text>
            <View style={[mystyle.box, { flexDirection: 'row', gap: 10 }]}>
              <Icon name="coins" color={'#fff'} size={20} />
              <Text style={[mystyle.text, { fontSize: 25 }]}>₹ 96900</Text>
            </View>
          </View>
          <View style={[mystyle.box]}>
            <View style={[mystyle.box, { width: 50, height: 50, borderWidth: 2, borderRadius: 50, borderColor: '#fff' }]}>
              <Icon name="user" size={30} color={'#fff'} />
            </View>
            <Text style={mystyle.text}>Tawfeeq</Text>
          </View>
          <View style={[mystyle.top, mystyle.box]}>
            <View>
              <TouchableOpacity style={[mystyle.box, mystyle.btn]}>
                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}> View  Fitness Dashboard</Text>
              </TouchableOpacity>
            </View>

          </View>
          <View style={mystyle.box}>
            <Text style={[mystyle.text, { marginBottom: 10, }]}>Bar graph show your purchases in every month (₹)</Text>
          </View>
          <ScrollView horizontal={true}>
            <View style={[mystyle.box,]} >

              {
                dataa ? (<View style={[mystyle.box]}>


                  <BarChart
                    yAxisLabel="₹"
                    data={dataa}
                    height={250}
                    width={700}
                    chartConfig={barConfig}
                    showValuesOnTopOfBars={true}

                  />

                </View>) : (<Text style={[mystyle.text]}>No record available!</Text>)
              }
            </View>
          </ScrollView>
          <View style={mystyle.box}>
            <Text style={[mystyle.text, { marginTop: -20 }]}> month →</Text>
          </View>
          <View style={mystyle.box}>
            <Text style={[mystyle.text, { marginTop: 70 }]}>Pie chart show Where did you use your  money (₹)</Text>
            <PieChart
              data={piedata}
              width={400}
              height={220}
              chartConfig={chartConfig}
              accessor={"spend"}
              backgroundColor={"transparent"}
              absolute

            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}
const mystyle = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },
  btn: {
    width: 250,
    height: 30,
    backgroundColor: '#fa8200',
    color: '#fff',
    borderRadius: 10
  }
})