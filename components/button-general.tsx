import { ReactNode } from "react";
import { Pressable } from "react-native";

type Props = {
  children: ReactNode;
  onPress: () => void;
};

export const ButtonGeneral = ({ children, onPress }: Props) => {
  return (
    <Pressable className="bg-gray-200 rounded-xl p-5" onPress={onPress}>
      {children}
    </Pressable>
  );
};
