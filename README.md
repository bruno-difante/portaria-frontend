# Frontend - Portaria UFN

Interface web do sistema de controle de entrada e saída de itens da portaria da Universidade Franciscana (UFN), desenvolvida com **React** e **Tailwind CSS**.

## 🚀 Funcionalidades

- 📦 Registro de empréstimos e devoluções diretamente na tela inicial
- 👨‍💼 Cadastro de usuários (nome, matrícula, código de barras)
- 🛠️ Cadastro de itens (nome, código de barras)
- 📋 Visualização de todos os usuários e itens cadastrados
- 🔔 Alertas de sucesso/erro para ações importantes
- 🔄 Integração com o backend via API REST

## 🧰 Tecnologias usadas

- React
- React Router DOM
- Tailwind CSS
- shadcn.ui (componentes)
- Fetch API
- Vite
- Create React App

## 📂 Estrutura do projeto

```
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── itens/
│   │   │   └── CadastroItensForm.jsx
│   │   ├── usuarios/
│   │   │   └── CadastroUsuariosForm.jsx
│   │   └── ui/
│   │       └── alert.jsx
│   ├── pages/
│   │   ├── Dashboard.js
│   │   ├── CadastroItens.js
│   │   └── CadastroUsuarios.js
│   ├── App.js
│   └── index.js
└── tailwind.config.js
```

## 🛠️ Como rodar localmente

```bash
cd frontend
npm install
npm start
```

A aplicação será iniciada em `http://localhost:3000`.
