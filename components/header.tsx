import { SafeAreaView, Text, View } from "react-native";
import { ProfileIcon } from "./profileIcon";
import { ButtonIcon } from "./button-icon";

export const Header = () => {
  return (
    <SafeAreaView className="bg-nubank text-white">
      <View className="flex-row justify-between px-5">
        <ProfileIcon />
        <View className="flex-row">
          <ButtonIcon icon="eye" onPress={() => {}} />
          <ButtonIcon icon="circle-question" onPress={() => {}} />
          <ButtonIcon icon="envelope" onPress={() => {}} />
        </View>
      </View>
      <View className="px-5 py-7">
        <Text className="text-white text-xl font-semibold">Olá, Fulano</Text>
      </View>
    </SafeAreaView>
  );
};
