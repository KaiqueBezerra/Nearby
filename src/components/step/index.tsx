import { Text, View } from "react-native";
import { IconProps } from "@tabler/icons-react-native";

import { colors } from "@/styles/colors";
import { s } from "./style";
import { ComponentType } from "react";

type props = {
  title: string;
  description: string;
  icon: ComponentType<IconProps>;
};

export function Step({ title, description, icon: Icon }: props) {
  return (
    <View style={s.container}>
      {Icon && <Icon size={32} color={colors.red.base} />}
      <View style={s.details}>
        <Text style={s.title}>{title}</Text>
        <Text style={s.description}>{description}</Text>
      </View>
    </View>
  );
}
