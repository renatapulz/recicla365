import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [logado, setLogado] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      setUser(userId);
      setLogado(true);
    }

  }, []);

const login = (email, password) => {
  fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then(dados => {
      const user = dados.find(user => user.email === email && user.password === password);
      if (user) {
        localStorage.setItem("userId", user.id);
        setUser(user.id);
        setLogado(true);
        alert("Logouuuu");
      } else {
        alert("Email ou senha incorretos.");
      }
    })
    .catch(error => console.error("Erro ao buscar usuários:", error));
};

const cadastro = (name, sexo, cpf, nascimento, email, endereco, password) => {
  fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then(dados => {
      const user = dados.find(user => user.cpf === cpf || user.email === email);
      if (user) {
        alert("Email ou CPF já cadastrados.");
        return;
      }
      return fetch("http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify({ name, sexo, cpf, nascimento, email, endereco, password }),
        headers: {
           'Content-Type': 'application/json',
        },
       })
      .then(response => {
        if (response.ok) {
          alert("Usuário cadastrado com sucesso!");
        } else {
          throw new Error("Erro ao cadastrar usuário!");
        }
      })
      .catch(error => {
        console.error("Erro ao cadastrar usuário:", error.message);
        alert("Erro ao cadastrar usuário!");
      });
    })
    .catch(error => {
      console.error("Erro ao tentar cadastrar:", error.message);
      alert("Erro ao tentar cadastrar. Tente novamente.");
    });
};

const logout = () => {
  setLogado(false);
  setUser(null);
  localStorage.removeItem("userId");
};

const isLoggedIn = () => {
  return logado;
};

return (
  <AuthContext.Provider value={{ user, logado, setLogado, login, logout, isLoggedIn, cadastro }}>
    {children}
  </AuthContext.Provider>
)
}