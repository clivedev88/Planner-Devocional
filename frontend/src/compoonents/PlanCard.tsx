export default function PlanCard({dia, versiculo, resumo, tarefa}) {
  return (
            <div className="bg-white border border-amber-200 rounded-lg p-5 shadow">
              <h3 className="text-xl font-bold text-emerald-700 mb-2">Dia {dia}</h3>
              <p className="italic text-gray-700">{versiculo}</p>
              <p className="text-gray-600 mt-1">{resumo}</p>
              <p className="text-emerald-700 mt-3">{tarefa}</p>
            </div>  )
}
