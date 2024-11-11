import { Pressable } from "react-native";
import VectorIcons from "@expo/vector-icons/AntDesign";

export const ProfileIcon = () => {
  return (
    <Pressable
      onPress={() => {}}
      className="size-14 bg-white/40 justify-center items-center rounded-full"
    >
      <VectorIcons name="user" size={18} color={"white"} />
    </Pressable>
  );
};
