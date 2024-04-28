import CardPoints from "../../assets/components/card/CardPoints"
import { useContext, useEffect } from "react";
import { CollectionPointContext } from "../../hooks/CollectionPointContext.jsx"
import './style.css';

function GerenciarPontos() {
  const { pontoColeta, getCollectionPointsbyUser } = useContext(CollectionPointContext)

  useEffect(() => {
    getCollectionPointsbyUser();
  }, []);

  return (
    <div className="container">
      {Array.isArray(pontoColeta) && pontoColeta.length > 0 ? (
        pontoColeta.map((ponto, index) => (
          <CardPoints exibirIcones={true} Points={ponto} key={index} />
        ))
      ) : (
        <h2 className='message'>Você não tem pontos de coleta cadastrados</h2>
      )}
    </div>
  )
}

export default GerenciarPontos;