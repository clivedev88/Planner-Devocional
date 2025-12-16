export default function Form({ value, onChange, onSubmit }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("[Form] submit com value:", value);
    onSubmit();
  }

  return (
    <div className="mb-10">
      <h2 className="text-xl font-semibold text-stone-800 mb-4">
        Como está se sentindo ultimamente?
      </h2>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2"
          placeholder="Ex: ansiedade, gratidao, lideranca..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />

        <button
          className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition"
          type="submit"
        >
          Gerar
        </button>
      </form>
    </div>
  );
}
