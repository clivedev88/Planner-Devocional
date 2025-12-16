export default function History() {
  return (
        <div>
          <h3 className="text-2xl font-semibold text-stone-800 mb-6">
            Últimos planos gerados
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
                ['Fé', 'Ansiedade', 'Gratidão', 'Default']. map((tema) => (
                    <div
                    key={tema}
                    className="bg-white border border-gray-200 rounded-lg p-5 shadow"
                    >
                        <h4 className="text-xl font-bold text-gray-700 mb-2">{tema}</h4>
                        <ul className="list-disc list-inside text-gray-600">
                            <li>Dia 1: Salmos 23:1</li>
                            <li>Dia 2: Jeremias 29:11</li>
                            <li>Dia 3: Romanos 8:28</li>
                        </ul>
                    </div>
                ))
            }
            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow">

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

  )
}
