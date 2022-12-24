import './style.css';
import Topo from '../Topo';
import Card from '../Card';

import lux from '../../assets/lux.jpg';
import garen from '../../assets/garen.jpg';
import tristana from '../../assets/tristana.jpg';
import ammu from '../../assets/ammu.jpg';
import jinx from '../../assets/jinx.jpg';
import veigar from '../../assets/veigar.jpg';
import akali from '../../assets/akali.jpg';
import soraka from '../../assets/soraka.jpg';

function Conteudo(){
    return(
        <main>
            <Topo />
            <section className='colecao-card'>
                <Card nome="Lux" campeao={lux} tipo="Mago"/>
                <Card nome="Garen" campeao={garen} tipo="Tanque"/>
                <Card nome="Tristana" campeao={tristana} tipo="Atirador"/>            
                <Card nome="Ammu" campeao={ammu} tipo="Tanque"/>
                <Card nome="Jinx" campeao={jinx} tipo="Atirador"/>
                <Card nome="Veigar" campeao={veigar} tipo="Mago"/>
                <Card nome="Akali" campeao={akali} tipo="Assasino"/>
                <Card nome="Soraka" campeao={soraka} tipo="Suporte"/>
            </section>
        </main>
    );
}

export default Conteudo;