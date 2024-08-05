export default function Button({ text, setAnswer }) {
  const handleSubmit = () => {
    const items = text.split('\n').filter(Boolean);
    const randomIndex = Math.floor(Math.random() * items.length);
    const randomItem = items[randomIndex];
    setAnswer(randomItem);
  };

  return (
    <button
      onClick={handleSubmit}
      className="border p-3 rounded-lg w-full hover:bg-slate-600"
    >
      Randomize 🎲
    </button>
  );
}
