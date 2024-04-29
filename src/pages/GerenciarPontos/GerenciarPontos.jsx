import CardPoints from "../../assets/components/card/CardPoints"
import { useContext, useEffect } from "react";
import { CollectionPointContext } from "../../hooks/CollectionPointContext.jsx"
import './style.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from "react-router-dom";

function GerenciarPontos() {
  const { pontoColeta, getCollectionPointsbyUser } = useContext(CollectionPointContext)

  useEffect(() => {
    getCollectionPointsbyUser();
  }, []);

  return (
    <div className="container">
      <div className="icons">
        <Link to="/cadastro-ponto"><AddCircleIcon className="icon-card" sx={{ fontSize: 50 }}/></Link>
      </div>
      {Array.isArray(pontoColeta) && pontoColeta.length > 0 ? (
        pontoColeta.map((ponto, index) => (
          <CardPoints exibirIcones={true} Points={ponto} key={index} />
        ))
      ) : (
        <h2 className='message'>Sem pontos de coleta cadastrados. Clique no ícone (+) para adicionar.</h2>
      )}
    </div>
  )
}

export default GerenciarPontos;