import axios from 'axios'

const client = axios.create({
    baseURL:"http://localhost:3000/participants"
})
const getAll = async ()=>{
    const res = await client.get();
    return res.data;
}
const add = async p =>{
    const options = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    const res = await client.post('',p,options)
    // console.log(res.data)
    return res.data;
}
const delP = async p =>{
    // const res = await client.delete(p.id)
    // return res.data
    const res = await axios.delete("http://localhost:3000/participants/"+p.id)
    // console.log(res)
    return res
}
const RegistrationService = {getAll,add,delP}
export default RegistrationService