import { StatusBar } from "expo-status-bar";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import Routes from "./src/router";
import Search from "./src/pages/Search";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Search />
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
