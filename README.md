# Frontend - Painel de Publicações DJE-SP

Painel Kanban para gerenciar publicações extraídas do DJE-SP (Diário da Justiça Eletrônico de São Paulo), com autenticação e cadastro de usuários.

## 🛠 Tecnologias utilizadas

- React
- TypeScript
- Shadcn UI (Radix + Tailwind CSS)
- React Hook Form
- Zod
- Axios
- Vite

## 📦 Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/frontend-dje-kanban.git
   cd frontend-dje-kanban
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o projeto:

   ```bash
   npm run dev
   ```

## ⚙️ Variáveis de ambiente

As variáveis estão no arquivo `.env.example` na raiz do projeto:

```env
VITE_BASE_URL=
VITE_API_URL=

VITE_NODE_ENV=
VITE_PUBLIC_REDUX_KEY=
VITE_PUBLIC_USER_LOCAL=
VITE_PUBLIC_TOKEN_LOCAL=
```

## 🧩 Funcionalidades

- Login e autenticação via token JWT
- Cadastro de novos usuários
- Recuperação e redefinição de senha via e-mail
- Visualização de publicações em painel Kanban
- Atualização do status das publicações (drag & drop)
- Integração com API REST do backend

## 🧭 Rotas disponíveis

- `/` — Página principal com painel de publicações
- `/login` — Autenticação de usuário
- `/cadastro` — Criação de novo usuário
- `/esqueci-senha` — Envio de email de recuperação
- `/redefinir-senha` — Redefinição de senha com código

---

> Este frontend consome a API backend desenvolvida com Node.js e gerencia os dados extraídos via scraping Python.
