import axios from 'axios'

const client = axios.create({
    baseURL: "http://localhost:3000/faqs/"
});
const getAll = async ()=>{
    const res = await client.get();
    return res.data;
}
const FaqService = {getAll}
export default FaqService;