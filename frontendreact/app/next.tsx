import axios from "axios";
import { useEffect, useState } from "react";
import { Button, FlatList, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { format } from "date-fns";
import ToastManager, { Toast } from "toastify-react-native";
export default function Next() {
  const [data, setData] = useState();
  const [store, setStore] = useState<string | null>(null);

  useEffect(()=>  {
    const getdata = async ()=>{
    try {
      const jsonValue = await AsyncStorage.getItem("login");
      setStore(jsonValue)
    } catch (e) {

    }
  }
  getdata();
  },["login"]);

  const date = new Date();
  axios.get(`http://10.15.96.27:8021/api/register/name/${store}`).then(response=>{
    if(response.status == 200){
      setData(response.data)
    }
  })
  const formData = {
    name: store,
    registerHour: date,
    local: "teste",
  };
  const url = "http://10.15.96.27:8021/api/register/user";

  const handleSubmit = () => {
      
    axios.post(url, formData).then((response) => {
      if (response.status == 200) {
        Toast.success("Ponto registrado")
       

      } else {
        alert("Error");
      }
    });
  };

  return (
    <View>
      <Button title="Registrar" onPress={handleSubmit} />
    <ToastManager/>
      <Text
        style={{
          textAlign: "center",
          color: "#2160bd",
          fontSize: 20,
          paddingTop: 50,
          fontWeight: 800,
        }}
      >
        List registros
      </Text>
      <Text
        style={{
          textAlign: "center",
          color: "#fe900e",
          fontSize: 15,
          fontWeight: 800,
        }}
      >
        Lista
      </Text>

      <FlatList
        data={data}
        inverted={true}
        renderItem={({ item }) => (
          <View
            style={{
              marginTop: 20,
              borderWidth: 1,
              width: 360,
              borderBlockColor: "orange",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Usuario: {item.name}</Text>
            <Text>Data: {format(item.registerHour, "dd-MM-yyyy")}</Text>
            <Text>Horario: {format(item.registerHour,"HH:mm:ss" )}</Text>
            <Text>Local: {item.local}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.timestamp}
      />
    </View>
  );
}
