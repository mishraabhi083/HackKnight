import {FaIdBadge,FaPaperPlane} from 'react-icons/fa'
import RegistrationService from '../services/RegistrationService'
import { useState } from 'react'
const countries=[
"United States",
"Canada",
"United Kingdom",
"Mexico",
"France",
"Japan",
"Italy",
"India",
"Brazil",
"China",
]
const RegistrationForm = ()=>{
    const[p,setP]=useState([
        {name:'',
        email:'',
        phone:'',
        location:''
    }])
    const handleChange = (e) => {
    const { name, value } = e.target;
    setP({ ...p, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const res = RegistrationService.add(p)
          console.log(`POST Response : ${res}`)
          // Reset form after successful submission
          setP({name:'',
          email:'',
          phone:'',
          location:''
            });
        } catch (error) {
          console.error('Error:', error);
        }
    };
    // useEffect()
    return <>
    <div className="container imgContainer col-4">
    <img src="/Images/HKTN24.png" alt="" className="img-fluid"/>
    </div>
        <div className="container formContainer col-4 p-5">
            <div className="h4 text-dark text-center mb-5"> <FaIdBadge className='mx-3 text-danger'/>Register to <span className="text-danger">Hack</span></div>
        <form className="form-group" onSubmit={handleSubmit}>
            <label htmlFor="Name"></label> <input value={p.name} type="text" name="name" className="form-control" placeholder='Your Name' onChange={handleChange} />
            <label htmlFor="Email"></label><input value={p.email} type="email" name="email" className="form-control" placeholder='youremail@xyz.com'  onChange={handleChange} />
            <label htmlFor="Phone"></label><input value={p.phone} type="text" name="phone" className="form-control" placeholder='+XX 63XXXXXX00'  onChange={handleChange} />
            <label htmlFor="Country"></label>
            <select class="form-select" aria-label="Default select example">
            <option selected>-- Select Country --</option>
            {countries.map((c)=>{
                return <>
                    <option defaultValue={c} value={p.location} name="location">{c}</option>
                </>
            })}
            </select>
            <button className="btn btn-danger btn-lg rounded-0 p-2 my-5 w-100" type="submit" > <FaPaperPlane/> GO!</button>
        </form>
        </div>
    </>
}
export default RegistrationForm