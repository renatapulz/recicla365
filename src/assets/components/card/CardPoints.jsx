import React from 'react';
import "./style.css";
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

function CardPoints( { exibirIcones, Points } ) {
    return (
        <div className="card_container">
            <h3 className="title-card">Ponto de Coleta:</h3>
            <div className="container-text">
                <div className="info-card">Local: {Points.nomeLocal}</div>
                <div className="info-card">{Points.descricao}</div>
                <div className="info-card">Endereço:</div>
                <div className="info-card">{Points.logradouro} Bairro: {Points.bairro}</div>
                <div className="info-card">Cidade: {Points.cidade} / {Points.estado}</div>
                <div className="info-card">CEP: {Points.cep}</div>
                <div className="info-card">Latitude: {Points.latitude}</div>
                <div className="info-card">Longitude: {Points.longitude}</div>
                <div className="info-card">Tipos de resíduos aceitos: {Points.tiposResiduos.join(', ')}
                </div>
                {exibirIcones ? (<div className='icons'><DeleteIcon sx={{ fontSize: 25 }} className="icon-card" /> <ModeEditIcon sx={{ fontSize: 25 }} className="icon-card" /></div>) : null}
            </div>
      </div>
    )
  }
 

  CardPoints.propTypes = {
    exibirIcones: PropTypes.bool.isRequired,
    Points: PropTypes.exact({
        nomeLocal: PropTypes.string.isRequired,
        descricao: PropTypes.string.isRequired,
        logradouro: PropTypes.string.isRequired,
        bairro: PropTypes.string.isRequired,
        cidade: PropTypes.string.isRequired,
        estado: PropTypes.string.isRequired,
        cep: PropTypes.string.isRequired,
        tiposResiduos: PropTypes.array.isRequired,
        latitude: PropTypes.string.isRequired,
        longitude: PropTypes.string.isRequired,
    })
  }
  
  export default CardPoints;
