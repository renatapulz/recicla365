import MapaPontos from "../../assets/components/mapa/MapaPontos";
import { useContext, useEffect, useState } from 'react';
import { CollectionPointContext } from "../../hooks/CollectionPointContext.jsx";
import { AuthContext } from "../../hooks/AuthContext.jsx";
import CustomButton from "../../assets/components/buttom/buttom";
import "./style.css";
import { Link } from "react-router-dom";

function MapHomePage() {
    const { getUsersLength, userLength } = useContext(AuthContext);
    const { getCollectionPoints, pontoColeta } = useContext(CollectionPointContext);
    const [totalCollectionPoints, setTotalCollectionPoints] = useState(0);

    useEffect(() => {
        getCollectionPoints();
        getUsersLength();
    }, []);

    useEffect(() => {
        if (Array.isArray(pontoColeta)) {
            setTotalCollectionPoints(pontoColeta.length);
        }
    }, [pontoColeta]);

    return (
        <div>
            <div className="dashboard-summary">
                <div className="card-home">
                    <h3 className="title-card">Usuários ativos: {userLength}</h3>
                    <h3 className="title-card">Pontos cadastrados: {totalCollectionPoints}</h3>
                </div>
                <Link to="/list"><CustomButton type="submit" buttonText="Ver Pontos em formato de lista" /></Link>
            </div>
            <MapaPontos />
        </div>
    );
}

export default MapHomePage;
