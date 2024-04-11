import { useEffect, useState } from 'react'
import {FaComment} from 'react-icons/fa'
import FaqService from '../services/FaqService'
function DisplayFaqs(){
    
}

const About = () => {
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        FaqService.getAll().then(data => {
            setFaqs(data);
        });
    }, []);
    return (
        <div className="container col-4">
            <div className="imgContainer my-3">
                <img src="/Images/HKTN24.png" alt="" className="img-fluid"/>
            </div>
            <div className="NoteContainer">
                <p className='lead text-center'>
                    The Hackathon is your time for creating, collaborating, experimenting, and bringing your great ideas to life. The Hackathon is for all FTEs: all roles, levels, groups, and locations.
                </p>
            </div>
            <div className="FaqSection my-5 border-top py-3">
                <div className="h2"><span className="text-danger"><FaComment/></span> FAQs</div>
                
                {faqs.map((f, id) => (
                    <div className="faqs bg-light rounded-5 p-3 m-4 ">
                    <div key={id} className="h5  "> {id+1} . {f.question}</div>
                    <div key={id} className="p lead">{f.answer}</div>
                    </div>
                ))}
                
            </div>
        </div>
    );
}

export default About