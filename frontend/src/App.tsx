export default function App() {
  return (
    <div className="min-h-screen bg-amber-50 flex flex-col items-center py-10 px-4">

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-stone-800 mb-2">
          Plano Devocional
        </h1>
        <p className="text-black text-lg">
          Gere seu plano bíblico dos próximos 3 dias.
        </p>
      </div>

      {/* Main */}
      <div className="bg-white rounded-xl w-full max-w-4xl p-6 space-y-12 shadow-lg">

        <div>
          <h2 className="text-xl font-semibold text-stone-800 mb-4">
            Como está se sentindo ultimamente?
          </h2>

          <form className="flex flex-col gap-4">
            <input
              className="border border-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 "
              placeholder="Diga como se sente em uma palavra..."
            />
            <button
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition"
            >
              Gerar
            </button>
          </form>
        </div>

        {/* Seu Plano Devocional */}
        <div>
          <h2 className="text-2xl font-semibold text-stone-800 mb-6 text-center">
            Seu Plano Devocional
          </h2>

          <div className="flex flex-col gap-6">

            <div className="bg-white border border-amber-200 rounded-lg p-5 shadow">
              <h3 className="text-xl font-bold text-emerald-700 mb-2">Dia 1</h3>
              <p className="italic text-gray-700">Salmos 23:1</p>
              <p className="text-gray-600 mt-1">
                O Senhor é o meu pastor; de nada terei falta.
              </p>
              <p className="text-emerald-700 mt-3">
                Reserve um momento para refletir sobre as bênçãos em sua vida.
              </p>
            </div>

            <div className="bg-white border border-amber-200 rounded-lg p-5 shadow">
              <h3 className="text-xl font-bold text-emerald-700 mb-2">Dia 2</h3>
              <p className="italic text-gray-700">Jeremias 29:11</p>
              <p className="text-gray-600 mt-1">
                Porque eu sei os planos que tenho para vocês, declara o Senhor...
              </p>
              <p className="text-emerald-700 mt-3">
                Escreva seus objetivos e sonhos para o futuro.
              </p>
            </div>

            <div className="bg-white border border-amber-200 rounded-lg p-5 shadow">
              <h3 className="text-xl font-bold text-emerald-700 mb-2">Dia 3</h3>
              <p className="italic text-gray-700">Romanos 8:28</p>
              <p className="text-gray-600 mt-1">
                Sabemos que Deus age em todas as coisas para o bem daqueles que O amam.
              </p>
              <p className="text-emerald-700 mt-3">
                Reflita sobre um desafio recente e identifique algo positivo que surgiu dele.
              </p>
            </div>

          </div>
        </div>

        {/* Histórico */}
        <div>
          <h3 className="text-2xl font-semibold text-stone-800 mb-6">
            Últimos planos gerados
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow">
              <h4 className="text-xl font-bold text-gray-700 mb-2">Fé</h4>
              <ul className="list-disc list-inside text-gray-600">
                <li>Dia 1: Salmos 23:1</li>
                <li>Dia 2: Jeremias 29:11</li>
                <li>Dia 3: Romanos 8:28</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow">
              <h4 className="text-xl font-bold text-gray-700 mb-2">Ansiedade</h4>
              <ul className="list-disc list-inside text-gray-600">
                <li>Dia 1: Salmos 23:1</li>
                <li>Dia 2: Jeremias 29:11</li>
                <li>Dia 3: Romanos 8:28</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow">
              <h4 className="text-xl font-bold text-gray-700 mb-2">Gratidão</h4>
              <ul className="list-disc list-inside text-gray-600">
                <li>Dia 1: Salmos 23:1</li>
                <li>Dia 2: Jeremias 29:11</li>
                <li>Dia 3: Romanos 8:28</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}