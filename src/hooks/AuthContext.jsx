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
      const user = dados.find(user => user.email === email && user.senha === password);
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

const cadastro = (usuario) => {
  fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then(dados => {
      const userExists  = dados.find(user => user.email === usuario.email || user.cpf === usuario.cpf);
      if (userExists ) {
        alert("Email ou CPF já cadastrados.");
      } else {
        fetch("http://localhost:3000/users", {
          method: "POST",
          body: JSON.stringify(usuario),
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(() => { 
          alert("Usuário cadastrado com sucesso!");
        })
        .catch(() => alert("Erro ao cadastrar usuário!"));
      }
    })
    .catch(error => console.error("Erro ao buscar usuários:", error)); 
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