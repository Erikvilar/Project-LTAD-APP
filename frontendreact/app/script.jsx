import React, { useEffect, useState } from 'react';
import { View, Button, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MAX_REQUESTS = 4;
const TIME_LIMIT = 12 * 60 * 60 * 1000; // 12 horas em milissegundos

const script = () => {
  const [requestsLeft, setRequestsLeft] = useState(MAX_REQUESTS);
  
  useEffect(() => {
    checkRequestStatus();
  }, []);

  const checkRequestStatus = async () => {
    const lastRequestTime = await AsyncStorage.getItem('lastRequestTime');
    const requestCount = await AsyncStorage.getItem('requestCount');

    if (lastRequestTime) {
      const timeElapsed = Date.now() - Number(lastRequestTime);

      if (timeElapsed > TIME_LIMIT) {
        // Resetar contagem se o tempo limite foi atingido
        await AsyncStorage.setItem('requestCount', '0');
        setRequestsLeft(MAX_REQUESTS);
      } else {
        const remainingRequests = MAX_REQUESTS - (requestCount ? Number(requestCount) : 0);
        setRequestsLeft(remainingRequests);
      }
    }
  };

  const sendRequest = async () => {
    const requestCount = await AsyncStorage.getItem('requestCount');
    const count = requestCount ? Number(requestCount) : 0;

    if (count < MAX_REQUESTS) {
      // Envie sua requisição aqui
      console.log('Requisição enviada');

      await AsyncStorage.setItem('requestCount', String(count + 1));
      await AsyncStorage.setItem('lastRequestTime', String(Date.now()));
      setRequestsLeft(MAX_REQUESTS - (count + 1));
    } else {
      console.log('Limite de requisições atingido. Tente novamente mais tarde.');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Requisições restantes: {requestsLeft}</Text>
      <Button title="Enviar Requisição" onPress={sendRequest} disabled={requestsLeft <= 0} />
    </View>
  );
};

export default script;