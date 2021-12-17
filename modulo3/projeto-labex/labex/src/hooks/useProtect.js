import React from 'react';
import {useHistory} from "react-router-dom"
import { useEffect, axios} from 'react';



const useProtectedPage = () => {
    const history = useHistory();
  
    useEffect(() => {
      const token = localStorage.getItem("token");
  
      if (token === null) {
        console.log("Não está logado!!!");
        history.push("/login");
      }
    }, []);
  };

export default useProtectedPage;