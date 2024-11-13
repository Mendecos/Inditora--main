import React, { useState, useEffect } from "react";
import { View, TextInput, Button, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";

export default function LoginPage({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [wrongInput, setWrongInput] = useState(false);
  
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
  

  const handleLogin = () => {
    const validEmail = "rodgab.com";
    const validPassword = "123";

    if (email === validEmail && password === validPassword) {
      navigation.navigate("Landing", { email });
    } else {
      setWrongInput(true);
    }
  };

  return (
    
  //<ScrollView>

    <View style={screenWidth > 759 ? styles.containerNormal : styles.containerMenor}>
      <View style={screenWidth > 759 ? styles.curiosidade : styles.curiosidadeResponsiva}>
        <Text style={styles.textBox}>Curiosidade sobre leitura</Text>
        <Text style={styles.textBox2}>
          Ler em silêncio era considerado uma heresia Uma vez que a literacia
          foi um privilégio reservado a uma elite durante milhares de anos, a
          leitura começou por ser uma atividade oral e coletiva. Desde a Roma
          Antiga até ao século XIX, as sessões de leituras públicas eram uma
          forma de entretenimento tão popular como os malabaristas ou os bobos
          na corte. Para além disso, esta era uma forma de continuar a preservar
          a transmissão de obras banidas pelas autoridades, das quais foram
          exemplo as obras de Jean-Jacques Rousseau.
        </Text>
        <Text style={styles.textBox2}>Fonte: amoreiras.com</Text>
      </View>
      <View style={styles.loginBox}>
        <Text style={styles.titleLogin}>Entre na sua conta</Text>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          onSubmitEditing={handleLogin}
        />
        {wrongInput && (
          <Text style={styles.alertText}>E-mail ou senha incorretos!</Text>
        )}
        <Button title="Acessar" onPress={handleLogin} color="orange" />
        <View style={styles.outraFormaLogin}>
        <Text>Não tem conta?</Text>
        <TouchableOpacity onPress={() => {navigation.navigate('Register')}}>
            <Text style={styles.botaoTexto}>Cadastre-se</Text>
          </TouchableOpacity>
          <Text>Ou entre com</Text>
          <View style={styles.Iconlogos}>
            <Image
              style={styles.logos}
              source={require("./componentes/img/login/googleLogo.png")}
            />
            <Image
              style={styles.logos}
              source={require("./componentes/img/login/instaLogo.png")}
            />
            <Image
              style={styles.logos}
              source={require("./componentes/img/login/faceLogo.png")}
            />
          </View>
        </View>
      </View>
    </View>
//</ScrollView>
    
  );
}

const styles = StyleSheet.create({
  containerNormal: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 120,
    backgroundColor: "rgba(255, 228, 48, 0.5)",
  },
  containerMenor:{
    flex: 1,
    display: "flex",
    flexDirection: 'column-reverse',
    alignItems: 'center',
    padding: 120,
    backgroundColor: "rgba(255, 228, 48, 0.5)",
    marginBottom: 30
  },
  loginBox: {
    marginLeft: 40,
    backgroundColor: "purple",
    borderRadius: 12,
    padding: 20, // Adiciona espaço interno
  },
  textBox: {
    padding: 20, // Adiciona espaço interno
    textAlign: "center", // Centraliza o texto
    justifyContent: "center", // Centraliza verticalmente
    fontSize: 30,
    fontWeight: "bold",
  },
  textBox2: {
    fontSize: 20,
    textAlign: "left", // Garante o alinhamento à esquerda
    maxWidth: 500, // Define uma largura máxima para o texto quebrar
    lineHeight: 24, // Aumenta a altura da linha para facilitar a leitura
  },
  titleLogin: {
    fontSize: 34,
    marginBottom: 16,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 50,
    textAlign: "left",
    backgroundColor: "white",
  },
  alertText: {
    color: "red",
    marginHorizontal: "auto",
    marginBottom: 12,
  },

  outraFormaLogin: {
    display: "flex",
    alignItems: "center",
    marginTop: 60,
  },
  logos: {
    width: 30, // Defina a largura desejada
    height: 30, // Defina a altura desejada
    resizeMode: "contain", // Esta propriedade garante que a imagem mantenha a proporção original
    marginHorizontal: 10, // Adiciona espaçamento entre as imagens (opcional)
  },
  Iconlogos: {
    display: "flex",
    flexDirection: "row",
    marginTop: 100,
  },
  curiosidade: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 12,
  },
  curiosidadeResponsiva: {
    display: "none",
    
  },
  botaoTexto: {
    padding: 15, // Espaçamento entre os textos (botões)
    color: "white",
    backgroundColor: 'orange',
    borderRadius: 5
  },
});
