
import { useEffect, useState } from 'react'
import {FaUser,FaIdBadge,FaTrash} from 'react-icons/fa'
const colors=["#FCF7F8","#061A40","#0353A4","#006DAA","#003559"]
import RegistrationService from '../services/RegistrationService'

const ParticipantsList = ()=>{
    const [participants,setParticipants]=useState([])
    useEffect(()=>{
        RegistrationService.getAll().then(
            data=>setParticipants(data)
        )
    },[])
    const handelRemoveClick =async (p)=>{
        const res = await RegistrationService.delP(p).then(
            
        ).catch(error)(
            console.log("Could not delete participant : ",error)
        )
    }
    return <>
            <div className="h4 text-dark text-center my-5"> <FaIdBadge className='mx-3 text-danger'/>Total Participations :  <span className="text-danger">{participants.length}</span></div>
            
            <div className="tableContainer container my-5" style={{paddingBottom:"5%"}}>
            <table className="table table-hover table-borderless .table-striped">
                
                <tbody>
                {
                    
                    participants.map((p,index)=>{
                        return<>
                        <tr className='rounded-3' key={index}>
                            <td key={p.id}>{index+1}</td>
                            <td key={p.id}><div className="btn border-0 rounded-circle bg-light p-2"><FaUser color="#061A40" size={'1.5em'} className='p-0'/></div></td>
                            <td key={p.id}>{p.Id}</td>
                            <td key={p.id}>{p.name}</td>
                            <td key={p.id}>{p.email}</td>
                            <td key={p.id}>{p.phone}</td>
                            <td key={p.id}>{p.location}</td>
                            <td key={p.id}><div className="btn" onClick={()=>{handelRemoveClick(p)}}><FaTrash className='text-danger'/></div></td>
                        </tr>
                        </>
                    })
                }
                </tbody>
                
            </table>
            </div>
    </>
}
export default ParticipantsList