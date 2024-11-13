import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";

export default function LoginPage({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [wrongInput, setWrongInput] = useState(false);

  // Obtém a largura inicial da tela
  const initialScreenWidth = Dimensions.get("window").width;
  const [screenWidth, setScreenWidth] = useState(initialScreenWidth);

  // Listener para monitorar mudanças de largura
  useEffect(() => {
    const handleDimensionChange = ({
      window,
    }: {
      window: { width: number; height: number };
    }) => {
      setScreenWidth(window.width);
    };

    // Adiciona o listener de mudança de dimensões
    const subscription = Dimensions.addEventListener(
      "change",
      handleDimensionChange
    );

    // Remove o listener ao desmontar o componente
    return () => subscription.remove();
  }, []);

  const handleLogin = () => {
    const validEmail = "rodgab.com";
    const validPassword = "123";
  
    if (password !== validPassword) {
      alert("A senha incorreta."); // Set specific message for password mismatch
    } else if (password !== passwordCheck) {
      alert("As senhas não coincidem. Tente novamente."); // Set message for password mismatch
    } else if (email === validEmail) {
      navigation.navigate("Landing", { email }); // Navigate if email and both passwords match
    } else {
      alert("E-mail incorreto."); // Set message for invalid email (optional)
    }
  };

  return (
    //<ScrollView>
    <View>
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

      </View>
      <View
        style={
          screenWidth > 759 ? styles.containerNormal : styles.containerMenor
        }
      >
        <View style={styles.loginBox}>
          <Text style={styles.titleLogin}>Crie sua conta</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome de usuario"
            keyboardType="name-phone-pad"
            autoCapitalize="none"
          />
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
          <TextInput
            style={styles.input}
            placeholder="Confirme sua senha"
            value={passwordCheck}
            onChangeText={setPasswordCheck}
            secureTextEntry
            onSubmitEditing={handleLogin}
          />
          {wrongInput && (
            <Text style={styles.alertText}>Preencha todos os campos</Text>
          )}
          <Button title="Cadastrar" onPress={handleLogin} color="orange" />
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
    justifyContent: "center",
    padding: 120,
    backgroundColor: "rgba(255, 228, 48, 0.5)",
  },
  containerMenor: {
    flex: 1,
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "center",
    padding: 120,
    backgroundColor: "rgba(255, 228, 48, 0.5)",
    marginBottom: 30,
  },
  loginBox: {
    marginLeft: 40,
    backgroundColor: "purple",
    borderRadius: 12,
    padding: 20, // Adiciona espaço interno
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

  logos: {
    width: 30, // Defina a largura desejada
    height: 30, // Defina a altura desejada
    resizeMode: "contain", // Esta propriedade garante que a imagem mantenha a proporção original
    marginHorizontal: 10, // Adiciona espaçamento entre as imagens (opcional)
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "black",
  },
  logotipo: {
    display: "flex",
    flexDirection: "row",
  },
  logotipoResp:{
    display: "flex",
    flexDirection: "row",
    alignItems: 'center'
  },
  logoEscrito: {
    width: 100,
    height: 50,
  },
  logoEscritoResp: {
    width: 100,
    height: 50,
  },
  logo: {
    width: 60,
    height: 40,
  },
  logoResp: {
    width: 60,
    height: 30,
  },
});
