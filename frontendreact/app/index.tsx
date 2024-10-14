import { UseDataPost } from "@/hooks/SendDataToBackEnd";
import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";


export default function Index() {
  const [data, setData] = useState({
    user: "",
    password: "",
  });
  const handleForms = (name: string, value: string) => {
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0} // Ajuste conforme necessário
    >
      <View style={{ width: 240, backgroundColor: "white", height: 750 }}>
        <View>
          <View>
            <Image
              style={{ width: 240, height: 240, borderColor: "red" }}
              source={{
                uri: "https://yt3.googleusercontent.com/gUhObrCmgvxvLzM6FTE2Us_MTjUEJm4skolIe4CUUUJNla7odTScm5UBs5YDFW5zo1QzGH0n1g=s900-c-k-c0x00ffffff-no-rj",
              }}
            />
            <Text>Username</Text>
            <TextInput
              style={{ borderColor: "black", borderWidth: 1, width: 240 }}
              placeholder="usuario"
              value={data.user}
              onChangeText={(value) => handleForms("user", value)}
            />
            <Text>Senha</Text>
            <TextInput
              style={{ borderColor: "black", borderWidth: 1, width: 240 }}
              placeholder="Senha"
              secureTextEntry
              value={data.password}
              onChangeText={(value) => handleForms("password", value)}
            />
            <Button
              title="Fazer login"
              onPress={() => alert(JSON.stringify(data)) }
            />
          </View>
        </View>
        <Text style={{ textAlign: "center", paddingTop: 20 }}>
          Aplicativo em desenvolvimento@
        </Text>
      
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 360,
    backgroundColor: "white",
    margin: "auto",
    display: "flex",

    alignItems: "center",
  },
  inner: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
