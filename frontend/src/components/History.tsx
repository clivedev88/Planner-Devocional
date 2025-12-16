export default function History({ historico }) {
  if (!historico || historico.length === 0) return null;

  return (
    <section className="mt-12">
      <h3 className="text-2xl font-semibold text-stone-800 mb-6">
        Últimos planos gerados
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {historico.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-5 shadow"
          >
            <h4 className="text-xl font-bold text-gray-700 mb-2 capitalize">
              {item.tema}
            </h4>

            <ul className="list-disc list-inside text-gray-600">
              {item.plano.map((d) => (
                <li key={d.dia}>
                  Dia {d.dia}: {d.versiculo}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
