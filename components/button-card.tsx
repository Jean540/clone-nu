import { Pressable, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome6";
import { ReactNode } from "react";

type Props = {
  title: string;
  onPress: () => void;
  children: ReactNode;
};

export const ButtonCard = ({ children, title, onPress }: Props) => {
  return (
    <Pressable className="px-5 py-6" onPress={onPress}>
      <View className="mb-5 flex-row justify-between items-center">
        <Text className="text-2xl font-semibold">{title}</Text>
        <View className="mr-3">
          <FontAwesome name="chevron-right" size={14} color="gray" />
        </View>
      </View>
      {children}
    </Pressable>
  );
};
