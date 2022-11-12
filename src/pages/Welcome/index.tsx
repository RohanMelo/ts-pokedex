import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useAppSelector } from "../../store/hooks";

import Constants  from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export default function Welcome() {
  const { message } = useAppSelector((state) => state.message);
  return (
    <View className="flex-1 bg-white " style={styles.container}>
      <View className="h-[70%] text-center">

        <Text className="text-xl text-center">{message}</Text>
      </View>
      <View className="h-[30%] bg-yellow-400 rounded-md"></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: statusBarHeight
  }
});
