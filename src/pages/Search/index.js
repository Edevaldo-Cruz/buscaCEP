import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles";
import Select from "../../component/Select";
import api from "../../service/api";

export default function Search() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Busca Avançada de Endereço</Text>
        <Select />
        <Text style={styles.subTitle}>
          Digite nome da cidade que deseja pesquisar:
        </Text>
        <TextInput style={styles.containerSearch} placeholder={"Cidade"} />
        <Text style={styles.subTitle}>
          Digite o enderenço completo ou parte dele:
        </Text>
        <TextInput
          style={styles.containerSearch}
          placeholder={"Avenida, Rua, Alameda, Bairro etc..."}
        />
        <View style={styles.containerBtn}>
          <TouchableOpacity style={styles.search}>
            <View style={styles.searchRow}>
              <AntDesign name="search1" size={24} color="white" />
              <Text style={styles.textBtn}>Pesquisar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
