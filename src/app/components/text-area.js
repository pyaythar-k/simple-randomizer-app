export default function TextArea({ text, setText }) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <textarea
      className="w-full h-52 rounded-lg border-2 border-gray-300 p-5 text-gray-700"
      placeholder="Paste your items line by line..."
      spellCheck={false}
      value={text}
      onChange={handleOnChange}
    ></textarea>
  );
}
