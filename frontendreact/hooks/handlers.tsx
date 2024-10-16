import axios from "axios";
import { useState } from "react";

import { useRouter } from "expo-router";

export const handleSubmit = (formData:Object, url:string) => {
    const [count, setCount] = useState(0);
    
    const router = useRouter();
    setCount(count + 1);
    /*
     * Body request
     * Fields can update any times
     * follow rules from API RESt
     */
    axios
      .post(url, formData)
      .then((response) => {
        if(response.status == 200){
          router.push("/next")
          return count;
        }
        alert("sucess");
        console.log(response);
      })
      .catch((error) => {
        alert("(X) Error" + error);
        console.log(error);
      });
   
  };