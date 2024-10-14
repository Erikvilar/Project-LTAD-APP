
import React, { useState } from "react";
import axios from "axios"
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
   login: "",
    password: "",
  });
  const handleForms = ( name: string, value: string) => {
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = ()=>{
    const url = "http://10.15.96.27:8021/api/users"
    const formData ={
      login:data.login,
      password:data.password
    }
    axios.post(url, formData).then(response =>{
      alert('sucess')
      console.log(response)
    })
    .catch(error =>{
        alert("(X) Error"+error)
        console.log(error)
    })
  }
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
             <Text style={{color:"#3a72bc", fontSize:20, textAlign:"center", fontWeight:800, paddingBottom:30}}>Sistema de ponto</Text>
            <Text>Username</Text>
            <TextInput
              style={{ borderColor: "black", borderWidth: 1, width: 240 }}
              placeholder="usuario"
              value={data.login}
              onChangeText={(value) => handleForms("login", value)}
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
              onPress={handleSubmit}
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
