import axios from "axios";
import { useEffect, useState } from "react";
import { Button, FlatList, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { format } from "date-fns";
import ToastManager, { Toast } from "toastify-react-native";
export default function Next() {
  const [data, setData] = useState();
  const [store, setStore] = useState<string | null>(null);
  const max_request = 4;
  const [count, setCount] = useState(0);
  useEffect(() => {
    const getdata = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("login");
        setStore(jsonValue);
      } catch (e) {}
    };
    getdata();
  }, ["login"]);

  const date = new Date();
  axios
    .get(`http://192.168.100.5:8021/api/register/name/${store}`)
    .then((response) => {
      if (response.status == 200) {
        setData(response.data);
      }
    });
  const formData = {
    name: store,
    registerHour: date,
    local: "teste",
  };
  const url = "http://192.168.100.5:8021/api/register/user";

  const handleSubmit = () => {

    axios.post(url, formData).then((response) => {
      try {
        if (response.status == 200) {
          setCount(count + 1);
          Toast.success("Ponto registrado");
        } else {
          alert("Error");
        }
      } catch (e) {}
    });
  };

  return (
    <View>
      <Button title="Registrar" onPress={handleSubmit} disabled={count == max_request} />
      <ToastManager />
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

      <FlatList
        data={data}
        inverted={true}
        renderItem={({ item }) => (
          <View
            style={{
              marginTop: 20,

              width: 300,
              padding: 10,
              margin: "auto",
              borderRadius: 20,
              display: "flex",
              backgroundColor: "#08C2FF",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: 700 }}>
              Usuario: {item.name}
            </Text>
            <Text style={{ color: "white", fontWeight: 700 }}>
              Data: {format(item.registerHour, "dd-MM-yyyy")}
            </Text>
            <Text style={{ color: "white", fontWeight: 700 }}>
              Horario: {format(item.registerHour, "HH:mm:ss")}
            </Text>
            <Text style={{ color: "white", fontWeight: 700 }}>
              Local: {item.local}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id.timestamp}
      />
    </View>
  );
}
