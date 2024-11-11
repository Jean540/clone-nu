import { ScrollView, Text, View } from "react-native";
import { Header } from "../components/header";
import { ButtonCard } from "../components/button-card";
import { ButtonAction } from "../components/button-action";
import { ButtonActionLayout } from "../data/button-action-layout";
import { ButtonGeneral } from "../components/button-general";
import FontAwesome from "@expo/vector-icons/FontAwesome6";

const HomeScreen = () => {
  return (
    <ScrollView className="h-screen bg-white">
      <Header />
      <ButtonCard title="Conta" onPress={() => {}}>
        <Text className="text-2xl font-semibold">R$ 1.356.98</Text>
      </ButtonCard>
      <ScrollView
        horizontal
        className="pl-5"
        showsHorizontalScrollIndicator={false}
      >
        {ButtonActionLayout.map((button, key) => (
          <ButtonAction
            icon={button.icon}
            label={button.label}
            onPress={button.onPress}
            badge={button.badge ?? undefined}
            key={key}
          />
        ))}
      </ScrollView>

      <View className="px-5 py-6">
        <ButtonGeneral onPress={() => {}}>
          <View className="flex-row items-center">
            <FontAwesome name="credit-card" size={28} color="black" />
            <Text className="ml-4 text-lg font-semibold">Meus cartões</Text>
          </View>
        </ButtonGeneral>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="px-5"
      >
        <View className="w-72 mr-4">
          <ButtonGeneral onPress={() => {}}>
            <Text className="text-lg">
              Você tem <Text className="font-semibold">R$ 12.300,00</Text>{" "}
              disponíveis para empréstimo.
            </Text>
          </ButtonGeneral>
        </View>
        <View className="w-72 mr-4">
          <ButtonGeneral onPress={() => {}}>
            <Text className="font-semibold text-nubank text-lg">
              Guarde seu dinheiro aqui
            </Text>
            <Text className=" text-lg">Toque para saber mais.</Text>
          </ButtonGeneral>
        </View>
      </ScrollView>
      <View className="h-[2px] bg-gray-100 mt-8"></View>
      <ButtonCard title="Catão de crédito" onPress={() => {}}>
        <Text className="text-gray-500 text-lg ">Fatura atual</Text>
        <Text className="text-2xl font-semibold">R$ 1.097.60</Text>
        <Text className="text-gray-500 text-lg">
          Limite disponivel: R$ 5.000,00
        </Text>
      </ButtonCard>
    </ScrollView>
  );
};

export default HomeScreen;
