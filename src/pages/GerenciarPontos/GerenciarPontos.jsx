import CardPoints from "../../assets/components/card/CardPoints"
import { useContext, useEffect } from "react";
import { CollectionPointContext } from "../../hooks/CollectionPointContext.jsx"

function GerenciarPontos() {
  const { pontoColeta, getCollectionPointsbyUser } = useContext(CollectionPointContext)

  useEffect(() => {
    getCollectionPointsbyUser();
  }, []);

  return (
    <div className="container">
    {Array.isArray(pontoColeta) && pontoColeta.length > 0 && pontoColeta.map((ponto, index) => (
      delete ponto.userId,
      delete ponto.id,
      <CardPoints exibirIcones={true} Points={ponto} key={index} />
    ))}
  </div>
  )
}

export default GerenciarPontos;