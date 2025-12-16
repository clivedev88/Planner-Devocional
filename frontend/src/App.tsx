import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import PlanCards from "./components/PlanCards";
import History from "./components/History";
import { generatePlan } from "./services/api";

export default function App() {
  const [theme, setTheme] = useState("");
  const [plano, setPlano] = useState([]);
  const [historico, setHistorico] = useState([]);
  const [error, setError] = useState("");

  async function handleGenerate() {
    const cleanTheme = theme.trim().toLowerCase();
    console.log("[App] clique/submit - theme:", cleanTheme);

    if (!cleanTheme) {
      setError("Digite um tema antes de gerar.");
      return;
    }

    setError("");

    try {
      const data = await generatePlan(cleanTheme);
      console.log("[App] resposta do backend:", data);

      setPlano(data.plano);

      setHistorico((prev) => [
        { tema: data.tema, plano: data.plano },
        ...prev,
      ]);
    } catch (err) {
      console.error("[App] erro:", err);
      setError("Não consegui conectar no backend. Verifique se ele está rodando.");
    }
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <Header />

      <Form value={theme} onChange={setTheme} onSubmit={handleGenerate} />

      {error && (
        <p className="text-center text-red-600 font-semibold mt-4">{error}</p>
      )}

      <PlanCards plano={plano} />

      <History historico={historico} />
    </div>
  );
}
