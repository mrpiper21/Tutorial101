import { View, Text, TextInput, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import { Avatar } from "react-native-elements";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const HomeScreen = () => {
  const navigation = useNavigation() as any;

  const func = () => {
    navigation.navigate("Onboard");
  };
  return (
    <View className="flex-1 bg-white">
      <ScrollView
        // vertical={true}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
        className="space-y-6 "
      >
        {/** Avatar and notification session */}
        <View className="flex-row justify-between item-center bg-amber-400 py-5 pt-10 px-2 ">
          <Avatar
            rounded
            icon={{ name: "user", type: "font-awesome" }}
            onPress={() => console.log("Works!")}
            size={50}
            activeOpacity={0.7}
            containerStyle={{ backgroundColor: "black" }}
          />
          <MaterialCommunityIcons name="bell-badge" size={30} color="black" />
        </View>

        {/**title and message */}
        <View className="mx-4">
          <Text className="text-4xl">Make your own food,</Text>
          <Text className="text-4xl text-yellow-300">stay at home</Text>
        </View>
        {/**Search Bar */}
        <View
          className="bg-slate-300 rounded-full mx-2 flex-row justify-between items-center"
          style={{ height: hp(7) }}
        >
          <TextInput
            placeholder="Search"
            style={{
              width: wp(85),
              borderTopLeftRadius: wp(7),
              borderBottomLeftRadius: wp(7),
              height: hp(7),
            }}
          ></TextInput>
          <View className="rounded-full p-2 bg-slate-100 items-center">
            <FontAwesome
              name="search"
              size={40}
              color="black"
              className="rounded-full"
            />
          </View>
        </View>
        {/**Categories List */}
        <ScrollView horizontal={true} className="flex-row">
          <View
            className="rounded-full item-center bg-amber-300 px-3 justify-center mx-3"
            style={{ height: wp(20) }}
          >
            <LottieView
              source={require("../../assets/loaders/catIcon1.json")}
              autoPlay
              loop
              style={{ width: wp(15), height: hp(15) }}
            />
          </View>
          <View
            className="rounded-full item-center bg-amber-300 px-3 justify-center mx-3"
            style={{ height: wp(20) }}
          >
            <LottieView
              source={require("../../assets/loaders/catIcon1.json")}
              autoPlay
              loop
              style={{ width: wp(15), height: hp(15) }}
            />
          </View>
          <View
            className="rounded-full item-center bg-amber-300 px-3 justify-center mx-3"
            style={{ height: wp(20) }}
          >
            <LottieView
              source={require("../../assets/loaders/catIcon1.json")}
              autoPlay
              loop
              style={{ width: wp(15), height: hp(15) }}
            />
          </View>
          <View
            className="rounded-full item-center bg-amber-300 px-3 justify-center mx-3"
            style={{ height: wp(20) }}
          >
            <LottieView
              source={require("../../assets/loaders/catIcon1.json")}
              autoPlay
              loop
              style={{ width: wp(15), height: hp(15) }}
            />
          </View>
          <View
            className="rounded-full item-center bg-amber-300 px-3 justify-center mx-3"
            style={{ height: wp(20) }}
          >
            <LottieView
              source={require("../../assets/loaders/catIcon1.json")}
              autoPlay
              loop
              style={{ width: wp(15), height: hp(15) }}
            />
          </View>
          <View
            className="rounded-full item-center bg-amber-300 px-3 justify-center mx-3"
            style={{ height: wp(20) }}
          >
            <LottieView
              source={require("../../assets/loaders/catIcon1.json")}
              autoPlay
              loop
              style={{ width: wp(15), height: hp(15) }}
            />
          </View>
          
        </ScrollView>
        {/**Product List */}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
