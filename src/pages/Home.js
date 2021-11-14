import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

import api from "../service/api";
import { styles } from "./styles";

import { AntDesign } from "@expo/vector-icons";

export default function Home() {
  const [infoCep, setInfoCep] = useState({});
  const [searchCep, setSearchCep] = useState("");

  const getCep = async () => {
    const { data } = await api.get(`${searchCep}/json/`);
    setInfoCep(data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Busca de Endereço</Text>
        <View style={styles.containerSearch}>
          <TextInput
            value={searchCep}
            onChangeText={(text) => setSearchCep(text)}
            style={styles.textInput}
            placeholder="Digite o CEP"
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.search} onPress={getCep}>
            <AntDesign name="search1" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.result}>
          <Text style={styles.textResult}>Endereço: {infoCep.logradouro} </Text>

          <Text style={styles.textResult}>Bairro: {infoCep.bairro} </Text>
          <Text style={styles.textResult}>Cidade: {infoCep.localidade} </Text>

          <View style={styles.containerRowResult}>
            <Text style={styles.textResult}>Estado: {infoCep.uf} </Text>
            <Text style={styles.textResult}>DDD: {infoCep.ddd} </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
