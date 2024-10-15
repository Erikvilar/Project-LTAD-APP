import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

export default function Next() {
    const url = "http:///10.15.96.27:8021/api/users";
    const [data, setData] =useState();
    useEffect(()=>{
     axios.get(url).then(response=>{
            if(response.status == 200){
            const res = response.data
            setData(res)
            }else{
                alert("Error")
            }
        })
    },[])
  
  console.log(data)
    
  return (
    <View >
      <Text
        style={{
          textAlign: "center",
          color: "#2160bd",
          fontSize: 20,
          paddingTop: 50,
          fontWeight: 800,
        }}
      >
        Usuarios cadastrados
      </Text>
      <Text    style={{
          textAlign: "center",
          color: "#fe900e",
          fontSize: 15,
          fontWeight: 800,
        }}>Lista</Text>
   
           
        <FlatList
        data={data}
        renderItem={({item}) => <View style={{marginTop:20, borderWidth:1, width:360, borderBlockColor:"orange", display:"flex", justifyContent:"center",alignItems:"center"}}>
            <Text>Usuario: {item.login}</Text>
            <Text>Senha: {item.password}</Text>
            <Text>Horario: {item.dataHora}</Text>
            
            </View>}
               keyExtractor={item => item.id.timestamp}

      />

   
      </View>
        
  );
}
