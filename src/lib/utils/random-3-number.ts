export default function random3Number(): number[] {
  const numbers = Array.from({ length: 22 }, (_, i) => i + 1); // [1, 2, ..., 22]
  numbers.sort(() => Math.random() - 0.5); // Embaralha os números
  return numbers.slice(0, 3); // Pega os 3 primeiros
}
