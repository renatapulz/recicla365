import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [logado, setLogado] = useState(false);
  const [userLength, setUserLength] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      setUser(userId);
      setLogado(true);
    }

  }, []);

  const getUsersLength = async () => {
    try {
      const response = await fetch("http://localhost:3000/users");
      const dados = await response.json();
      setUserLength(dados.length);
    } catch (error) {
      console.error("Erro ao buscar o número de usuários:", error);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:3000/users");
      const dados = await response.json();
      
      const user = dados.find(user => user.email === email);
      
      if (user) {
        if (user.password === password) {
          localStorage.setItem("userId", user.id);
          setUser(user.id);
          setLogado(true);
          navigate("/gerenciamento");
        } else {
          alert("Senha incorreta!");
        }
      } else {
        alert("Usuário não cadastrado.");
      }
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  };

  const cadastro = async (name, sexo, cpf, nascimento, email, cep, logradouro, numero, complemento, bairro, cidade, estado, password) => {
    try {
      const response = await fetch("http://localhost:3000/users");
      const dados = await response.json();
      const user = dados.find(user => user.cpf === cpf || user.email === email);
      
      if (user) {
        alert("Email ou CPF já cadastrados.");
        return;
      }
      
      const newUser = {
        name, sexo, cpf, nascimento, email, cep, logradouro, numero, complemento, bairro, cidade, estado, password
      };
      
      const result = await fetch("http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
           'Content-Type': 'application/json',
        },
      });
      
      if (result.ok) {
        alert("Usuário cadastrado com sucesso! Por favor, efetue o login.");
        navigate("/login");
      } else {
        throw new Error("Erro ao cadastrar usuário!");
      }
    } catch (error) {
      console.error("Erro ao tentar cadastrar:", error.message);
      alert("Erro ao tentar cadastrar. Tente novamente.");
    }
  };

  const logout = () => {
    setLogado(false);
    setUser(null);
    localStorage.removeItem("userId");
    navigate("/login"); // Redireciona para a página de login após o logout
  };

  const isLoggedIn = () => {
    return logado;
  };

  return (
    <AuthContext.Provider value={{ user, logado, setLogado, login, logout, isLoggedIn, cadastro, getUsersLength, userLength }}>
      {children}
    </AuthContext.Provider>
  );
};