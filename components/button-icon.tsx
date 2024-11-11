import { Pressable } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome6";

export const ButtonIcon = ({
  icon,
  onPress,
}: {
  icon: string;
  onPress: () => void;
}) => {
  return (
    <Pressable
      className="size-14  justify-center items-center rounded-full"
      onPress={onPress}
    >
      <FontAwesome name={icon} size={18} color="white" />
    </Pressable>
  );
};
