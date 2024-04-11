import { FaHeart } from "react-icons/fa";
const Footer =()=>{
    return <>
        <div className="d-flex w-100 position-fixed bg-light  p-2 m-0 bottom-0 justify-content-center text-dark" style={{
            left:"0px"
        }}>
            Made with <FaHeart color="dd6666" className="mx-2"/> by Abhi.
        </div>
    </>
}
export default Footer;