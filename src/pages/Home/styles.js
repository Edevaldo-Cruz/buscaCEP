import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  content: {
    flex: 1,
    marginTop: 80,
    marginHorizontal: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 15,
  },
  containerSearch: {
    flexDirection: "row",
    borderWidth: 5,
    borderColor: "#F0E9D2",
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
    backgroundColor: "#678983",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "flex-end",
    flexGrow: 0,
    paddingRight: 16,
  },
  result: {
    width: 350,
    height: 200,
    borderWidth: 5,
    borderColor: "#F0E9D2",
    borderRadius: 15,
    padding: 30,
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
  containerBtnNav: {
    alignItems: "flex-end",
    marginTop: 15,
  },
  nav: {
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 50,
    backgroundColor: "#678983",
    borderRadius: 15,
  },
  navRow: {
    flexDirection: "row",
  },
  textBtnNav: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
    paddingRight: 8,
  },
});
