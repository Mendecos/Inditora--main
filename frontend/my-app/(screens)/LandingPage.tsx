import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  
} from "react-native";
import Carrosel from "./componentes/carrossel/Carrossel";
import Sobre from "./componentes/sobre/Sobre";
import { useNavigation } from "@react-navigation/native";

function LandingPage() {

  const navigation = useNavigation();
  // Obtém a largura inicial da tela
  const initialScreenWidth = Dimensions.get("window").width;
  const [screenWidth, setScreenWidth] = useState(initialScreenWidth);
  // Listener para monitorar mudanças de largura
  useEffect(() => {
    const handleDimensionChange = ({ window }: { window: { width: number; height: number } }) => {
      setScreenWidth(window.width);
    };
    // Adiciona o listener de mudança de dimensões
    const subscription = Dimensions.addEventListener("change", handleDimensionChange);
    // Remove o listener ao desmontar o componente
    return () => subscription.remove();
  }, []);
  
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.header}>
        <View style={screenWidth > 759 ? styles.logotipo: styles.logotipoResp}>
          <Image
            source={require("./componentes/img/landingpage/logo.png")} // Caminho para a imagem local
            style={screenWidth > 759 ? styles.logo: styles.logoResp}
          />
          <Image
            source={require("./componentes/img/landingpage/logoescrito.png")} // Caminho para a imagem local
            style={screenWidth > 759 ? styles.logoEscrito: styles.logoEscritoResp}
          />
        </View>

        <View style={styles.botoesContainer}>
          <TouchableOpacity onPress={() => alert("Home clicado")}>
            <Text style={styles.botaoTexto}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert("Livros clicado")}>
            <Text style={styles.botaoTexto}>Livros</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert("Sobre nos clicado")}>
            <Text style={styles.botaoTexto}>Sobre Nos</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate("Login")}}>
            <Text style={styles.botaoTexto}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Sobre />
      <Carrosel />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1, // Permite que a barra de rolagem ocupe todo o espaço disponível
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "black",
  },
  logotipo: {
    display: "flex",
    flexDirection: "row",
  },
  logotipoResp:{
    display: "flex",
    flexDirection: "column",
    alignItems: 'center'
  },
  logoEscrito: {
    width: 200,
    height: 50,
  },
  logoEscritoResp: {
    width: 150,
    height: 50,
  },
  logo: {
    width: 90,
    height: 60,
  },
  logoResp: {
    width: 90,
    height: 60,
  },
  botoesContainer: {
    flexDirection: "row",
  },
  botaoTexto: {
    marginHorizontal: 15, // Espaçamento entre os textos (botões)
    color: "white",
  },
  botaoEntrar: {
    marginHorizontal: 15,
    color: "orange",
  },
  botaoCad: {
    backgroundColor: "purple",
    color: "white",
    padding: 8,
    borderRadius: 5,
    marginHorizontal: 15,
  },
});

export default LandingPage;
