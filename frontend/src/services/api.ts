import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
});

export async function generatePlan(theme) {
  const res = await api.post("/generate-plan", { theme });
  return res.data;
}
