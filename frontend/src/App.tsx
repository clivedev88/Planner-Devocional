import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import PlanCards from "./components/PlanCards";
import History from "./components/History";
import { generatePlan } from "./services/api";

function normalizarTema(value) {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
}

export default function App() {
  const [theme, setTheme] = useState("");
  const [plano, setPlano] = useState([]);
  const [historico, setHistorico] = useState([]);
  const [error, setError] = useState("");

  async function handleGenerate() {
    const temaNormalizado = normalizarTema(theme);

    if (!temaNormalizado) {
      setError("Digite um tema.");
      return;
    }

    setError("");

    const data = await generatePlan(temaNormalizado);

    setPlano(data.plano);

    setHistorico((prev) => [
      { tema: data.tema, plano: data.plano },
      ...prev,
    ]);
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <Header />

      <Form
        value={theme}
        onChange={setTheme}
        onSubmit={handleGenerate}
      />

      {error && (
        <p className="text-center text-red-600 font-semibold mt-4">
          {error}
        </p>
      )}

      <PlanCards plano={plano} />

      <History historico={historico} />
    </div>
  );
}
