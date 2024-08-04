import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StyleSheet,
} from "react-native";
import { Icon } from "react-native-elements";
import { BarChart } from "react-native-chart-kit";
import { icons } from "@/assets/images/ImageHandler";

const screenWidth = Dimensions.get("window").width;

const Nemo = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("Month");
  const [currentDate, setCurrentDate] = useState(new Date());

  const getData = () => {
    // Implement logic to get data based on selectedPeriod and currentDate
    // For now, we'll use dummy data
    return {
      labels: ["1", "2", "3", "4", "5", "6", "7"],
      datasets: [
        {
          data: [150, 200, 180, 250, 220, 300, 280],
        },
      ],
    };
  };

  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    color: (opacity = 1) => `rgba(0, 119, 255, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.7,
    decimalPlaces: 0,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForBackgroundLines: {
      strokeDasharray: "", // Solid background lines
    },
    propsForLabels: {
      fontSize: 12,
      fontWeight: "bold",
    },
  };

  const navigateDate = (direction) => {
    const newDate = new Date(currentDate);
    switch (selectedPeriod) {
      case "Day":
        newDate.setDate(newDate.getDate() + direction);
        break;
      case "Week":
        newDate.setDate(newDate.getDate() + direction * 7);
        break;
      case "Month":
        newDate.setMonth(newDate.getMonth() + direction);
        break;
    }
    setCurrentDate(newDate);
  };

  const formatDate = () => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    switch (selectedPeriod) {
      case "Day":
        return currentDate.toLocaleDateString(undefined, options);
      case "Week":
        const endOfWeek = new Date(currentDate);
        endOfWeek.setDate(endOfWeek.getDate() + 6);
        return `${currentDate.toLocaleDateString(undefined, {
          month: "short",
          day: "numeric",
        })} - ${endOfWeek.toLocaleDateString(undefined, {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}`;
      case "Month":
        return currentDate.toLocaleDateString(undefined, {
          month: "long",
          year: "numeric",
        });
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Image source={icons.nemo} style={styles.logo} resizeMode="contain" />
        </View>

        {/* Period Selector */}
        <View style={styles.periodSelector}>
          {["Day", "Week", "Month"].map((period) => (
            <TouchableOpacity
              key={period}
              style={[
                styles.periodButton,
                selectedPeriod === period && styles.selectedPeriod,
              ]}
              onPress={() => setSelectedPeriod(period)}
            >
              <Text
                style={[
                  styles.periodText,
                  selectedPeriod === period && styles.selectedPeriodText,
                ]}
              >
                {period}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Date Selector and Graph */}
        <View style={styles.graphContainer}>
          <View style={styles.dateSelector}>
            <TouchableOpacity onPress={() => navigateDate(-1)}>
              <Icon
                name="chevron-left"
                type="feather"
                size={24}
                color="#0077ff"
              />
            </TouchableOpacity>
            <Text style={styles.dateText}>{formatDate()}</Text>
            <TouchableOpacity onPress={() => navigateDate(1)}>
              <Icon
                name="chevron-right"
                type="feather"
                size={24}
                color="#0077ff"
              />
            </TouchableOpacity>
          </View>
          <BarChart
            data={getData()}
            width={screenWidth - 60}
            height={220}
            yAxisLabel=""
            chartConfig={chartConfig}
            style={styles.chart}
            showValuesOnTopOfBars={true}
            
            fromZero
          />
        </View>

        {/* Monthly Progress */}
        <View style={styles.progressSection}>
          <Text style={styles.sectionTitle}>Monthly progress</Text>
          <Text style={styles.progressText}>
            On average, this month you used 11% less water than previous month
          </Text>

          <View style={styles.usageRow}>
            <Text style={styles.usageValue}>226</Text>
            <View style={styles.percentageTag}>
              <Text style={styles.percentageText}>▼ 11%</Text>
            </View>
          </View>
          <Text style={styles.usageLabel}>Ltrs/day</Text>
          <Text style={styles.usagePeriod}>This month</Text>
          <View style={[styles.progressBar, { width: "80%" }]} />

          <View style={styles.previousUsage}>
            <Text style={styles.usageValue}>251</Text>
            <Text style={styles.usageLabel}>Ltrs/day</Text>
            <Text style={styles.usagePeriod}>Previous month</Text>
            <View style={styles.progressBar} />
          </View>
        </View>

        {/* Goal Streak */}
        <View style={styles.goalStreak}>
          <Text style={styles.goalTitle}>Goal streak</Text>
          <Text style={styles.goalValue}>10 days in a row</Text>
          <View style={styles.streakBar}>
            {[...Array(30)].map((_, index) => (
              <View
                key={index}
                style={[styles.streakDot, index < 10 && styles.activeStreakDot]}
              />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  content: { padding: 20 },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  logo: { width: 50, height: 50 },
  periodSelector: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    padding: 5,
    marginBottom: 20,
  },
  periodButton: {
    padding: 10,
    borderRadius: 15,
    width: "30%",
    alignItems: "center",
  },
  selectedPeriod: { backgroundColor: "white" },
  periodText: { color: "black" },
  selectedPeriodText: { color: "#0077ff" },
  graphContainer: {
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    padding: 20,
    
    marginBottom: 20,
  },
  dateSelector: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  dateText: { fontSize: 18, fontWeight: "bold" },
  chart: { borderRadius: 16, marginTop: 10 , marginRight: 10},
  progressSection: { marginBottom: 20 },
  sectionTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  progressText: { marginBottom: 20 },
  usageRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  usageValue: { fontSize: 24, fontWeight: "bold" },
  percentageTag: {
    backgroundColor: "#0077ff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  percentageText: { color: "white" },
  usageLabel: { color: "gray", marginBottom: 5 },
  usagePeriod: { color: "gray", marginBottom: 10 },
  progressBar: { height: 10, backgroundColor: "#e0e0e0", borderRadius: 5 },
  previousUsage: { marginTop: 20 },
  goalStreak: { backgroundColor: "#2c3e50", borderRadius: 20, padding: 20 },
  goalTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  goalValue: { color: "white", fontSize: 24, fontWeight: "bold" },
  streakBar: { flexDirection: "row", marginTop: 10 },
  streakDot: {
    width: 7,
    height: 20,
    backgroundColor: "gray",
    marginRight: 2,
    borderRadius: 2,
  },
  activeStreakDot: { backgroundColor: "#0077ff" },
});

export default Nemo;
