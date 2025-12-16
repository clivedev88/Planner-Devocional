import Form from "./compoonents/Form";
import Header from "./compoonents/Header";
import History from "./compoonents/History";
import PlanCard from "./compoonents/PlanCard";

export default function App() {

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col items-center py-10 px-4">
      <Header />

      <div className="bg-white rounded-xl w-full max-w-4xl p-6 space-y-12 shadow-lg">
        <Form />

        <div>
          <h2 className="text-2xl font-semibold text-stone-800 mb-6 text-center">
            Seu Plano Devocional
          </h2>

          <div className="flex flex-col gap-6">
            <PlanCard
            dia={1}
            versiculo={"Salmos 23:1"}
            resumo={"O Senhor é o meu pastor; nada me faltará."}
            tarefa={"Reserve um momento para refletir sobre a provisão de Deus em sua vida."} 
            />
            <PlanCard
            dia={2}
            versiculo={"Jeremias 29:11"}
            resumo={"Porque eu bem sei os pensamentos que penso de vós, diz o Senhor; pensamentos de paz e não de mal, para vos dar um futuro e uma esperança."}
            tarefa={"Escreva seus objetivos e sonhos para o futuro."} 
            />
            <PlanCard
            dia={3}
            versiculo={"Romanos 8:28"}
            resumo={"E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus, daqueles que são chamados por seu decreto."}
            tarefa={"Reflita sobre um desafio recente e identifique algo positivo."} 
            />
          </div>
        </div>

        <History />

      </div>
    </div>
  );
}