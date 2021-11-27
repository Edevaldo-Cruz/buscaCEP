import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Keyboard,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles";
import api from "../../service/api";

export default function Search() {
  const [estadoSelecionado, setEstadoSelecionado] = useState([]);

  const [address, setAddress] = useState([]);
  const [searchCity, setSearchCity] = useState("");
  const [searchAddress, setSearchAddress] = useState("");

  const getAddress = async () => {
    const { data } = await api.get(
      `${estadoSelecionado}/${searchCity}/${searchAddress}/json/`
    );

    setAddress(data);
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Busca Avançada de Endereço</Text>
        <View style={styles.containerPicker}>
          <Picker
            selectedValue={estadoSelecionado}
            onValueChange={(itemValue, itemIndex) =>
              setEstadoSelecionado(itemValue)
            }
          >
            <Picker.Item label="Acre" value="AC" />
            <Picker.Item label="Alagoas" value="AL" />
            <Picker.Item label="Amapá" value="AP" />
            <Picker.Item label="Amazonas" value="AM" />
            <Picker.Item label="Bahia" value="BA" />
            <Picker.Item label="Ceará" value="CE" />
            <Picker.Item label="Distrito Federal" value="DF" />
            <Picker.Item label="Espírito Santo" value="ES" />
            <Picker.Item label="Goiás" value="GO" />
            <Picker.Item label="Maranhão" value="MA" />
            <Picker.Item label="Mato Grosso" value="MT" />
            <Picker.Item label="Mato Grosso do Sul" value="MS" />
            <Picker.Item label="Minas Gerais" value="MG" />
            <Picker.Item label="Pará" value="PA" />
            <Picker.Item label="Paraíba" value="PB" />
            <Picker.Item label="Paraná" value="PR" />
            <Picker.Item label="Pernambuco" value="PE" />
            <Picker.Item label="Piauí" value="PI" />
            <Picker.Item label="Rio de Janeiro" value="RJ" />
            <Picker.Item label="Rio Grande do Norte" value="RN" />
            <Picker.Item label="Rio Grande do Sul" value="RS" />
            <Picker.Item label="Rondônia" value="RO" />
            <Picker.Item label="Roraima" value="RR" />
            <Picker.Item label="Santa Catarina" value="SC" />
            <Picker.Item label="São Paulo" value="SP" />
            <Picker.Item label="Sergipe" value="SE" />
            <Picker.Item label="Tocantins" value="TO" />
          </Picker>
        </View>
        <Text style={styles.subTitle}>
          Digite nome da cidade que deseja pesquisar:
        </Text>
        <TextInput
          value={searchCity}
          onChangeText={(text) => setSearchCity(text)}
          style={styles.containerSearch}
          placeholder={"Cidade"}
        />
        <Text style={styles.subTitle}>
          Digite o enderenço completo ou parte dele:
        </Text>
        <TextInput
          value={searchAddress}
          onChangeText={(text) => setSearchAddress(text)}
          style={styles.containerSearch}
          placeholder={"Avenida, Rua, Alameda, Bairro etc..."}
        />
        <View style={styles.containerBtn}>
          <TouchableOpacity
            style={styles.search}
            onPress={getAddress}
            Keyboard="disable"
          >
            <View style={styles.searchRow}>
              <AntDesign name="search1" size={24} color="white" />
              <Text style={styles.textBtn}>Pesquisar</Text>
            </View>
          </TouchableOpacity>
        </View>
        <FlatList
          style={styles.flatlist}
          data={address}
          keyExtractor={(address) => address.cep}
          renderItem={({ item: address }) => (
            <View style={styles.result}>
              <Text style={styles.textResult}>
                Endereço: {address.logradouro}
              </Text>

              <Text style={styles.textResult}>Bairro: {address.bairro} </Text>
              <Text style={styles.textResult}>CEP: {address.cep}</Text>
              <Text style={styles.textResult}>
                Complemento: {address.complemento}
              </Text>

              <View style={styles.containerRowResult}>
                <Text style={styles.textResult}>Estado: {address.uf} </Text>
                <Text style={styles.textResult}>DDD: {address.ddd} </Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}
