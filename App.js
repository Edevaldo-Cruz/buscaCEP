import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Busca de Endereço</Text>
      <View style={styles.containerSearch}>
        <TextInput
          style={styles.textInput}
          placeholder="Digite o CEP"
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.search}>
          <AntDesign name="search1" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.result}>
        <Text style={styles.textResult}>CEP pesquisado: </Text>
        <Text style={styles.textResult}>Endereço: </Text>
        <Text style={styles.textResult}>Bairro: </Text>
        <Text style={styles.textResult}>Cidade: </Text>
        <Text style={styles.textResult}>Estado: </Text>
        <Text style={styles.textResult}>DDD: </Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginVertical: 80,
    marginHorizontal: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 15,
  },
  containerSearch: {
    flexDirection: "row",
    backgroundColor: "#CCC",
    width: 350,
    height: 50,
    borderRadius: 15,
    marginBottom: 15,
  },
  textInput: {
    marginLeft: 60,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    flexGrow: 1,
  },
  search: {
    width: 60,
    backgroundColor: "red",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "flex-end",
    flexGrow: 0,
    paddingRight: 16,
  },
  result: {
    width: 350,
    height: 250,
    backgroundColor: "#CCC",
    borderRadius: 15,
    padding: 30,
  },
  textResult: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "600",
  },
});
