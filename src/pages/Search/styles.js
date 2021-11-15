import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  content: {
    marginVertical: 80,
    marginHorizontal: 30,
  },
  containerPicker: {
    justifyContent: "center",
    borderWidth: 5,
    borderRadius: 15,
    width: 350,
    height: 50,
    borderColor: "#F0E9D2",
    backgroundColor: "#F0E9D2",
    paddingLeft: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 15,
  },
  subTitle: {
    fontWeight: "600",
    fontSize: 16,
    marginTop: 15,
    marginBottom: 15,
  },
  containerSearch: {
    flexDirection: "row",
    borderWidth: 5,
    borderColor: "#F0E9D2",
    width: 350,
    height: 50,
    borderRadius: 15,
    paddingLeft: 30,
  },
  textInput: {
    marginLeft: 60,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    flexGrow: 1,
  },
  containerBtn: {
    alignItems: "flex-end",
    marginTop: 15,
  },
  search: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 50,
    backgroundColor: "#678983",
    borderRadius: 15,
  },
  searchRow: {
    flexDirection: "row",
  },
  textBtn: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
    paddingLeft: 8,
  },
  result: {
    width: 350,
    height: 200,
    borderWidth: 5,
    borderColor: "#F0E9D2",
    borderRadius: 15,
    padding: 30,
    marginTop: 15,
    marginBottom: 15,
  },
  textResult: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "600",
  },
  containerRowResult: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
