import './style.css';

function Card(props){
    return(
        <div className="card">
            <div className='nome'>
                {props.nome}
            </div>
            
            <img className='campeao' src={props.campeao} alt={props.nome}/>

            <div className='tipo'>
                {props.tipo}
            </div>
        </div>
    );
}

export default Card;