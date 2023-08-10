
# Monitoramento de apis 

Aplicação feita para o monitoramento da rota de status de suas apis.

# Requisitos

* Urls.js; 
Aqui estará armazenada suas rotas de apis, sempre utilize esse arquivo para adicionar ou remover rotas.
Ela é chamada com um map no App.jsx para ser exibida, e customizada no Card.jsx
Irá precisar criar/ou garantir a existência do arquivo chamado Urls js para mapear suas rotas: 
```json

Exemplo:
const urlist = [
    {
        url:"exemplo.com/exemplo",
        name: "exemplo"
    },
```

## Rodando localmente


Entre no diretório do projeto

```bash
  cd monitor-dashboard
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```

