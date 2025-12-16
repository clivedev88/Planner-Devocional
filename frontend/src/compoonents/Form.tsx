export default function Form() {
  return (
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
  )
}
