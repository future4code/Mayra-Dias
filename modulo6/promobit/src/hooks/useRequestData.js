import { useEffect, useState } from "react";
import axios from 'axios'

const useRequestData = (initialData, url) => {
const [data, setData] = useState(initialData)


useEffect(() => {
    axios.get(url, {
 Authorization: localStorage.getToken('token')
    })
})
.then((res) => {
    setData(res.data)
})
.cath((e) => {
    console.log(e)
}, [url])

return (data)

}

export default useRequestData;