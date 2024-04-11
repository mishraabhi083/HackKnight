import {FaHorseHead} from 'react-icons/fa'

const Header =()=>{
    return(<>
    
        <div className="header">
            <div className="h1 w-100 d-flex justify-content-center bg-light p-4">
                <FaHorseHead color="#dd6666" className='mx-2'  /> Hack <span className="text-danger">Knight</span>
            </div>
        </div>
    </>)
}
export default Header