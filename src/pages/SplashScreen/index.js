import React, { useEffect } from "react";
import { Dimensions, SafeAreaView } from "react-native";
import LottieView from "lottie-react-native";

import search from "../../assets/search.json";
import { styles } from "./styles";
import { useNavigation, CommonActions } from "@react-navigation/core";

const size = Dimensions.get("window").width * 0.5;

export default function SplashScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "Home" }],
        })
      );
    }, 6000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <LottieView
        style={{ width: size, height: size }}
        resizeMode="contain"
        source={search}
        autoPlay
        loop
      />
    </SafeAreaView>
  );
}
