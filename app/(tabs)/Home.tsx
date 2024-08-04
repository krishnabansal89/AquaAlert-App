// import { View, Text , Pressable } from "react-native";
// import React from "react";
// import { Image , Icon} from "react-native-elements";

// const Home = () => {
//   return (
//     <View className="h-[100vh] bg-white flex space-y-4 ">
//       <View className="navbar w-[90%] mx-auto flex flex-row mt-8 space-x-4">
//         <Image 
//           source={require("../../assets/images/icons/profile.png")}
//           style={{ width: 40, height: 40 , marginTop: 5}}
//           // color="#000" 
//           // size={40}
//         />
//         <View className=" w-[50%] flex justify-center items-start ">
//           <Text className="text-lg font-[Lexend] text-[#312064] font-[600] ">Hello, User</Text>
//           <Text className="text-sm font-[Lexend] text-[#312064] ">1 March 2024</Text>
//         </View>
//         <View>
//         <Icon
//           name="bell"
//           type="feather"
//           color="#312064"
//           size={30}
//           style={{ marginLeft : "25%" , marginTop : 16}}
//         />
//         </View>
//       </View>
//     </View>
//   );
// };

// export default Home;

import React, { useState } from "react";
import { View, Text, Pressable, ScrollView, Dimensions } from "react-native";
import { Image, Icon } from "react-native-elements";
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

type TimeFrame = 'daily' | 'weekly' | 'monthly' | 'bimonthly';

type ChartDataPoint = {
  labels: string[];
  datasets: { data: number[] }[];
  total: number;
  unit: string;
};

type ChartData = {
  [key in TimeFrame]: ChartDataPoint;
};

const Home = () => {
  const [timeFrame, setTimeFrame] = useState<TimeFrame>('daily');

  const chartData: ChartData = {
    daily: {
      labels: ["9:00", "10:00", "11:00", "12:00", "1:00", "2:00", "3:00", "4:00"],
      datasets: [{ data: [100, 380, 200, 300, 230, 320, 50, 150] }],
      total: 400,
      unit: "Litres"
    },
    weekly: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [{ data: [2800, 3200, 2900, 3100, 3300, 3500, 3000] }],
      total: 22000,
      unit: "Litres"
    },
    monthly: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [{ data: [12000, 13500, 11800, 14000] }],
      total: 51300,
      unit: "Litres"
    },
    bimonthly: {
      labels: ["Jan-Feb", "Mar-Apr", "May-Jun", "Jul-Aug", "Sep-Oct", "Nov-Dec"],
      datasets: [{ data: [95000, 102000, 110000, 108000, 98000, 105000] }],
      total: 618000,
      unit: "Litres"
    }
  };

  const ChartComponent: React.FC<{ data: ChartDataPoint }> = ({ data }) => (
    <LineChart
      data={data}
      width={screenWidth * 0.9}
      height={220}
      chartConfig={{
        backgroundColor: "#ffffff",
        backgroundGradientFrom: "#ffffff",
        backgroundGradientTo: "#ffffff",
        decimalPlaces: 0,
        color: (opacity = 1) => `rgba(49, 32, 100, ${opacity})`,
        style: { borderRadius: 16 },
      }}
      bezier
      style={{ marginVertical: 8, borderRadius: 16 }}
    />
  );

  return (
    <ScrollView className="bg-white">
      <View className="h-full bg-white flex space-y-4 pb-20">
        {/* Header */}
        <View className="navbar w-[90%] mx-auto flex flex-row mt-8 space-x-4">
          <Image 
            source={require("../../assets/images/icons/profile.png")}
            style={{ width: 40, height: 40, marginTop: 5 }}
          />
          <View className="w-[50%] flex justify-center items-start">
            <Text className="text-lg font-[Lexend] text-[#312064] font-[600]">Hello, Anubha !</Text>
            <Text className="text-sm font-[Lexend] text-[#312064]">1 March 2024</Text>
          </View>
          <View>
            <Icon
              name="bell"
              type="feather"
              color="#312064"
              size={30}
              style={{ marginLeft: "25%", marginTop: 16 }}
            />
          </View>
        </View>

        {/* Leakage Alert */}
        <View className="w-[90%] mx-auto bg-white rounded-lg shadow-md p-4 border-[1px] border-[#CAC4D0] ">
          <View className="flex flex-row items-center">
            <Icon name="alert-circle" type="feather" color="#312064" size={24} />
            <Text className="ml-2 text-base font-[Lexend] text-[#312064]">Leakage detected</Text>
          </View>
          <View className="flex flex-row justify-between mt-2">
            <Text className="text-sm font-[Lexend] text-[#312064]">Kitchen</Text>
            <Text className="text-sm font-[Lexend] text-[#312064]">12 pm/2 May 2024</Text>
          </View>
        </View>

        {/* Time Frame Buttons */}
        <View className="w-[90%] mx-auto">
          <View className="flex flex-row mb-4">
            {(['daily', 'weekly', 'monthly', 'bimonthly'] as TimeFrame[]).map((frame) => (
              <Pressable 
                key={frame}
                className={`px-4 py-2 rounded-full ${timeFrame === frame ? "bg-blue-400" : ""}`}
                onPress={() => setTimeFrame(frame)}
              >
                <Text className={`font-[Lexend] ${timeFrame === frame ? "text-white" : "text-[#312064]"}`}>
                  {frame.charAt(0).toUpperCase() + frame.slice(1)}
                </Text>
              </Pressable>
            ))}
          </View>

          <Text className="text-3xl font-[Lexend] text-[#312064] font-bold mb-4">
            {chartData[timeFrame].total} {chartData[timeFrame].unit}
          </Text>

          <ChartComponent data={chartData[timeFrame]} />
        </View>

        {/* Water Consumption and Status */}
        <View className="w-[90%] mx-auto flex flex-row justify-between">
          <View className="bg-blue-400 w-[48%] p-4 rounded-lg">
            <Text className="text-white font-[Lexend] mb-2">Water Consumption</Text>
            <Text className="text-white font-[Lexend] text-3xl font-bold">185</Text>
            <Text className="text-white font-[Lexend]">Liters</Text>
            <Text className="text-white font-[Lexend] mt-2">25% of Daily Average</Text>
          </View>
          <View className="bg-gray-100 w-[48%] p-4 rounded-lg">
            <Text className="text-[#312064] font-[Lexend] mb-2">Water Status</Text>
            <Text className="text-[#312064] font-[Lexend] text-3xl font-bold">5 liters/min</Text>
            <Text className="text-[#312064] font-[Lexend]">Water Running</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;