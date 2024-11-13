import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet,Dimensions } from "react-native";

export default function Sobre() {
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
    <View>
      <View style={screenWidth > 759 ? styles.sobre: styles.sobreResp}>
        <View>
          <Text style={screenWidth > 759 ? styles.texto1: styles.texto1Resp}>Encontre o que procura na Indie!</Text>
          <Text style={screenWidth > 759 ? styles.texto2: styles.texto2Resp}>
            Ainda não sabe qual será sua próxima leitura? Temos uma coleção
            cheia de surpresas para você!
          </Text>
        </View>
        <View>
          <Image
            source={require("../img/landingpage/logo.png")} // Caminho para a imagem local
            style={styles.logo}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 220,
    height: 190,
  },
  sobre: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 80,
    backgroundColor: "rgba(255, 228, 48, 0.5)", // Fundo 50% de opacidade (RGBA)
  },
  sobreResp: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: 80,
    backgroundColor: "rgba(255, 228, 48, 0.5)", // Fundo 50% de opacidade (RGBA)
  },
  texto1: {
    fontWeight: "bold",
    fontSize: 50,
  },
  texto1Resp: {
    fontWeight: "bold",
    fontSize: 25,
  },
  texto2: {
    fontSize: 21,
  },
  texto2Resp: {
    fontSize: 15,
  },
});
