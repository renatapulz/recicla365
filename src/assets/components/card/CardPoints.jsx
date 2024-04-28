import React from 'react';
import "./style.css";
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

function CardPoints( props ) {
    const { exibirIcones } = props;

    return (
        <div className="card_container">
            <h3 className="title-card">Ponto de Coleta:</h3>
            <div className="container-text">
                <div className="info-card">Nome: </div>
                <div className="info-card">Descrição: </div>
                <div className="info-card">Endereço</div>
                <div className="info-card">CEP: </div>
                <div className="info-card">Logradouro: </div>
                <div className="info-card">Bairro: </div>
                <div className="info-card">Cidade: </div>
                <div className="info-card">Estado: </div>
                <div className="info-card">Latitude: </div>
                <div className="info-card">Longitude: </div>
                <div className="info-card">Tipos de resíduos aceitos: </div>
                {exibirIcones ? (<div className='icons'><DeleteIcon sx={{ fontSize: 25 }} className="icon-card" /> <ModeEditIcon sx={{ fontSize: 25 }} className="icon-card" /></div>) : null}
            </div>
      </div>
    )
  }
 

  CardPoints.propTypes = {
    exibirIcones: PropTypes.bool.isRequired,
    dadosPonto: PropTypes.exact({
        userId: PropTypes.number.isRequired,
        nomeLocal: PropTypes.string.isRequired,
        descricao: PropTypes.string.isRequired,
        logradouro: PropTypes.string.isRequired,
        bairro: PropTypes.string.isRequired,
        cidade: PropTypes.string.isRequired,
        estado: PropTypes.string.isRequired,
        cep: PropTypes.string.isRequired,
        tiposResiduos: PropTypes.string.isRequired,
        latitude: PropTypes.string.isRequired,
        longitude: PropTypes.string.isRequired,
    })
  }
  
  export default CardPoints;
