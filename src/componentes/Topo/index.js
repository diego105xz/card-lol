import './style.css';
import banner from'../../assets/banner.png';


function Topo(){
    return(
        <header>
            <img src={banner} alt='banner' className='img-banner'/>
        </header>
    );
}

export default Topo;