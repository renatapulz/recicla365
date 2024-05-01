import React from 'react';
import "./style.css";
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useContext } from "react";
import { CollectionPointContext } from "../../../hooks/CollectionPointContext"
import { Link } from "react-router-dom";

function CardPoints({ exibirIcones, Points }) {
  const { deleteCollectionPoints, getCollectionPointData } = useContext(CollectionPointContext)
  return (
    <div className="card_container">
      <h3 className="title-card">Ponto de Coleta:</h3>
      <div className="container-text">
        <div className="info-card">Local: {Points.nomeLocal}</div>
        <div className="info-card">{Points.descricao}</div>
        <div className="info-card">Endereço:</div>
        <div className="info-card">{Points.logradouro}, {Points.numero} Bairro: {Points.bairro}</div>
        {Points.complemento ? <div className="info-card">Complemento: {Points.complemento}</div> : null}
        <div className="info-card">Cidade: {Points.cidade} / {Points.estado}</div>
        <div className="info-card">CEP: {Points.cep}</div>
        <div className="info-card">Latitude: {Points.latitude}</div>
        <div className="info-card">Longitude: {Points.longitude}</div>
        <div className="info-card">Tipos de resíduos aceitos: {Points.tiposResiduos.join(', ')}
        </div>
        {exibirIcones ? (<div className='icons'><DeleteIcon sx={{ fontSize: 25 }} className="icon-card" onClick={() => deleteCollectionPoints(Points.id)} />
          <Link to="/edicao"><ModeEditIcon sx={{ fontSize: 25 }} className="icon-card" onClick={() => getCollectionPointData(Points.id)}/></Link></div>)
          : null}
      </div>
    </div>
  )
}

CardPoints.propTypes = {
  exibirIcones: PropTypes.bool.isRequired,
  Points: PropTypes.exact({
    id: PropTypes.number,
    userId: PropTypes.string,
    nomeLocal: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
    logradouro: PropTypes.string.isRequired,
    bairro: PropTypes.string.isRequired,
    cidade: PropTypes.string.isRequired,
    estado: PropTypes.string.isRequired,
    numero: PropTypes.number.isRequired,
    complemento: PropTypes.string,
    cep: PropTypes.string.isRequired,
    tiposResiduos: PropTypes.array.isRequired,
    latitude: PropTypes.string.isRequired,
    longitude: PropTypes.string.isRequired,
  })
}
export default CardPoints;
