# Projeto Recicla 365

Esta é uma aplicação web desenvolvida em React para localizar pontos de coleta de materiais recicláveis em Florianópolis (mas pode ser usado em qualquer lugar do Brasil). Os usuários podem visualizar os pontos no mapa e obter informações detalhadas sobre cada local. Além de poderem se cadastrar na plataforma e cadastram novos pontos.


## Uso

Ao acessar a aplicação, você será redirecionado para a página inicial, onde poderá visualizar um mapa baseado na sua localização com os pontos de coleta disponíveis.
Clique em um marcador no mapa para ver informações detalhadas sobre o ponto de coleta, como nome, endereço e tipos de materiais aceitos.
É possível clicar na opção "ver em Lista" e ver informações mais detalhadas em formato de card.


## Funcionalidades

- Mapa através do uso da API do Leaflet.
- Busca de CEP pela API do viaCep.
- Exibição dos pontos de coleta em um mapa interativo.
- Cadastro de novos usuários com validações no formulário (email/cpf).
- Validações no login (email não cadastrado/senha incorreta).
- Cadastro de novos pontos de coleta.
- Edição e exclusão de pontos de coleta.
- Menu e conteúdo diferentes para usuários logados e não cadastrados.
  

## Como usar

1. Clone este repositório:

```bash
git clone https://github.com/renatapulz/recicla365.git
```

2. Instale as dependências:

```bash
cd nome-do-repositorio
npm install
```

3. Execute o aplicativo: (abra dois terminais)

```bash
npm run dev
```

No outro:

```bash
npx json-server ./src/mock/db.json
```

4. Abra http://localhost:3000 no seu navegador para visualizar o projeto.


## Demonstração

Aqui está uma prévia do projeto:

![GIF exibindo as funcionalidades do projeto Recila365](/giff.gif "GIF Recila365")











   
