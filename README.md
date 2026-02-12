# Nana Bernardo - Personal Organizer

Este é o repositório oficial do site da Nana Bernardo, especialista em organização de ambientes (Personal Organizer). O projeto é uma aplicação web moderna desenvolvida para apresentar os serviços de Nana, seu portfólio de projetos e oferecer canais diretos de contato com os clientes.
---
Site: https://www.nanaorganizer.com.br/

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

- **React**: Biblioteca principal para construção da interface.
- **Vite**: Build tool rápida para desenvolvimento moderno.
- **CSS Modules**: Para estilização isolada e modularizada por componentes.
- **React Router**: Gerenciamento de rotas da aplicação.
- **EmailJS**: Integração para envio de formulários de contato diretamente para o e-mail.
- **Swiper**: Biblioteca para carrosséis e sliders (ex: fotos de projetos, depoimentos).
- **React Icons**: Conjunto de ícones personalizáveis.

## 📂 Estrutura do Projeto

Abaixo uma visão geral da organização de pastas dentro de `src/`:

- `assets/`: Imagens, logotipos e recursos estáticos.
- `components/`: Componentes reutilizáveis como Header, Footer, Botão de WhatsApp, etc.
- `pages/`: Páginas principais da aplicação (Home, Projetos, Serviços, Contato, etc.).
- `routers/`: Configurações de rotas do React Router.
- `api/`: Funções para interações com APIs externas (ex: reviews).

## 🛠️ Configuração e Execução

Para rodar o projeto localmente, siga os passos abaixo:

### Pré-requisitos

- Node.js
- npm ou yarn

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/gbetsa/nana-organizer-site.git
   ```

2. Entre na pasta do projeto:
   ```bash
   cd nana-personal-organizer
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

### Execução

Para iniciar o servidor de desenvolvimento:
```bash
npm run dev
```
O site estará disponível em `http://localhost:5173` (ou conforme indicado no terminal).

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com base no `.env_exemple`:

```env
# EmailJS
VITE_SERVICE_ID=seu_service_id
VITE_TEMPLATE_ID=seu_template_id
VITE_PUBLIC_KEY=sua_public_key

# Serpapi (Se aplicável)
VITE_API_KEY=sua_api_key
VITE_DATA_ID=seu_data_id
```

## 🌐 Deploy

O projeto está configurado para deploy contínuo na **Vercel**. Toda alteração na branch principal refletirá automaticamente no ambiente de produção.

