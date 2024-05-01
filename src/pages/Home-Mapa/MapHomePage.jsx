import MapaPontos from "../../assets/components/mapa/MapaPontos";
import { useContext, useEffect, useState } from 'react';
import { CollectionPointContext } from "../../hooks/CollectionPointContext.jsx";
import { AuthContext } from "../../hooks/AuthContext.jsx";
import CustomButton from "../../assets/components/buttom/buttom";
import "./style.css";
import { Link } from "react-router-dom";

function MapHomePage() {
    const { getUsersLength, userLength, logado } = useContext(AuthContext);
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
        <>
            <div className="pontos-info">
                { logado ? (
                <>
                    <div className="item"><span className="label">Usuários ativos:</span> {userLength}</div>
                    <div className="item"><span className="label">Pontos cadastrados:</span> {totalCollectionPoints}</div>
                </>
                ) : (
                <>
                    <div className="item"><span className="label">Pontos cadastrados:</span> {totalCollectionPoints}</div>
                </>
                )}
            </div>
            <div className="ver-lista">
                <Link to="/list"><CustomButton type="submit" buttonText="Ver em Lista" /></Link>
            </div>
            <MapaPontos />
        </>
    );
}

export default MapHomePage;
