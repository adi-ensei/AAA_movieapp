import { icons } from "@/constants/icons";
import React from "react";
import { Image, Text, View } from "react-native";

const Profile = () => {
  return (
    <View className="flex-1 bg-primary px-6 py-10">
      <View className="items-center mb-8">
        <View className="bg-white/10 rounded-full p-6 shadow-lg">
          <Image source={icons.person} className="w-24 h-24" tintColor="#fff" />
        </View>
        <Text className="text-white text-2xl font-bold mt-4">Adithyan A</Text>
        <Text className="text-gray-300 text-base">React Native Developer</Text>
      </View>

      <View className="bg-white/10 rounded-xl p-5 mb-6 shadow-md">
        <Text className="text-white text-lg font-semibold mb-3">
          Contact Info
        </Text>
        <Text className="text-gray-200 text-base mb-1">📧 abc@gmail.com</Text>
        <Text className="text-gray-200 text-base mb-1">📱 +91 9876543xxx</Text>
        <Text className="text-gray-200 text-base">📍 Bhopal, India</Text>
      </View>

      <View className="bg-white/10 rounded-xl p-5 mb-6 shadow-md">
        <Text className="text-white text-lg font-semibold mb-3">About</Text>
        <Text className="text-gray-200 text-base leading-relaxed">
          Passionate developer with experience in building cross-platform mobile
          apps using React Native. Love crafting elegant UI and solving
          real-world problems through clean code.
        </Text>
      </View>

      <View className="bg-white/10 rounded-xl p-5 mb-6 shadow-md">
        <Text className="text-white text-lg font-semibold mb-3">
          Preferences
        </Text>
        <Text className="text-gray-200 text-base mb-1">
          🌙 Dark Mode: Enabled
        </Text>
        <Text className="text-gray-200 text-base mb-1">
          🌐 Language: English
        </Text>
        <Text className="text-gray-200 text-base">🔔 Notifications: On</Text>
      </View>
    </View>
  );
};

export default Profile;
