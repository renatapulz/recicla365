import React from "react";
import CardPoints from "../../assets/components/card/CardPoints"
import { useContext, useEffect } from "react";
import { CollectionPointContext } from "../../hooks/CollectionPointContext.jsx"

function Home() {
  const { pontoColeta, getCollectionPoints } = useContext(CollectionPointContext)

  useEffect(() => {
    getCollectionPoints();
  }, []);

  return (
    <div className="container">
    {Array.isArray(pontoColeta) && pontoColeta.length > 0 && pontoColeta.map((ponto, index) => (
      delete ponto.userId,
      delete ponto.id,
      <CardPoints exibirIcones={false} Points={ponto} key={index} />
    ))}
    </div>
  )
}

export default Home;


