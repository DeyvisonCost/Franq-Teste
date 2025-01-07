# Franq

Este é um projeto criado utilizando **React** com **Vite**. Ele inclui uma estrutura bem organizada para desenvolvimento frontend, utiliza **TypeScript**, **TailwindCSS** e é equipado com diversas dependências e ferramentas para testes, formatação de código, e validação de formulários.

## Requisitos para executar o projeto

Certifique-se de que sua máquina atende aos seguintes requisitos:

1. **Node.js**:

   - Instale a última versão LTS do [Node.js](https://nodejs.org/) (recomendado ≥ v18.17.0).

2. **Gerenciador de Pacotes**:

   - Você pode usar o `npm` (que vem junto com o Node.js) ou instalar o [Yarn](https://yarnpkg.com/) como alternativa.

3. **Git** (opcional, mas recomendado):
   - Certifique-se de ter o [Git](https://git-scm.com/) instalado para clonar o repositório.

## Instalação do Projeto

Siga os passos abaixo para configurar o projeto localmente:

1. **Clone o Repositório**:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd franq
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configure o ambiente** (se aplicável):
   - Crie um arquivo `.env` com as variáveis de ambiente necessárias (consulte os desenvolvedores para mais detalhes).

## Scripts Disponíveis

O arquivo `package.json` inclui os seguintes scripts:

### Desenvolvimento

- **Iniciar o servidor de desenvolvimento**:
  ```bash
  npm run dev
  # ou
  yarn dev
  ```

### Build

- **Gerar uma build para produção**:

  ```bash
  npm run build
  # ou
  yarn build
  ```

- **Executar uma pré-visualização da build**:
  ```bash
  npm run preview
  # ou
  yarn preview
  ```

### Linting

- **Verificar padrões de código**:

  ```bash
  npm run lint:check
  # ou
  yarn lint:check
  ```

- **Formatar o código automaticamente**:
  ```bash
  npm run lint:format
  # ou
  yarn lint:format
  ```

### Testes

- **Executar os testes**:
  ```bash
  npm test
  # ou
  yarn test
  ```

### Husky

- **Configurar hooks do Git** (após instalar dependências):
  ```bash
  npm run prepare
  # ou
  yarn prepare
  ```

## Estrutura do Projeto

O projeto segue uma estrutura modular organizada. Aqui está um resumo:

- **src/components**: Contém os componentes reutilizáveis, como botões e modais.
- **src/config**: Arquivos de configuração, como rotas.
- **src/domain**: Modelos e casos de uso para lógica de negócio.
- **src/presentation**: Contém layouts e visualizações das páginas principais.
- **src/infra**: Configurações de API e clientes HTTP.
- **public**: Arquivos públicos como imagens e ícones.

## Tecnologias e Bibliotecas Utilizadas

- **React**: Biblioteca principal para construção da interface.
- **Vite**: Ferramenta de build rápida para projetos modernos.
- **TypeScript**: Tipagem estática para um desenvolvimento mais seguro.
- **TailwindCSS**: Framework para estilização rápida.
- **React Hook Form**: Gerenciamento de formulários.
- **Zod**: Validação de esquemas.
- **Jest**: Framework de testes.
- **ESLint**: Verificação de padrões de código.
- **Husky**: Configuração de hooks do Git.

## Envs:

VITE_BASE_URL=/api
VITE_SECRET_KEY=?key=7e8c06cf

## Se houver algum problema com bloqueio da api fornecida no navegador você precisa:

- baixar a extensão "Allow CORS: Access-Control-Allow-Origin"
- Ative a extensão clicando no "C" de de cor laranja
- habilite a opção "add or remove wishlist"

## Suporte

Caso tenha dúvidas ou encontre problemas, abra uma issue no repositório ou entre em contato com o desenvolvedor do projeto.

---

Esperamos que você aproveite trabalhando neste projeto! ✨
