import { useEffect, useState } from "react";
import axios from 'axios'

const useRequest = (inicialData, url) => {
    const [data, setData] = useState(inicialData)


    useEffect(() => {
        axios.get(url , {
            headers:{
                Authorization: localStorage.getItem('token')
            }
        })
        .then((res) => {
           setData(res.data)
        })
        .catch((err) => {
            console.log(err)
            alert("Ocorreu um erro.")
        })
    }, [url])
    return (data)
}
export default useRequest;