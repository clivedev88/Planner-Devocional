export default function PlanCards({ plano }) {
  if (!plano || plano.length === 0) {
    return (
      <section className="mt-12 text-center text-gray-500">
        Digite um tema acima para gerar seu plano de 3 dias
      </section>
    );
  }

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-stone-800 mb-6 text-center">
        📜 Seu Plano Devocional – 3 Dias
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {plano.map((dia) => (
          <div
            key={dia.dia}
            className="bg-white border border-amber-200 rounded-lg p-5 shadow"
          >
            <h3 className="text-xl font-bold text-emerald-700 mb-2">
              Dia {dia.dia}
            </h3>
            <p className="italic text-gray-700">{dia.versiculo}</p>
            <p className="text-gray-600 mt-1">{dia.resumo}</p>
            <p className="text-emerald-700 mt-3">{dia.tarefa}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
