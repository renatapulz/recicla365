import { createContext, useState } from "react";

export const CollectionPointContext = createContext();

export const CollectionPointContextProvider = ({ children }) => {
    const [pontoColeta, setpontoColeta] = useState();

    const getCollectionPoints = () => {
        fetch("http://localhost:3000/collection-points")
            .then(response => response.json())
            .then(dados => setpontoColeta(dados))
            .catch(erro => console.log(erro))
    }

    const getCollectionPointsbyUser = () => {
        const userId = localStorage.getItem("userId");
        fetch("http://localhost:3000/collection-points?userId=" + userId)
            .then(response => response.json())
            .then(dados => setpontoColeta(dados))
            .catch(erro => console.log(erro))
    }

    const getCollectionPointData = (id) => {
        fetch("http://localhost:3000/collection-points/" + id)
            .then(response => response.json())
            .then(dados => setpontoColeta(dados))
            .catch(erro => console.error('Erro ao obter dados do ponto de coleta:', erro));
    }

    const createCollectionPoints = (nomeLocal, descricao, logradouro, bairro, cidade, estado, cep, tiposResiduos, latitude, longitude, numero, complemento) => {
        const userId = localStorage.getItem("userId");
        const tiposResiduosValue = tiposResiduos.map(tipo => tipo.value);
        fetch("http://localhost:3000/collection-points", {
            method: "POST",
            body: JSON.stringify({ userId, nomeLocal, descricao, logradouro, bairro, cidade, estado, cep, tiposResiduos: tiposResiduosValue, latitude, longitude, numero, complemento }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (response.ok) {
                    alert("Ponto de coleta cadastrado com sucesso!");
                    window.location.href = "/gerenciamento";
                } else {
                    throw new Error("Erro ao cadastrar ponto de coleta!");
                }
            })
            .catch(error => {
                console.error("Erro ao cadastrar ponto de coleta!:", error.message);
                alert("Erro ao cadastrar um ponto!");
            });
    };

    const editCollectionPoints = (id, userId, nomeLocal, descricao, logradouro, bairro, cidade, estado, cep, tiposResiduos, latitude, longitude, numero, complemento) => {
        const tiposResiduosValue = tiposResiduos.map(tipo => tipo.value);
        fetch("http://localhost:3000/collection-points/" + id, {
            method: "PUT",
            body: JSON.stringify({userId, nomeLocal, descricao, logradouro, bairro, cidade, estado, cep, tiposResiduos: tiposResiduosValue, latitude, longitude, numero, complemento}),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (response.ok) {
                    alert("Ponto de coleta editado!");
                    getCollectionPointsbyUser();
                    window.location.href = "/gerenciamento";
                } else {
                    throw new Error("Erro ao editar o ponto de coleta!");
                }
            })
            .catch(error => {
                console.error("Erro na edição!", error);
                alert("Erro na edição!");
            });
    }

    const deleteCollectionPoints = (id) => {
        fetch("http://localhost:3000/collection-points/" + id, {
            method: "DELETE",
        })
            .then(response => {
                if (response.ok) {
                    alert("Ponto de coleta excluído!");
                    getCollectionPointsbyUser();
                    window.location.href = "/gerenciamento";
                } else {
                    throw new Error("Erro ao excluir o ponto de coleta!");
                }
            })
            .catch(error => {
                console.error("Erro na exclusão!", error);
                alert("Erro na exclusão!");
            });
    }

    return (
        <CollectionPointContext.Provider value={{ pontoColeta, setpontoColeta, createCollectionPoints, getCollectionPoints, getCollectionPointsbyUser, editCollectionPoints, deleteCollectionPoints, getCollectionPointData }}>
            {children}
        </CollectionPointContext.Provider>
    )
}