import { useState } from "react";

const useFormulario = (inicial) =>{
const [form, setForm] = useState(inicial)

const inputChange = (event) => {
    const{value, name} = event.target
    setForm({...form,[name]: value})
}

const limparInput = () => {
    setForm(inicial)
}
return[form, inputChange, limparInput]

}
export default useFormulario;