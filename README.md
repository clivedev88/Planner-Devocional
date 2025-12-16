PLANNER DEVOCIONAL

É uma aplicacão Fullstack que gera um plano devocional bíblico de 3 dias a partir de um tema informado pelo usuário.

 → Funcionalidades:
- Input: O usuário digita o tema
- Validaão e normalizaão  do texto digitado: evita campos vazios, acentos e letras maiúsculas são convertidas.
- Plano gerado de forma automática de acordo com a palavra-chave
- Cards gerados para exibião do plano
- Histórico dos últimos 3 planos gerados

 → Fluxo da aplicacão:
 1. Usuário digita um tema
 2. Validaão e normalizacao do tema digitado no frontend
 3. Requisicao POST '/generate-plans' enviada para o backend por meio do 'AXIOS'
 4. Backend retorna um plano de acordo com a palavra-chave digitada
 5. Renderizacao no frontens

 → Tecnologias utilizadas:
 - Frontend:
  * React (Vite)
  * Axios
  * Tailwind CSS

 - Backend:
  * Node.js
  * Express
  * CORS 

 → Arquitetura:
- Frontend:
src/
 ├─ components/     
      ├──── Form.tsx
      ├──── Header.tsx
      ├──── History.tsx
      └───── PlanCards.tsx
 ├─ services/       
      ├────api.ts
 ├─ App.tsx         
 └─ main.tsx


- Backend:
src/
 ├─ controllers/     
      └───── PlanControllers.js
 ├─ models/     
      └───── PlanModels.js
 ├─ routes/     
      └───── PlanRoutes.js     
 ├─ .env
 ├─ .gitignore
 ├─ server.js         
 └─ main.tsx
