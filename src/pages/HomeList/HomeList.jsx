import CardPoints from "../../assets/components/card/CardPoints.jsx"
import { useContext, useEffect } from "react";
import { CollectionPointContext } from "../../hooks/CollectionPointContext.jsx"
import CustomButton from "../../assets/components/buttom/buttom";
import { Link } from "react-router-dom";
import "./style.css";

function HomeList() {
  const { pontoColeta, getCollectionPoints } = useContext(CollectionPointContext)

  useEffect(() => {
    getCollectionPoints();
  }, []);

  return (
    <div className="container">
      <div className="return-map">
      <Link to="/"><CustomButton type="submit" buttonText="Ver Pontos em formato de mapa"/></Link>
      </div>
    {Array.isArray(pontoColeta) && pontoColeta.length > 0 && pontoColeta.map((ponto, index) => (
      delete ponto.userId,
      delete ponto.id,
      <CardPoints exibirIcones={false} Points={ponto} key={index} />
    ))}
    </div>
  )
}

export default HomeList;


