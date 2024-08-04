import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Image, Icon } from "react-native-elements";
import { PieChart } from "react-native-chart-kit";
import { LineChart } from "react-native-chart-kit";

const Activities = () => {
  const pieData = [
    { name: "Kitchen", percentage: 13.2, color: "#AED6F1" },
    { name: "Bathroom", percentage: 24.4, color: "#5DADE2" },
    { name: "Garden", percentage: 27.9, color: "#A569BD" },
    { name: "Laundry", percentage: 34.5, color: "#45B39D" },
  ];

  const lineChartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
  };

  const usageData = [
    { name: "Kitchen", liters: 38, color: "#AED6F1" },
    { name: "Garden", liters: 80, color: "#A569BD" },
    { name: "Bathroom", liters: 70, color: "#5DADE2" },
    { name: "Laundry", liters: 99, color: "#45B39D" },
  ];

  return (
    <ScrollView className="bg-white font-[Lexend] ">
      <View className="px-4 pt-8 pb-4">
        <View className="flex-row justify-between items-center mb-6">
          <View className="flex-row items-center">
            <Image
              source={require("../../assets/images/icons/profile.png")}
              style={{ width: 40, height: 40, borderRadius: 20 }}
            />
            <View className="ml-3">
              <Text className="text-lg font-semibold text-[#312064] font-[Lexend]">
                Hello, Anubha!
              </Text>
              <Text className="text-sm text-[#312064] font-[Lexend]">1 March 2024</Text>
            </View>
          </View>
          <Icon name="bell" type="feather" color="#312064" size={24} />
        </View>

        <View className="items-center mb-6">
          <PieChart
            data={pieData}
            width={300}
            height={200}
            chartConfig={lineChartConfig}
            accessor="percentage"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
            style={{ fontFamily: "Lexend" }}
          />
          <Text className="text-3xl font-bold text-center font-[Lexend]  ">287L</Text>
        </View>

        <View className="flex-row flex-wrap justify-between">
          {usageData.map((item, index) => (
            <View
              key={index}
              className="w-[48%] bg-opacity-20 rounded-xl p-3 mb-4"
              style={{ backgroundColor: item.color }}
            >
              <Text
                className="text-lg font-semibold font-[Lexend] "
                style={{
                  color: item.color,
                  textShadowColor: "rgba(0, 0, 0, 1)",
                  textShadowOffset: { width: 1, height: 1 },
                  textShadowRadius: 20,
                }}
              >
                {item.name}
              </Text>
              <Text
                className="text-2xl font-bold mb-2 font-[Lexend] text-white"
                style={{
                  color: "white",
                  textShadowColor: "rgba(0, 0, 0, 1)",
                  textShadowOffset: { width: 1, height: 1 },
                  textShadowRadius: 20,
                }}
              >
                {item.liters}L
              </Text>
              <LineChart
                data={{
                  labels: [],
                  datasets: [{ data: [20, 45, 28, 80, 99, 43] }],
                }}
                width={120}
                height={60}
                chartConfig={{
                  ...lineChartConfig,
                  color: () => item.color,
                }}
                bezier
                style={{ paddingRight: 0 }}
                withDots={false}
                withInnerLines={true}
                withOuterLines={true}
                withVerticalLabels={false}
                withHorizontalLabels={true}
              />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Activities;
