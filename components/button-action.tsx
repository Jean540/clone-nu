import { Pressable, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome6";

type Props = {
  icon: string;
  label: string;
  onPress: () => void;
  badge?: string;
};

export const ButtonAction = ({ icon, label, onPress, badge }: Props) => {
  return (
    <Pressable onPress={onPress} className="w-24 mr-2">
      <View className="bg-gray-200 size-24 rounded-full justify-center items-center relative">
        <FontAwesome name={icon} size={24} color="#000000c9" />
        {badge && (
          <View className="bg-nubank rounded-md px-1 absolute bottom-0">
            <Text className="text-white text-sm">{badge}</Text>
          </View>
        )}
      </View>
      <Text className="mt-4 text-md text-center font-semibold">{label}</Text>
    </Pressable>
  );
};
